<?php

use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
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
    Route::resource('supervisors', SupervisorController::class);

    Route::get('/dashboard', [ProjectController::class, 'student'])->name('dashboard');
    Route::get('/supervisor', [ProjectController::class, 'supervisor'])->name('supervisor');
    Route::get('/projects', [ProjectController::class, 'supervisor'])->name('all_projects');
});


require __DIR__.'/auth.php';
