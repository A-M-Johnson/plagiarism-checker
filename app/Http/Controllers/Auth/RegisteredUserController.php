<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Models\User;
use App\Models\UserDepartment;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        $departments = Department::all();
        return Inertia::render('Auth/Register', [
            'departments' => $departments
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'index_number' => ['required', 'integer', 'unique:users,index_number'],
            'department' => ['required', 'integer'],
            'year' => ['required', 'integer'],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'index_number' => $request->index_number,
            'password' => Hash::make($request->password),
        ]);

        UserDepartment::create([
            'department_id' => $request->department,
            'user_id' => $user->id,
        ]);

        event(new Registered($user));

        Auth::login($user);

        session([
            'department_id' => $request->department,
            'role' => "student",
        ]);

        return redirect(route('dashboard', absolute: false));
    }
}
