<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => 'Numbers',
            'description' => 'Ready to learn how to count from 1-100+ with Japanese numbers? Let\'s take a look at the Japanese numbers 1 - 10 in the Sino-Japanese Number system, which is most common.'
        ];
    }
}
