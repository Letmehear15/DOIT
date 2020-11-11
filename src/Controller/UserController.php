<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Validator\ValidatorInterface;

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
     * @Route("/signup", name="SignUp", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function Registration(Request $request, ValidatorInterface $validator){
        $entityManager = $this->getDoctrine()->getManager();

        $user = new User();
        $response = new JsonResponse();
//TODO make easier
        $user->setLogin($request->get('login'));
        $user->setPassword($request->get('password'));
        $user->setRole($request->get('role'));
        $user->setName($request->get('name'));
        $user->setLastname($request->get('lastname'));
        $user->setEmail($request->get('email'));
        $user->setTel($request->get('tel'));

        $errors = $validator->validate($user);

        if($errors){
            $response->setData(['isSave' => true]);
        }
        else{
            $response->setData(['isSave' => false]);
        }

        $entityManager->persist($user);
        $entityManager->flush();
        return $response;
    }

}
