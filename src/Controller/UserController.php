<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class UserController extends AbstractController
{

    /**
     * @Route("/logon", name="LogOn", methods={"GET"})
     * @param Request $request
     * @return JsonResponse
     */
    public function isAuth(Request $request)
    {
        $repository = $this->getDoctrine()->getRepository(User::class);
        $login = $request->get('login');
        $password = $request->get('password');
        $user = $repository->findOneBy([
            'login' => $login,
            'password' => $password,
        ]);


        $response = new JsonResponse();
        if($user) {
            $response->setData(['isAuth' => true]);
        }
        else{
            $response->setData(['isAuth' => false]);
        }

        return $response;

    }


}
