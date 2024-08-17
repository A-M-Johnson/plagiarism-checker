<?php

use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SupervisorController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('project', ProjectController::class);
    Route::resource('department', DepartmentController::class);

    Route::get('/department/student/{department}', [DepartmentController::class, 'students']);
    Route::get('/department/supervisor/{department}', [DepartmentController::class, 'supervisors']);
    Route::get('/department/project/{department}', [DepartmentController::class, 'projects']);

    Route::resource('supervisors', SupervisorController::class);

    Route::get('/supervisor/student/{supervisor}', [SupervisorController::class, 'students']);
    Route::get('/supervisor/project/{supervisor}', [SupervisorController::class, 'projects']);

    Route::get('/student/supervisor/{student}', [StudentController::class, 'supervisors']);
    Route::get('/student/project/{student}', [StudentController::class, 'projects']);

    Route::get('/dashboard', [ProjectController::class, 'student'])->name('dashboard');
    Route::get('/supervisor', [ProjectController::class, 'supervisor'])->name('supervisor');
    Route::get('/projects', [ProjectController::class, 'supervisor'])->name('all_projects');
    Route::get('/admin/projects', [ProjectController::class, 'admin'])->name('admin_projects');
});


require __DIR__.'/auth.php';
