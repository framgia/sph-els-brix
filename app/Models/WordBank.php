<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WordBank extends Model
{
	use HasFactory;

	protected $fillable = [
		'lessonId',
		'word'
	];
}
