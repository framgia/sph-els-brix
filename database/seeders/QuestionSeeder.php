<?php

namespace Database\Seeders;

use App\Models\Question;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class QuestionSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Question::insert([
			[
				'category_id' => 1,
				'hiragana' => 'いち',
				'romaji' => 'Ichi',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'category_id' => 1,
				'hiragana' => 'に',
				'romaji' => 'Ni',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'category_id' => 1,
				'hiragana' => 'さん',
				'romaji' => 'San',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'category_id' => 1,
				'hiragana' => 'し',
				'romaji' => 'Shi',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'category_id' => 1,
				'hiragana' => 'ご',
				'romaji' => 'Go',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'category_id' => 1,
				'hiragana' => 'ろく',
				'romaji' => 'Roku',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'category_id' => 1,
				'hiragana' => 'なな',
				'romaji' => 'Nana',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'category_id' => 1,
				'hiragana' => 'はち',
				'romaji' => 'Hachi',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'category_id' => 1,
				'hiragana' => 'きゅう',
				'romaji' => 'Kyuu',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'category_id' => 1,
				'hiragana' => 'じゅう',
				'romaji' => 'Juu',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'category_id' => 2,
				'hiragana' => 'はい',
				'romaji' => 'Hai',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'category_id' => 2,
				'hiragana' => 'いいえ',
				'romaji' => 'Iie',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'category_id' => 2,
				'hiragana' => 'こんにちは',
				'romaji' => 'Konnichiwa',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'category_id' => 2,
				'hiragana' => 'じゃね',
				'romaji' => 'Ja Ne',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'category_id' => 2,
				'hiragana' => 'ありがとう',
				'romaji' => 'Arigatou',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'category_id' => 2,
				'hiragana' => 'ごめんなさい',
				'romaji' => 'Gomen Nasai',
				'created_at' => now(),
				'updated_at' => now()
			],
			[
				'category_id' => 2,
				'hiragana' => 'すみません',
				'romaji' => 'Sumimasen',
				'created_at' => now(),
				'updated_at' => now()
			],
		]);
	}
}
