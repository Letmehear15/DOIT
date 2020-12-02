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

//TODO all request
class ArticlesController extends AbstractController
{
    /**
     * @Route("/article/{id}", name="article", methods={"GET"})
     * @param int $id
     * @return JsonResponse
     */
    public function article(int $id){
        $response = new JsonResponse();

       /* $data = json_decode($request->getContent(), true);
        $request->request->replace($data);*/

        $articles = $this->getDoctrine()->getRepository(Articles::class);
        $article = $articles->findOneBy([
            'id' => $id
        ]);
        if($article){
            $response->setData($article->jsonSerialize());
        }



        return $response;
    }
    /**
     * @Route("/articles", name="articleDelete", methods={"DELETE"})
     * @param Request $request
     * @return JsonResponse
     */
    public function articleDelete(Request $request){
        //TODO delete comments
        $entityManager = $this->getDoctrine()->getManager();
        $response = new JsonResponse();
        $data = json_decode($request->getContent(), true);

        $articles = $this->getDoctrine()->getRepository(Articles::class);
        $request->request->replace($data);
        $article = $articles->findOneBy([
            'id' => $request->get('id')
        ]);
        if($article){
            $entityManager->remove($article);
            $entityManager->flush();
            $response->setData(['isDelete' => true]);

        }
        else{
            $response->setData(['isDelete' => false]);
        }
        return $response;
    }
    /**
     * @Route("/article/update", name="articleUpdate", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function articleUpdate(Request $request, ValidatorInterface $validator){
        $response = new JsonResponse();
        $entityManager = $this->getDoctrine()->getManager();
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);
        $repository = $this->getDoctrine()->getRepository(Articles::class); //TODO articles
        $users = $this->getDoctrine()->getRepository(User::class);
        $article = $repository->findOneBy([
            'id' => $request->get('id')
        ]);
        $author = $users->findOneBy([
            'id' => $request->get('autor')
        ]);
        //TODO trycatch

        if($article){
            if($author) {
                $article->setTitle($request->get('title'));
                $article->setDescription($request->get('descr'));
                $article->setAuthor($author);

                $errors = $validator->validate($article);
                if ($errors) {
                    $entityManager->persist($article);
                    $entityManager->flush();
                    $response->setData(['isSave' => true]);
                } else {
                    $response->setData(['isSave' => false, 'error' => 2]);//err 2 - wrong dates
                }
            }
            else{
                $response->setData(['isSave' => false, 'error' => 3]); //err 3 - author - dont exist
            }
        }
        else{
            $response->setData(['isSave' => false, 'error' => 1]);  //err 1 - user dont exist
        }


        return $response;

    }

    /**
     * @Route("/articles", name="articles", methods={"GET"})
     * @return JsonResponse
     */
    public function articles()  //was request
    {
        /*$data = json_decode($request->getContent(), true);
        $request->request->replace($data);*/
        //$articles = $this->getDoctrine()->getRepository(Articles::class)->findAll();
        $articlesRep = $this->getDoctrine()->getRepository(Articles::class)->findAll();
        $i = 0;
        $articles = NULL;
        foreach ($articlesRep as $a) {
            $comments = $a->getComments();
            $j=0;
            $commentsjson = NULL;
            foreach ($comments as $c) {

                $commentsjson[$j] = array(
                    'id' => $c->getId(),
                    'autor' => $c->getAuthor(),
                    'text' => $c->getComment()
                );
                $j++;
            }
            $article = array(
                'id'=>$a->getId(),
                'title'=>$a->getTitle(),
                'autor'=>$a->getAuthor(),
                'descr'=>$a->getDescription(),
                'comments'=> $commentsjson,
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
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);

        $entityManager = $this->getDoctrine()->getManager();
        $repos = $this->getDoctrine()->getRepository(User::class);
        $user = $repos->findOneBy([
            'id' => $request->get('autor')
            ]);
        $article = new Articles();
        $response = new JsonResponse();
//TODO make easier
        $article->setTitle($request->get('title'));
        $article->setDescription($request->get('descr'));
        $article->setAuthor($user);

        $errors = $validator->validate($article);

        if($errors){
            $entityManager->persist($article);
            $entityManager->flush();
            $response->setData(['isSave' => true]);
        }
        else{
            $response->setData(['isSave' => false]);
        }


        return $response;
    }
}
