<?php

namespace App\Controller;

use App\Entity\Comments;
use App\Entity\User;
use App\Entity\Articles;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ArticlesController extends AbstractController
{
    /**
     * @Route("/articles", name="articles", methods={"GET"})
     * @param Request $request
     * @return JsonResponse
     */
    public function articles(Request $request)
    {
        //$articles = $this->getDoctrine()->getRepository(Articles::class)->findAll();
        $articlesRep = $this->getDoctrine()->getRepository(Articles::class)->findAll();
        $i = 0;
        foreach ($articlesRep as $a) {

            $article = array(
                'id'=>$a->getId(),
                'name'=>$a->getName(),
                'autor'=>$a->getAuthor(),
                'descr'=>$a->getDescription(),
                'comments'=>$a->getComments(),
            );
            $articles[$i] = $article;
            $i++;
        }
        $response = new JsonResponse();
        $response->setData(['articles' => $articles]);


        return $response;

    }
}
