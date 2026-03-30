<?php

namespace App\Controller;
 
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
 
class InicioController extends AbstractController
{
    #[Route('/inicio')]
    public function index(): Response
    {
        return new Response('Bienvenido a mi primera aplicación Symfony');
    }

    #[Route('/saludo/{nombre}')]
    public function saludo(string $nombre): Response
    {
        return new Response("Hola $nombre, bienvenido a Symfony");
    }

     #[Route('/multiplicar/{num1}/{num2}')]
    public function multiplicar(int $num1, int $num2): Response
    {
        $resultado = $num1 * $num2;
        return new Response("El resultado es: $resultado");
    }

    #[Route('/bienvenida')]
    public function bienvenida(): Response
    {
        return $this->render('bienvenida.html.twig');
    }

        #[Route('/hola')]
    public function hola(): Response
    {
        return $this->render('hola.html.twig', [
            'nombre' => 'Carlos',
        ]);
    }

        #[Route('/ciudades')]
    public function ciudades(): Response
    {
        return $this->render('ciudades.html.twig', [
            'ciudades' => ['Granada', 'Madrid', 'Sevilla', 'Valencia'],
        ]);
    }

}
