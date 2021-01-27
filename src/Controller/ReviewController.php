<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Review;
use App\Entity\User;
use App\Entity\Articles;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ReviewController extends AbstractController
{
    /**
     * @Route("/reviews", name="reviews", methods={"GET"})
     * @return JsonResponse
     */
    public function reviews()
    {
        $response = new JsonResponse();

        $reviews = $this->getDoctrine()->getRepository(Review::class)->findAll();

        $i = 0;
        //$reviewsJSON = array();
        foreach ($reviews as $r) {
            $reviewsJSON[$i] = $r->jsonSerialize();
            $i++;
        }
        $response->setData($reviewsJSON);

        return $response;
    }

    /**
     * @Route("/review/{id}", name="review", methods={"GET"})
     * @param int $id
     * @return JsonResponse
     */
    public function review(int $id){
        $response = new JsonResponse();

        $reviews = $this->getDoctrine()->getRepository(Review::class);
        $review = $reviews->findOneBy([
            'id' => $id
        ]);

        if($review){
            $response->setData($review->jsonSerialize());
        }

        return $response;
    }

    /**
     * @Route("/reviewer/{id}", name="reviewer", methods={"GET"})
     * @param int $id
     * @return JsonResponse
     */
    public function reviewer(int $id)
    {
        $response = new JsonResponse();

        $reviews = $this->getDoctrine()->getRepository(Review::class)->findBy([
            'reviewer' => $id
        ]);
        $i = 0;
        if ($reviews) {

        foreach ($reviews as $r) {
            $reviewsAll[$i] = $r->jsonSerialize();
            $i++;
        }
        $response->setData($reviewsAll);
        } else{
            $response->setData(NULL);
        }
        return $response;
    }

    /**
     * @Route("/review/{id}", name="reviewDelete", methods={"DELETE"})
     * @param int $id
     * @return JsonResponse
     */
    public function reviewDelete(int $id){
        $response = new JsonResponse();
        $entityManager = $this->getDoctrine()->getManager();



        $reviews = $this->getDoctrine()->getRepository(Review::class);
        $review = $reviews->findOneBy([
            'id' => $id
        ]);

        if($review){

            $entityManager->remove($review);
            $entityManager->flush();
            $response->setData(['isDelete' => true]);

        }
        else{
            $response->setData(['isDelete' => false]);
        }

        return $response;
    }

    /**
     * @Route("/review/{id}", name="reviewUpdate", methods={"PUT"})
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function updateReview(Request $request, ValidatorInterface $validator, int $id){
        $response = new JsonResponse();

        $entityManager = $this->getDoctrine()->getManager();
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);

        $review = $this->getDoctrine()->getRepository(Review::class)->findOneBy([
            'id' => $id
        ]);
        $article = $this->getDoctrine()->getRepository(Articles::class)->findOneBy([
            'id' => $request->get('article')
        ]);
        $user = $this->getDoctrine()->getRepository(User::class)->findOneBy([
            'id' => $request->get('reviewer')
        ]);


        if($review){
                //$review->setArticle($article);
                if($user) $review->setReviewer($user);
                if($request->get('review')) $review->setReview($request->get('review'));
                if($request->get('evaluation')) $review->setEvaluation($request->get('evaluation'));

                $errors = $validator->validate($review);
                if ($errors) {
                    $entityManager->persist($review);
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
     * @Route("/review/new", name="newReview", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function newReview(Request $request, ValidatorInterface $validator){
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);

        $entityManager = $this->getDoctrine()->getManager();

        $users = $this->getDoctrine()->getRepository(User::class);
        $articles = $this->getDoctrine()->getRepository(Articles::class);

        $user = $users->findOneBy([
            'id' => $request->get('reviewer')
        ]);
        $article = $articles->findOneBy([
            'id' => $request->get('article')
        ]);

        $review = new Review();

        if($article) $review->setArticle($article);
        if($user) $review->setReviewer($user);
        if($request->get('review')) $review->setReview($request->get('review'));
        if($request->get('evaluation')) $review->setEvaluation($request->get('evaluation'));


        $errors = $validator->validate($review);

        $response = new JsonResponse();
        if($errors){
            $entityManager->persist($review);
            $entityManager->flush();
            $response->setData(['isSave' => true]);
        }
        else{
            $response->setData(['isSave' => false]);
        }


        return $response;
    }

    /**
     * @Route("/review/{id}/ev/{evaluation}", name="changeEvaulation", methods={"PUT"})
     * @param int $id
     * @param int $evaluation
     * @return JsonResponse
     */
    public function changeEvaulation(ValidatorInterface $validator, int $id, int $evaluation){
        $response = new JsonResponse();

        $entityManager = $this->getDoctrine()->getManager();

        $review = $this->getDoctrine()->getRepository(Review::class)->findOneBy([
            'id' => $id
        ]);


        if($review){
            $review->setEvaluation($evaluation);

            $errors = $validator->validate($review);
            if ($errors) {
                $entityManager->persist($review);
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
     * @Route("/review/{id}/reviewer/{reviewer}", name="changeReviewer", methods={"PUT"})
     * @param int $id
     * @param int $reviewer
     * @return JsonResponse
     */
    public function changeReviewer(ValidatorInterface $validator, int $id, int $reviewer){
        $response = new JsonResponse();

        $entityManager = $this->getDoctrine()->getManager();

        $review = $this->getDoctrine()->getRepository(Review::class)->findOneBy([
            'id' => $id
        ]);
        $user = $this->getDoctrine()->getRepository(User::class)->findOneBy([
            'id' => $reviewer
        ]);

        if($review){
            $review->setReviewer($user);

            $errors = $validator->validate($review);
            if ($errors) {
                $entityManager->persist($review);
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
     * @Route("/review/{id}/review", name="changeReview", methods={"PUT"})
     * @param int $id
     * @param Request $request
     * @return JsonResponse
     */
    public function changeReview(ValidatorInterface $validator, Request $request, int $id){
        $response = new JsonResponse();

        $entityManager = $this->getDoctrine()->getManager();
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);

        $review = $this->getDoctrine()->getRepository(Review::class)->findOneBy([
            'id' => $id
        ]);


        if($review){
            $review->setReview($request->get('review'));

            $errors = $validator->validate($review);
            if ($errors) {
                $entityManager->persist($review);
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
}
