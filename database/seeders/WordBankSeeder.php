<?php

namespace Database\Seeders;

use App\Models\WordBank;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WordBankSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		WordBank::insert([
			[
				'lessonId' => 1,
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
				'lessonId' => 3,
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
			[
				'lessonId' => 5,
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
				'lessonId' => 7,
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
			[
				'lessonId' => 9,
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
