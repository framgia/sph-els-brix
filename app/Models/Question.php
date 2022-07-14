<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
	use HasFactory;

	protected $fillable = [
		'category_id',
		'hiragana',
		'romaji',
	];

	public function choices()
	{
		return $this->hasMany(Choice::class);
	}

	public function result()
	{
		return $this->hasOne(Result::class);
	}
}
