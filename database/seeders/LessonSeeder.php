<?php

namespace Database\Seeders;

use App\Models\Lesson;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LessonSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Lesson::insert([
			[
				'categoryId' => 1,
				'wordInJapanese' => 'いち',
				'romanizedWord' => 'Ichi',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'categoryId' => 1,
				'wordInJapanese' => 'に',
				'romanizedWord' => 'Ni',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'categoryId' => 1,
				'wordInJapanese' => 'さん',
				'romanizedWord' => 'San',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'categoryId' => 1,
				'wordInJapanese' => 'し',
				'romanizedWord' => 'Shi',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'categoryId' => 1,
				'wordInJapanese' => 'ご',
				'romanizedWord' => 'Go',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'categoryId' => 1,
				'wordInJapanese' => 'ろく',
				'romanizedWord' => 'Roku',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'categoryId' => 1,
				'wordInJapanese' => 'なな',
				'romanizedWord' => 'Nana',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'categoryId' => 1,
				'wordInJapanese' => 'はち',
				'romanizedWord' => 'Hachi',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'categoryId' => 1,
				'wordInJapanese' => 'きゅう',
				'romanizedWord' => 'Kyuu',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'categoryId' => 1,
				'wordInJapanese' => 'じゅう',
				'romanizedWord' => 'Juu',
				'created_at' => now(),
				'updated_at' => now()
			]
		]);
	}
}
