<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
	public static function get()
	{
		return Category::all();
	}

	public static function getOne($id)
	{
		return Category::where('id', $id);
	}
}
