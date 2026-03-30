<?php

namespace App\Controller;
 
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
 
class ProductoController extends AbstractController
{
    #[Route('/productos')]
    public function listar(): Response
    {
        return new Response('Listado de productos');
    }

    #[Route('/producto/{id}')]
    public function mostrar(int $id): Response
    {
        return new Response("Mostrando producto con ID: $id");
    }
}