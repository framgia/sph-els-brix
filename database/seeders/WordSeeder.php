<?php

namespace Database\Seeders;

use App\Models\Word;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WordSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Word::insert([
			[
				'question_id' => 1,
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
				'question_id' => 3,
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
			[
				'question_id' => 5,
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
				'question_id' => 7,
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
			[
				'question_id' => 9,
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
			[
				'question_id' => 11,
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
				'question_id' => 13,
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
			[
				'question_id' => 15,
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
				'question_id' => 17,
				'word' => 'Excuse me',
				'created_at' => now(),
				'updated_at' => now()
			],
		]);
	}
}
