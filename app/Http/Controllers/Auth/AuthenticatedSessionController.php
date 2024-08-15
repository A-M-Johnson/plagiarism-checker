<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\Department;
use App\Models\UserDepartment;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
            'departments' => Department::all(),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        
        $request->authenticate();
        
        $request->session()->regenerate();
        
        $can_login = UserDepartment::where('user_id', Auth::user()->id)
                                   ->where('department_id', $request->department)
                                   ->where('role', $request->role)->exists();

        // dd([Auth::user()->email == 'admin@gmail.com', Auth::user()->email]);

        if(!$can_login and Auth::user()->email != 'admin@gmail.com') {
            Auth::logout();
            return redirect('/login')->withErrors(['all' => 'invalid credentials, please check your inputs and try again']);
        }

        session([
            'department_id' => $request->department,
            'role' => $request->role,
        ]);

        if(Auth::user()->email == 'admin@gmail.com') {
            return redirect()->intended(route('department.index', absolute: false));
        }

        if($request->role == "lecturer") {
            return redirect()->intended(route('supervisor', absolute: false));
        } 

        return redirect()->intended(route('dashboard', absolute: false));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
