<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductoController;
use App\Models\Libro;
use App\Http\Controllers\PeliculaController;

Route::get('/inicio', function () {
    return 'Bienvenido a mi primera aplicación en Laravel';
});

Route::get('/saludo/{nombre}', function ($nombre) {
    return "Hola $nombre, bienvenido a Laravel";
});

Route::get('/suma/{num1}/{num2}', function ($num1, $num2) {
    $resultado = $num1 + $num2;
    return "La suma es: $resultado";
});


Route::get('/productos', [ProductoController::class, 'index']);

Route::get('/producto/{id}', [ProductoController::class, 'mostrar']);

Route::get('/bienvenida', function () {
    return view('bienvenida');
});

Route::get('/hola', function () {
    $nombre = 'Carlos';
    return view('hola', ['nombre' => $nombre]);
});

Route::get('/frutas', function () {
    $frutas = ['manzana', 'pera', 'plátano', 'naranja'];
    return view('frutas', ['frutas' => $frutas]);
});


Route::get('/libro/crear', function () {
    Libro::create([
        'titulo' => 'El Quijote',
        'autor'  => 'Cervantes',
        'precio' => 20,
    ]);
 
    return 'Libro creado correctamente';
});

Route::get('/libros', function () {
    $libros = Libro::all();
    $resultado = '';
 
    foreach ($libros as $libro) {
        $resultado .= "$libro->titulo - $libro->autor - {$libro->precio}€<br>";
    }
 
    return $resultado ?: 'No hay libros en la base de datos';
});

Route::get('/libro/actualizar', function () {
    $libro = Libro::find(1);
 
    if (!$libro) {
        return 'Libro no encontrado';
    }
 
    $libro->update(['precio' => 25]);
 
    return 'Libro actualizado correctamente. Nuevo precio: 25€';
});


Route::get('/libro/eliminar', function () {
    $libro = Libro::find(1);
 
    if (!$libro) {
        return 'Libro no encontrado';
    }
 
    $libro->delete();
 
    return 'Libro eliminado correctamente';
});

Route::get('/peliculas/crear',
    [PeliculaController::class, 'crear']);
 
Route::get('/peliculas',
    [PeliculaController::class, 'index']);
 
Route::get('/peliculas/actualizar/{id}/{titulo}',
    [PeliculaController::class, 'actualizar']);
 
Route::get('/peliculas/eliminar/{id}',
    [PeliculaController::class, 'eliminar']);
 
Route::get('/peliculas/{id}',
    [PeliculaController::class, 'mostrar']);

    