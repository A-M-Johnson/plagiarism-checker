<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use App\Models\Screenshot;
use App\Models\User;
use App\Models\UserDepartment;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use App\Events\ProjectApproved;


class ProjectController extends Controller
{
    /**
     * Display a listing of the project.
     */
    public function index()
    {
        $projects = Project::where('user_id', Auth::user()->id)->paginate();
        // dd($projects);
        return Inertia::render('Project/Uploads', [
            'projects' => ProjectResource::collection($projects),
        ]);
        //
    }

    public function admin()
    {
        $projects = Project::paginate();

        return Inertia::render('Admin/Projects', [
            'projects' => ProjectResource::collection($projects),
        ]);
        //
    }

    public function student()
    {
        $project = Project::where('user_id', Auth::user()->id)->orderBy('created_at', 'desc')->first();

        return Inertia::render('Dashboard', [
            "project" => $project
        ]);
    }

    public function supervisor()
    {
        $projects = Project::where('supervisor_id', Auth::user()->id)->orderBy('created_at', 'desc')->get();

        return Inertia::render('Supervisor', [
            "projects" => ProjectResource::collection($projects),
        ]);
    }

    /**
     * Show the form for creating a new project.
     */
    public function create()
    {

        return Inertia::render('Project/Upload', [
            'supervisors' => $this->getSupervisors()
        ]);
    }

    public function getSupervisors() {
        $department_ids = UserDepartment::where('user_id', Auth::user()->id)->get()->pluck('department_id');
        $supervisor_ids = UserDepartment::whereIn('department_id', $department_ids)->where('role', 'lecturer')->get()->pluck('user_id');
        $supervisors = User::whereIn('id', $supervisor_ids)->get();

        return $supervisors;
    }

    /**
     * Store a newly created project in storage.
     */
    public function store(StoreProjectRequest $request)
    {

        if(!($score = $this->sendPostRequest($request->title . " " . $request->description))) {
            return back()->withErrors(['title' => 'Plagiarism Model Unavailable, please try again later']);
        }

        if(!($file = $request->file('file')->store('project_files'))) redirect('/project/create')->withErrors(['file', 'Unable to upload project file']);
        

        $project = Project::create([
            'title'         => $request->title,
            'description'   => $request->description,
            "file"          => $file,
            'department_id' => session('department_id'),
            'supervisor_id' => $request->supervisor,
            'user_id'       => Auth::user()->id,
            'score'         => $score,
        ]);
        
        foreach($request->file('screenshots') as $screenshot) {

            if($path = $screenshot->store('screenshots')) {
                Screenshot::create([
                    'image'      => $path,
                    'project_id' => $project->id,
                ]);
            }

        }

        return redirect('/dashboard')->with(["success" => "Project Uploaded Successfully"]);

    }

    public function sendPostRequest($text)
    {
        try {

            // The URL of the API or the endpoint to which the request will be sent
            $url = env('MODEL_PREDICT_URL', 'https://web-production-fbb59.up.railway.app/predict');
    
            // The data you want to send in the request
            $data = [
                'text' => $text,
            ];
    
            // Send the POST request using the Http facade
            $response = Http::post($url, $data);


            Log::info('message', [
                "response" => $response,
            ]);
    
            // Handle the response
            if ($response->successful()) {
                return $response->json()['prediction'];
            } else {
                // Handle errors
                return false;
            }

        }
        catch(\Exception $e) {
            Log::error('Failed to store user data: ' . $e->getMessage(), [
                'exception' => $e,
                'request_data' => $request->all(),
            ]);
            return false;
        }
    }

    /**
     * Display the specified project.
     */
    public function show(Project $project)
    {
        return Inertia::render('Project/ViewUpload', [
            'project' => new ProjectResource($project),
            'supervisors' => $this->getSupervisors(),
            'role' => session('role')
        ]);
    }

    /**
     * Show the form for editing the specified project.
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified project in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        
        $project->update([
            'status' => $request->status
        ]);

        event(new ProjectApproved($project, $request->status));

        return back()->with(['success' => "project {$request->status} successfully"]);
    }

    /**
     * Remove the specified project from storage.
     */
    public function destroy(Project $project)
    {
        //
    }
}
