<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::dropIfExists('results');
		Schema::dropIfExists('choices');
		Schema::dropIfExists('word_banks');
		Schema::dropIfExists('lessons');
		Schema::dropIfExists('categories');

		Schema::create('categories', function (Blueprint $table) {
			$table->id();
			$table->string('title');
			$table->text('description');
			$table->timestampsTz();
		});

		Schema::create('questions', function (Blueprint $table) {
			$table->id();
			$table->foreignId('category_id')->constrained();
			$table->string('hiragana');
			$table->string('romaji');
			$table->timestampsTz();
		});

		Schema::create('words', function (Blueprint $table) {
			$table->id();
			$table->foreignId('question_id')->constrained();
			$table->string('word');
			$table->timestampsTz();
		});

		Schema::create('choices', function (Blueprint $table) {
			$table->id();
			$table->foreignId('question_id')->constrained();
			$table->string('word');
			$table->timestampsTz();
		});

		Schema::create('results', function (Blueprint $table) {
			$table->id();
			$table->foreignId('user_id')->constrained();
			$table->foreignId('category_id')->constrained();
			$table->foreignId('question_id')->constrained();
			$table->foreignId('choice_id')->constrained();
			$table->string('hiragana');
			$table->string('choice');
			$table->boolean('is_correct');
			$table->timestampsTz();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('categories');
		Schema::dropIfExists('questions');
		Schema::dropIfExists('words');
		Schema::dropIfExists('choices');
		Schema::dropIfExists('results');
	}
};
