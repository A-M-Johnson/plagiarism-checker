<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Models\Project;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function supervisors($student)
    {
        $supervisor_ids = Project::where('user_id', $student)->get()->pluck('supervisor_id');
        $supervisors    = User::whereIn('id', $supervisor_ids)->paginate();

        return Inertia::render('Admin/Supervisors', [
            'supervisors' => $supervisors,
        ]);
    }

    public function projects($student)
    {
        $projects = Project::where('user_id', $student)->paginate();

        return Inertia::render('Admin/Projects', [
            'projects' => ProjectResource::collection($projects),
        ]);
    }
}
