<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Category::insert([
			[
				'title' => 'Numbers',
				'description' => 'Ready to learn how to count from 1-100+ with Japanese numbers? Let\'s take a look at the Japanese numbers 1 - 10 in the Sino-Japanese Number system, which is most common.',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'title' => 'Greetings',
				'description' => 'Do you want to say "hello" in Japanese? You\'ll need to know your Japanese greetings if you want to start a conversation in Japanese!',
				'created_at' => now(),
				'updated_at' => now()
			]
		]);
	}
}
