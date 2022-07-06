<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Choice;
use App\Models\Lesson;

class LessonController extends Controller
{
	public static function getOne($id)
	{
		return array(
			'lessons' => Lesson::where('categoryId', $id)->get(),
			'category' => Category::where('id', $id)->first()->title,
			'choices' => Choice::all()
		);
	}
}
