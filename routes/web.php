<?php

use Illuminate\Support\Facades\Route;

Route::get('/image/{slug}', 'ImageController@index');

Route::get('/{path?}', [
    'uses' => 'ReactController@show',
    'as' => 'react',
    'where' => ['path' => '.*']
]);

