<?php


namespace App\Controller;

use App\Entity\Comments;
use App\Entity\User;
use App\Entity\Articles;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;


class DefaultController
{
    /**
     * @Route("/", name="Home", methods={"GET"})
     * @return JsonResponse
     */
    public function home(){
        $response = new JsonResponse();

        return $response;
    }

    /**
     * @Route("/", name="Delete", methods={"DELETE"})
     * @return JsonResponse
     */
    public function delete(){
        $response = new JsonResponse();

        return $response;
    }

    /**
     * @Route("/about", name="About", methods={"GET"})
     * @return JsonResponse
     */
    public function about(){
        $response = new JsonResponse();

        return $response;

    }

    /**
     * @Route("/contacts", name="Contacts", methods={"GET"})
     * @return JsonResponse
     */
    public function contacts(){
        $response = new JsonResponse();

        return $response;

    }
}