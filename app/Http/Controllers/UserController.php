<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function signup(Request $request)
    {
        $validatedUser = $request->validate([
            "firstname" => "required",
            "lastname" => "required",
            "email" => "required|email|unique:users,email",
            "password" => "required|confirmed",
            "password_confirmation" => "required"
        ]);

        User::create([
            "firstname" => $validatedUser["firstname"],
            "lastname" => $validatedUser["lastname"],
            "email" => $validatedUser["email"],
            "password" => bcrypt($validatedUser["password"]),
        ]);

        return response()->json([
            "signupSuccess" => "Account registered successfully."
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function search(Request $request)
    {
        $emailLookup = User::where("email", $request->email)->first();

        return response()->json([
            "emailLookup" => $emailLookup
        ]);
    }
}
