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
		Schema::create('checkpoints', function (Blueprint $table) {
			$table->id();
			$table->foreignId('user_id')->constrained();
			$table->foreignId('category_id')->constrained();
			$table->foreignId('prerequisite')->nullable()->constrained('categories');
			$table->boolean('can_start')->default(false);
			$table->boolean('is_finished')->default(false);
			$table->unsignedInteger('questions_answered');
			$table->unsignedInteger('total_questions');
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
		Schema::dropIfExists('checkpoint');
	}
};
