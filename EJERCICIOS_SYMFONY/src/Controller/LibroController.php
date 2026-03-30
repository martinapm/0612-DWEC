<?php

namespace App\Controller;
 
use App\Entity\Libro;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
 
class LibroController extends AbstractController
{
    // EJERCICIO 10: Insertar datos
    #[Route('/libro/crear')]
    public function crear(EntityManagerInterface $em): Response
    {
        $libro = new Libro();
        $libro->setTitulo('Don Quijote');
        $libro->setAutor('Cervantes');
        $libro->setPrecio(18);
 
        $em->persist($libro);
        $em->flush();
 
        return new Response('Libro creado correctamente');
    }
 
    // EJERCICIO 11: Mostrar todos los libros
    #[Route('/libros')]
    public function listar(EntityManagerInterface $em): Response
    {
        $libros = $em->getRepository(Libro::class)->findAll();
        $resultado = '';
 
        foreach ($libros as $libro) {
            $resultado .= $libro->getTitulo()
                . ' - ' . $libro->getAutor()
                . ' - ' . $libro->getPrecio() . '€<br>';
        }
 
        return new Response($resultado ?: 'No hay libros');
    }
 
    // EJERCICIO 12: Mostrar libro por ID
    #[Route('/libro/{id}', requirements: ['id' => '\d+'])]
    public function mostrar(int $id, EntityManagerInterface $em): Response
    {
        $libro = $em->getRepository(Libro::class)->find($id);
 
        if (!$libro) {
            return new Response('Libro no encontrado');
        }
 
        return new Response(
            $libro->getTitulo()
            . ' - ' . $libro->getAutor()
            . ' - ' . $libro->getPrecio() . '€'
        );
    }
 
    // EJERCICIO 13: Actualizar precio
    #[Route('/libro/actualizar/{id}')]
    public function actualizar(int $id, EntityManagerInterface $em): Response
    {
        $libro = $em->getRepository(Libro::class)->find($id);
 
        if (!$libro) {
            return new Response('Libro no encontrado');
        }
 
        $libro->setPrecio(22);
        $em->flush();
 
        return new Response('Libro actualizado. Nuevo precio: 22€');
    }
 
    // EJERCICIO 14: Eliminar libro
    #[Route('/libro/eliminar/{id}')]
    public function eliminar(int $id, EntityManagerInterface $em): Response
    {
        $libro = $em->getRepository(Libro::class)->find($id);
 
        if (!$libro) {
            return new Response('Libro no encontrado');
        }
 
        $em->remove($libro);
        $em->flush();
 
        return new Response('Libro eliminado correctamente');
    }
}
