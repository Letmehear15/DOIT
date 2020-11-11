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

    /**
     * @Route("/articles/new", name="NewArticle", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function NewArticle(Request $request, ValidatorInterface $validator){
        $entityManager = $this->getDoctrine()->getManager();
        $repos = $this->getDoctrine()->getRepository(User::class);
        $user = $repos->findOneBy([
            'id' => $request->get('autor')
            ]);
        $article = new Articles();
        $response = new JsonResponse();
//TODO make easier
        $article->setName($request->get('name'));
        $article->setDescription($request->get('descr'));
        $article->setAuthor($user);

        $errors = $validator->validate($article);

        if($errors){
            $response->setData(['isSave' => true]);
        }
        else{
            $response->setData(['isSave' => false]);
        }
        $entityManager->persist($article);
        $entityManager->flush();

        return $response;
    }
}
