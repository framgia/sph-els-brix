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
				'question_id' => 1,
				'word' => 'One',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 1,
				'word' => 'Two',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 1,
				'word' => 'Three',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 1,
				'word' => 'Four',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 2 choices
			[
				'question_id' => 2,
				'word' => 'One',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 2,
				'word' => 'Two',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 2,
				'word' => 'Three',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 2,
				'word' => 'Four',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 3 choices
			[
				'question_id' => 3,
				'word' => 'One',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 3,
				'word' => 'Two',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 3,
				'word' => 'Three',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 3,
				'word' => 'Four',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 4 choices
			[
				'question_id' => 4,
				'word' => 'One',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 4,
				'word' => 'Two',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 4,
				'word' => 'Three',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 4,
				'word' => 'Four',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 5 choices
			[
				'question_id' => 5,
				'word' => 'Five',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 5,
				'word' => 'Six',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 5,
				'word' => 'Seven',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 5,
				'word' => 'Eight',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 6 choices
			[
				'question_id' => 6,
				'word' => 'Five',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 6,
				'word' => 'Six',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 6,
				'word' => 'Seven',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 6,
				'word' => 'Eight',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 7 choices
			[
				'question_id' => 7,
				'word' => 'Five',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 7,
				'word' => 'Six',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 7,
				'word' => 'Seven',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 7,
				'word' => 'Eight',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 8 choices
			[
				'question_id' => 8,
				'word' => 'Five',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 8,
				'word' => 'Six',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 8,
				'word' => 'Seven',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 8,
				'word' => 'Eight',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 9 choices
			[
				'question_id' => 9,
				'word' => 'Seven',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 9,
				'word' => 'Eight',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 9,
				'word' => 'Nine',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 9,
				'word' => 'Ten',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 10 choices
			[
				'question_id' => 10,
				'word' => 'Seven',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 10,
				'word' => 'Eight',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 10,
				'word' => 'Nine',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 10,
				'word' => 'Ten',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 11 choices
			[
				'question_id' => 11,
				'word' => 'Yes',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 11,
				'word' => 'No',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 11,
				'word' => 'Hello',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 11,
				'word' => 'Goodbye',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 12 choices
			[
				'question_id' => 12,
				'word' => 'Yes',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 12,
				'word' => 'No',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 12,
				'word' => 'Hello',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 12,
				'word' => 'Goodbye',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 13 choices
			[
				'question_id' => 13,
				'word' => 'Yes',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 13,
				'word' => 'No',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 13,
				'word' => 'Hello',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 13,
				'word' => 'Goodbye',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 14 choices
			[
				'question_id' => 14,
				'word' => 'Yes',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 14,
				'word' => 'No',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 14,
				'word' => 'Hello',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 14,
				'word' => 'Goodbye',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 15 choices
			[
				'question_id' => 15,
				'word' => 'Goodbye',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 15,
				'word' => 'Thank you',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 15,
				'word' => 'I\'m sorry',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 15,
				'word' => 'Excuse me',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 16 choices
			[
				'question_id' => 16,
				'word' => 'Goodbye',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 16,
				'word' => 'Thank you',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 16,
				'word' => 'I\'m sorry',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 16,
				'word' => 'Excuse me',
				'created_at' => now(),
				'updated_at' => now()
			],
			// Lesson 17 choices
			[
				'question_id' => 17,
				'word' => 'Goodbye',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 17,
				'word' => 'Thank you',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 17,
				'word' => 'I\'m sorry',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'question_id' => 17,
				'word' => 'Excuse me',
				'created_at' => now(),
				'updated_at' => now()
			],
		]);
	}
}
