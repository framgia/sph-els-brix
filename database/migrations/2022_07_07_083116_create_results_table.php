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
		Schema::create('results', function (Blueprint $table) {
			$table->id();
			$table->foreignId('user_id')->constrained();
			$table->foreignId('choice_id')->constrained();
			$table->foreignId('categoryId')->constrained('categories');
			$table->foreignId('lessonId')->constrained('lessons');
			$table->string('wordInJapanese');
			$table->string('answer');
			$table->boolean('isCorrect');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('results');
	}
};
