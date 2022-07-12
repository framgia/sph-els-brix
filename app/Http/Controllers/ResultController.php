<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Checkpoint;
use App\Models\Result;
use App\Models\Word;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ResultController extends Controller
{
	public function store(Request $request)
	{
		$validatedRequests = $request->validate([
			'categoryId' => ['required'],
			'questionId' => ['required'],
			'choiceId' => ['required'],
			'hiragana' => ['required'],
			'choice' => ['required'],
		]);

		$word = Word::query()->where('word', $validatedRequests['choice'])->first();

		Result::create([
			'user_id' => auth()->user()->id,
			'category_id' => $validatedRequests['categoryId'],
			'question_id' => $validatedRequests['questionId'],
			'choice_id' => $validatedRequests['choiceId'],
			'hiragana' => $validatedRequests['hiragana'],
			'choice' => $validatedRequests['choice'],
			'is_correct' => $word->question_id == $validatedRequests['questionId']
		]);

		$checkpoint = Checkpoint::query()
			->where('user_id', auth()->user()->id)
			->where('category_id', $validatedRequests['categoryId'])
			->first();

		$checkpoint->increment('questions_answered');

		$prerequisite = Checkpoint::query()
			->where('prerequisite', $validatedRequests['categoryId'])
			->first();

		if ($checkpoint->total_questions == $checkpoint->questions_answered) {
			$checkpoint->update(['is_finished' => true]);
			$prerequisite->update(['can_start' => true]);
		}
	}

	public function show($id)
	{
		return Inertia::render('Results', [
			'category' => Category::query()->find($id)->title,
			'results' => Result::query()->where('category_id', $id)->where('user_id', auth()->user()->id)->get()
		]);
	}
}
