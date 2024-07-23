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
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDepartmentRequest $request)
    {
        //
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
