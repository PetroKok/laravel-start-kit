<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['json.response']], function () {

    // PUBLIC ROUTES
    Route::post('/user/login', 'AuthController@login')->name('login.api');
    Route::post('/user/register', 'AuthController@register')->name('register.api');

    // PRIVATE ROUTES
    Route::middleware('auth:api')->group(function () {

        // USER ROUTES (PROFILE)
        Route::post('/user','UserController@index');
        Route::post('/user/update/{id}','UserController@update');
        Route::post('/user/logout', 'AuthController@logout')->name('logout');


    });

});
