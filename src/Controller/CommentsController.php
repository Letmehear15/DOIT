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

class CommentsController extends AbstractController
{
    /**
     * @Route("/article/{id}/comment/new", name="newComment", methods={"POST"})
     * @param int $id
     * @param Request $request
     * @param ValidatorInterface $validator
     * @return JsonResponse
     */
    public function newComment(int $id, Request $request, ValidatorInterface $validator){
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);

        $entityManager = $this->getDoctrine()->getManager();
        $comment = new Comments();
        $response = new JsonResponse();

        $articles = $this->getDoctrine()->getRepository(Articles::class);
        $article = $articles->findOneBy([
            'id' => $id
        ]);

        $comment->setComment($request->get('text'));
        $comment->setArticle($article);
        $comment->setAuthor($request->get('autor'));

        $errors = $validator->validate($comment);

        if($errors){
            $entityManager->persist($comment);
            $entityManager->flush();
            $response->setData(['isSave' => true]);
        }
        else{
            $response->setData(['isSave' => false]);
        }

        return $response;
    }

    /**
     * @Route("/article/{id}/comments/{comment_id}", name="deleteComment", methods={"POST"})
     * @param int $id
     * @param int $comment_id
     * @param Request $request
     * @return JsonResponse
     */
	public function deleteComment(int $id, int $comment_id, Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $response = new JsonResponse();
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);

        $comments = $this->getDoctrine()->getRepository(Comments::class);
        $comment = $comments->findOneBy([
            'id' => $comment_id
        ]);

        $articles = $this->getDoctrine()->getRepository(Articles::class);
        $article = $articles->findOneBy([
            'id' => $id
        ]);

        if($article AND $comment) {
            $article->removeComment($comment);
            $entityManager->remove($comment);
            $entityManager->flush();
            $response->setData(['isDelete' => true]);
        }
        else{
            $response->setData(['isDelete' => false]);
        }

        return $response;
    }



}