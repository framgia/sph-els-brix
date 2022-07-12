<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Result;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
	public function index()
	{
		return Inertia::render('Categories', [
			'categories' => Category::all()
		]);
	}

	public function show($id)
	{
		return Inertia::render('Lessons', [
			'category' => Category::query()->find($id)->with(['lessons' => function ($q) {
				$q->with(['choices', 'result' => fn ($r) => $r->where('user_id', auth()->user()->id)->get()]);
			}])->first()
		]);
	}

	public static function get()
	{
		return Category::all();
	}

	public static function getOne($id)
	{
		return Category::where('id', $id);
	}
}
