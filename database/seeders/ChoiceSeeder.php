<?php

namespace Database\Seeders;

use App\Models\Choice;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChoiceSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Choice::insert([
			// Lesson 1 choices
			[
				'lessonId' => 1,
				'word' => 'One',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 1,
				'word' => 'Two',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 1,
				'word' => 'Three',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 1,
				'word' => 'Four',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 2 choices
			[
				'lessonId' => 2,
				'word' => 'One',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 2,
				'word' => 'Two',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 2,
				'word' => 'Three',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 2,
				'word' => 'Four',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 3 choices
			[
				'lessonId' => 3,
				'word' => 'One',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 3,
				'word' => 'Two',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 3,
				'word' => 'Three',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 3,
				'word' => 'Four',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 4 choices
			[
				'lessonId' => 4,
				'word' => 'One',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 4,
				'word' => 'Two',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 4,
				'word' => 'Three',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 4,
				'word' => 'Four',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 5 choices
			[
				'lessonId' => 5,
				'word' => 'Five',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 5,
				'word' => 'Six',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 5,
				'word' => 'Seven',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 5,
				'word' => 'Eight',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 6 choices
			[
				'lessonId' => 6,
				'word' => 'Five',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 6,
				'word' => 'Six',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 6,
				'word' => 'Seven',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 6,
				'word' => 'Eight',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 7 choices
			[
				'lessonId' => 7,
				'word' => 'Five',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 7,
				'word' => 'Six',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 7,
				'word' => 'Seven',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 7,
				'word' => 'Eight',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 8 choices
			[
				'lessonId' => 8,
				'word' => 'Five',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 8,
				'word' => 'Six',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 8,
				'word' => 'Seven',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 8,
				'word' => 'Eight',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 9 choices
			[
				'lessonId' => 9,
				'word' => 'Seven',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 9,
				'word' => 'Eight',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 9,
				'word' => 'Nine',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 9,
				'word' => 'Ten',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 10 choices
			[
				'lessonId' => 10,
				'word' => 'Seven',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 10,
				'word' => 'Eight',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 10,
				'word' => 'Nine',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'lessonId' => 10,
				'word' => 'Ten',
				'created_at' => now(),
				'updated_at' => now()
			],
		]);
	}
}
