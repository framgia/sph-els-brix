<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Result;
use App\Models\WordBank;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ResultController extends Controller
{
	public function store(Request $request)
	{
		$validatedRequests = $request->validate([
			'categoryId' => ['required'],
			'lessonId' => ['required'],
			'choiceId' => ['required'],
			'wordInJapanese' => ['required'],
			'answer' => ['required'],
		]);

		$word = WordBank::query()->where('word', $validatedRequests['answer'])->first();

		Result::create([
			'user_id' => auth()->user()->id,
			'categoryId' => $validatedRequests['categoryId'],
			'lessonId' => $validatedRequests['lessonId'],
			'choice_id' => $validatedRequests['choiceId'],
			'wordInJapanese' => $validatedRequests['wordInJapanese'],
			'answer' => $validatedRequests['answer'],
			'isCorrect' => $word->lessonId == $validatedRequests['lessonId']
		]);
	}

	public function show($id)
	{
		return Inertia::render('Results', [
			'category' => Category::query()->find($id)->title,
			'results' => Result::query()->where('categoryId', $id)->where('user_id', auth()->user()->id)->get()
		]);
	}
}
