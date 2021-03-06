<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
	use HasFactory;

	protected $fillable = [
		'user_id',
		'category_id',
		'question_id',
		'choice_id',
		'hiragana',
		'choice',
		'is_correct'
	];
}
