<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDepartmentRequest;
use App\Http\Requests\UpdateDepartmentRequest;
use App\Http\Resources\DepartmentResource;
use App\Http\Resources\ProjectResource;
use App\Models\Department;
use App\Models\Project;
use App\Models\User;
use App\Models\UserDepartment;
use Inertia\Inertia;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $departments = Department::paginate();

        return Inertia::render('Admin', [
            'departments' => DepartmentResource::collection($departments),
        ]);
    }

    public function students(Department $department)
    {
        $student_ids = UserDepartment::where('department_id', $department->id)->where('role', 'student')->get()->pluck('user_id');
        $students    = User::whereIn('id', $student_ids)->paginate();

        return Inertia::render('Admin/Students', [
            'students' => $students,
            'department' => $department,
        ]);
    }

    public function supervisors(Department $department)
    {
        $supervisor_ids = UserDepartment::where('department_id', $department->id)->where('role', 'lecturer')->get()->pluck('user_id');
        $supervisors    = User::whereIn('id', $supervisor_ids)->paginate();

        return Inertia::render('Admin/Supervisors', [
            'supervisors' => $supervisors,
            'department' => $department,
        ]);
    }

    public function projects(Department $department)
    {
        $projects = Project::where('department_id', $department->id)->paginate();

        return Inertia::render('Admin/Projects', [
            'projects' => ProjectResource::collection($projects),
            'department' => $department,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Department/NewDepartment', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDepartmentRequest $request)
    {
        $deparment = Department::create([
            'name' => $request->name,
            'max_year' => $request->level, 
        ]);

        return back()->withError(['success' => 'Deparment Created Successfully']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Department $department)
    {
        //
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
    public function update(UpdateDepartmentRequest $request, Department $department)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Department $department)
    {
        //
    }
}
