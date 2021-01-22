<?php

namespace App\Controller;

use App\Entity\Comments;
use App\Entity\Review;
use App\Entity\User;
use App\Entity\Articles;
use App\Services\FileUploader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
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
     * @Route("/article/{id}", name="articleDelete", methods={"DELETE"})
     * @param int $id
     * @return JsonResponse
     */
    public function articleDelete(int $id){
        $entityManager = $this->getDoctrine()->getManager();
        $response = new JsonResponse();


        $articles = $this->getDoctrine()->getRepository(Articles::class);
        $article = $articles->findOneBy([
            'id' => $id
        ]);
        $comments = $this->getDoctrine()->getRepository(Comments::class)->findBy([
            'article' => $id
        ]);
        $reviews = $this->getDoctrine()->getRepository(Review::class)->findBy([
            'article' => $id
        ]);
        if($article){
                $i = 0;
                while (isset($comments[$i])) {
                    $entityManager->remove($comments[$i]);
                    $i++;
                }
                $i=0;
                while (isset($reviews[$i])){
                    $entityManager->remove($reviews[$i]);
                    $i++;
                }

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
     * @Route("/article/{id}/update", name="articleUpdate", methods={"POST"})
     * @param Request $request
	 * @param int $id
     * @return JsonResponse
     */
    public function articleUpdate(Request $request, ValidatorInterface $validator, int $id){
        $response = new JsonResponse();
        $entityManager = $this->getDoctrine()->getManager();
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);
        $repository = $this->getDoctrine()->getRepository(Articles::class); //TODO articles
        $users = $this->getDoctrine()->getRepository(User::class);
        $article = $repository->findOneBy([
            'id' => $id
        ]);
       /* $author = $users->findOneBy([
            'id' => $request->get('autor')
        ]);*/
        //TODO trycatch

        if($article){
                if($request->get('title')) $article->setTitle($request->get('title'));
                if($request->get('descr')) $article->setDescription($request->get('descr'));
               // $article->setAuthor($author);

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
        $articles = $this->getDoctrine()->getRepository(Articles::class)->findAll();

        /*$i = 0;
        $articlesjson = array();
        foreach ($articles as $a) {
            $comments = $a->getComments();
            $j=0;
            $commentsjson = array();
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
                'stage'=>$a->getStage(),
                'status'=>$a->getStatus(),
                'comments'=> $commentsjson,
            );
            $articlesjson[$i] = $article;
            $i++;
        }
        $response = new JsonResponse();
        $response->setData(['articles' => $articlesjson]);
*/
        $i = 0;
        foreach ($articles as $a) {
            $articlesAll[$i] = $a->jsonSerialize();
            $i++;
        }
        $response = new JsonResponse();
        $response->setData(['articles' => $articlesAll]);


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

//TODO make easier
        $article->setTitle($request->get('title'));
        $article->setDescription($request->get('descr'));
        $article->setAuthor($user);
        $article->setStage(0);
        $article->setStatus(false);

        $errors = $validator->validate($article);

        $response = new JsonResponse();
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

    /**
     * @Route("/article/{id}/stage/{stage}", name="ChangeStageArticle", methods={"PUT"})
     * @param int $stage
     * @param int $id
     * @return JsonResponse
     */
    public function changeStage(int $id, int $stage, ValidatorInterface $validator){
        $response = new JsonResponse();

        $entityManager = $this->getDoctrine()->getManager();
        $article = $this->getDoctrine()->getRepository(Articles::class)->findOneBy([
            'id' => $id
        ]);;
        $article->setStage($stage);
        $errors = $validator->validate($article);
        if($article) {
            if ($errors) {
                $entityManager->persist($article);
                $entityManager->flush();
                $response->setData(['isSave' => true]);
            } else {
                $response->setData(['isSave' => false, 'error' => 2]);//err 2 - wrong dates
            }
        }
        else{
                $response->setData(['isSave' => false, 'error' => 3]); //err 3 - article - dont exist
        }

        return $response;
    }

    /**
     * @Route("/article/{id}/status/{status}", name="ChangeStatusArticle", methods={"PUT"})
     * @param int $stage
     * @param int $id
     * @return JsonResponse
     */
    public function changeStatus(int $id, bool $status, ValidatorInterface $validator){
        $response = new JsonResponse();
        $entityManager = $this->getDoctrine()->getManager();
        $article = $this->getDoctrine()->getRepository(Articles::class)->findOneBy([
            'id' => $id
        ]);;

        $article->setStatus($status);
        $errors = $validator->validate($article);
        if($article) {
            if ($errors) {
                $entityManager->persist($article);
                $entityManager->flush();
                $response->setData(['isSave' => true]);
            } else {
                $response->setData(['isSave' => false, 'error' => 2]);//err 2 - wrong dates
            }
        }
        else{
            $response->setData(['isSave' => false, 'error' => 3]); //err 3 - article - dont exist
        }
        return $response;
    }

    /**
     * @Route("/article/{id}/doc", name="articleUpdateDoc", methods={"POST"})
     * @param Request $request
     * @param int $id
     * @param FileUploader $file
     * @return JsonResponse
     */
    public function articleUpdateDoc(Request $request, ValidatorInterface $validator, int $id, FileUploader $file){

        $response = new JsonResponse();
        $entityManager = $this->getDoctrine()->getManager();
        /*$data = json_decode($request->getContent(), true);
        $request->request->replace($data);*/


        $articles = $this->getDoctrine()->getRepository(Articles::class); //TODO articles

        $article = $articles->findOneBy([
            'id' => $id
        ]);
        /*$article->setArticleFilename(
            new File($this->getParameter('article_directory').'/'.$article->getArticleFilename()));*/
        if($article && $request->files->get('document')){
            $type = 'articles';
            $article->setDocument($file->getTargetDirectory().'/'.$type.'/'.$file->upload($request->files->get('document'), $type));

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
            $response->setData(['isSave' => false, 'error' => 1]);  //err 1 - user dont exist
        }


        return $response;

    }

    /**
     * @Route("/article/{id}/doc", name="ArticleDoc", methods={"GET"})
     * @param int $id
     * @return BinaryFileResponse
     */
    public function ArticleDoc(int $id){
        $article = $this->getDoctrine()->getRepository(Articles::class)->findOneBy([
            'id' => $id
        ]);

        $file = $article->getDocument();
        $response = new BinaryFileResponse($file);
        return $response;
    }
}
