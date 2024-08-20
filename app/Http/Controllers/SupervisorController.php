<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDepartmentRequest;
use App\Http\Requests\StoreSupervisorRequest;
use App\Http\Requests\UpdateDepartmentRequest;
use App\Http\Requests\UpdateSupervisorRequest;
use App\Http\Resources\DepartmentResource;
use App\Http\Resources\ProjectResource;
use App\Models\Department;
use App\Models\Project;
use App\Models\User;
use App\Models\UserDepartment;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class SupervisorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $supervisor_ids = UserDepartment::where('role', 'lecturer')->get()->pluck('user_id');
        $supervisors    = User::whereIn('id', $supervisor_ids)->paginate();

        return Inertia::render('Admin/Supervisors', [
            'supervisors' => $supervisors,
        ]);
    }

    public function students($supervisor)
    {
        $student_ids = Project::where('supervisor_id', $supervisor)->get()->pluck('user_id');
        $students    = User::whereIn('id', $student_ids)->paginate();

        return Inertia::render('Admin/Students', [
            'students' => $students,
        ]);
    }

    public function projects($supervisor)
    {
        $projects = Project::where('supervisor_id', $supervisor)->paginate();

        return Inertia::render('Admin/Projects', [
            'projects' => ProjectResource::collection($projects),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //



        return Inertia::render('Admin/NewSupervisor', [
            'departments' => Department::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSupervisorRequest $request)
    {
        $user = User::create([
            'name'  => $request->name,
            'email' => $request->email,
            'index' => $request->index,
            'index_number' => $request->index,
            'password' => Hash::make($request->password),
        ]);

        UserDepartment::create([
            'department_id' => $request->department,
            'user_id' => $user->id,
            'role' => 'lecturer',
        ]);

        return back()->withError(['success' => 'Supervisor Created Successfully']);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $supervisor)
    {
        //

        $department = UserDepartment::where('user_id', $supervisor->id)->first();
        $supervisor->department = $department->department_id;

        return Inertia::render('Admin/EditSupervisor', [
            'departments' => Department::all(),
            'supervisor' => $supervisor,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Department $department)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSupervisorRequest $request, User $supervisor)
    {
        $supervisor->update([
            'name' => $request->name ?? $supervisor->name,
            'index_number' => $request->index ?? $supervisor->index,
            'email' => $request->email ?? $supervisor->email,
            'password' => $request->password ? Hash::make($request->password) : $supervisor->password,
        ]);

        if($request->department) 
            UserDepartment::where('user_id', $supervisor->id)->first()
                          ->update(['department_id' => $request->department]);

        return back()->withError(['success' => 'Supervisor Updated Successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Department $department)
    {
        //
    }
}
