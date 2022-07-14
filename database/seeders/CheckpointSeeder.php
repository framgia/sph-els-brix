<?php

namespace Database\Seeders;

use App\Models\Checkpoint;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CheckpointSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Checkpoint::insert([
			[
				'user_id' => 1,
				'category_id' => 1,
				'prerequisite' => null,
				'can_start' => true,
				'questions_answered' => 0,
				'total_questions' => 10,
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'user_id' => 1,
				'category_id' => 2,
				'prerequisite' => 1,
				'can_start' => false,
				'questions_answered' => 0,
				'total_questions' => 7,
				'created_at' => now(),
				'updated_at' => now()
			],
		]);
	}
}
