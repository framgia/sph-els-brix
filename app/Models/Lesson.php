<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
	use HasFactory;

	protected $fillable = [
		'categoryId',
		'wordInJapanese',
		'romanizedWord',
	];

	public function choices()
	{
		return $this->hasMany(Choice::class, 'lessonId');
	}

	public function result()
	{
		return $this->hasOne(Result::class, 'lessonId');
	}
}
