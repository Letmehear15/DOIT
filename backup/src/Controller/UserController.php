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
     * @Route("/logon", name="LogOn", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function isAuth(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);
        $repository = $this->getDoctrine()->getRepository(User::class);
        $login = $request->get('login');
        $password = $request->get('password');
        //dump($login);
        $user = $repository->findOneBy([
            'login' => $login,
            'password' => $password,
        ]);

        $response = new JsonResponse();
        if($user) {
            //dump($user);
            $role = $user->getRole();
            $isRole = '';
            switch ($role) {
                case 'author':
                    $isRole = 'isAuthor';
                    break;
                case 'reader':
                    $isRole = 'isReader';
                    break;
                case 'editor':
                    $isRole = 'isEditor';
                    break;
                case 'test':
                    $isRole = 'isTest';
                    break;
                default:
                    $isRole = 'isAnon';
                    break;

            }

            $response->setData([ 'isAuth' => true, 'role' => $role, $isRole => true, 'id' => $user->getId()]);
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
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);
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
            $entityManager->persist($user);
            $entityManager->flush();
            $response->setData(['isSave' => true]);
        }
        else{
            $response->setData(['isSave' => false]);
        }


        return $response;
    }


}
