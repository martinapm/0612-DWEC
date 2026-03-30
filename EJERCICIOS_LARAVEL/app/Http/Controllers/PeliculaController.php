<?php

namespace App\Http\Controllers;
 
use App\Models\Pelicula;
use Illuminate\Http\Request;
 
class PeliculaController extends Controller
{
    // 1. Insertar una película
    public function crear()
    {
        Pelicula::create([
            'titulo'   => 'Inception',
            'director' => 'Christopher Nolan',
            'anio'     => 2010,
        ]);
 
        return 'Película creada correctamente';
    }
 
    // 2. Mostrar todas las películas
    public function index()
    {
        $peliculas = Pelicula::all();
        $resultado = '';
 
        foreach ($peliculas as $p) {
            $resultado .= "$p->titulo - $p->director ($p->anio)<br>";
        }
 
        return $resultado ?: 'No hay películas';
    }
 
    // 3. Mostrar una película por ID
    public function mostrar($id)
    {
        $p = Pelicula::find($id);
 
        if (!$p) {
            return 'Película no encontrada';
        }
 
        return "$p->titulo - $p->director ($p->anio)";
    }
 
    // 4. Actualizar el título
    public function actualizar($id, $titulo)
    {
        $p = Pelicula::find($id);
 
        if (!$p) {
            return 'Película no encontrada';
        }
 
        $p->update(['titulo' => $titulo]);
 
        return "Título actualizado a: $titulo";
    }
 
    // 5. Eliminar una película
    public function eliminar($id)
    {
        $p = Pelicula::find($id);
 
        if (!$p) {
            return 'Película no encontrada';
        }
 
        $p->delete();
 
        return 'Película eliminada correctamente';
    }
}
