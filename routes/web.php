<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ChoiceController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\ResultController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
  return Inertia::render('Welcome', [
    'canLogin' => Route::has('login'),
    'canRegister' => Route::has('register'),
    'laravelVersion' => Application::VERSION,
    'phpVersion' => PHP_VERSION,
  ]);
});

Route::middleware(['auth', 'verified'])->group(function () {
  Route::get('/dashboard', fn () => Inertia::render('Dashboard'))->name('dashboard');

  Route::group(['prefix' => 'categories'], function () {
    Route::get('/', [CategoryController::class, 'index'])->name('categories');
    Route::get('/{id}', [CategoryController::class, 'show'])->name('lessons');
  });

  Route::group(['prefix' => 'results'], function () {
    Route::get('/{id}', [ResultController::class, 'show'])->name('results.get');
    Route::post('/', [ResultController::class, 'store'])->name('results.store');
  });
});

require __DIR__ . '/auth.php';
