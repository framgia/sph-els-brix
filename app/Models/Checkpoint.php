<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Checkpoint extends Model
{
	use HasFactory;

	protected $fillable = [
		'user_id',
		'category_id',
		'prerequisite',
		'can_start',
		'is_finished',
		'questions_answered',
		'total_questions'
	];
}
