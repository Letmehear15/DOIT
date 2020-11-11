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
            $response->setData([ 'isAuth' => true, 'role' => $user->getRole()]);
        }
        else{
            $response->setData(['isAuth' => false]);
        }

        return $response;

    }

    /**
     * @Route("/reg", name="Registration", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function Registration(Request $request){
        $login = $request->get('login');
        $password = $request->get('password');
        $role = $request->get('role');
        $name = $request->get('name');
        $lastname = $request->get('lastname');
        $email = $request->get('email');
        $tel = $request->get('tel');


    }

}
