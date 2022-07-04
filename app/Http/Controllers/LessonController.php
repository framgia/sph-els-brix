<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Lesson;
use Illuminate\Http\Request;

class LessonController extends Controller
{
	public static function getOne($id)
	{
		return array(
			'lessons' => Lesson::where('categoryId', $id)->get(),
			'category' => Category::where('id', $id)->first()->title
		);
	}
}
