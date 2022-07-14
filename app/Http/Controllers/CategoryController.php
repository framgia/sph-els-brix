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
			'categories' => Category::query()->with('checkpoint')->get()
		]);
	}

	public function show($id)
	{
		return Inertia::render('Questions', [
			'category' => Category::query()->find($id)->with(['questions' => function ($q) {
				$q->with(['choices', 'result' => fn ($r) => $r->where('user_id', auth()->user()->id)->get()]);
			}])->first()
		]);
	}
}
