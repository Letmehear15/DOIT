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
                case 'reviewer':
                    $isRole = 'isReviewer';
                    break;
                case 'admin':
                    $isRole = 'isAdmin';
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

    /**
     * @Route("/users", name="Users", methods={"GET"})
     * @return JsonResponse
     */
    public function Users(){
        $users = $this->getDoctrine()->getRepository(User::class)->findAll();

        $i = 0;
        foreach ($users as $u) {
            $usersAll[$i] = $u->jsonSerialize();
            $i++;
        }
        $response = new JsonResponse();
        $response->setData($usersAll);


        return $response;
    }

    /**
     * @Route("/user/{id}", name="user", methods={"GET"})
     * @param int $id
     * @return JsonResponse
     */
    public function user(int $id){
        $response = new JsonResponse();

        /* $data = json_decode($request->getContent(), true);
         $request->request->replace($data);*/

        $users = $this->getDoctrine()->getRepository(User::class);
        $user = $users->findOneBy([
            'id' => $id
        ]);



        if($user){
            $response->setData($user->jsonSerialize());
        }



        return $response;
    }

    /**
     * @Route("/user/{id}", name="userDelete", methods={"DELETE"})
     * @param int $id
     * @return JsonResponse
     */
    public function userDelete(int $id){
        $entityManager = $this->getDoctrine()->getManager();
        $response = new JsonResponse();


        $users = $this->getDoctrine()->getRepository(users::class);
        $user = $users->findOneBy([
            'id' => $id
        ]);


        if($user){

            $entityManager->remove($user);
            $entityManager->flush();
            $response->setData(['isDelete' => true]);

        }
        else{
            $response->setData(['isDelete' => false]);
        }

        return $response;
    }

    /**
     * @Route("/user/{id}", name="userUpdate", methods={"PUT"})
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function userUpdate(Request $request, ValidatorInterface $validator, int $id){
        $response = new JsonResponse();

        $entityManager = $this->getDoctrine()->getManager();
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);

        $users = $this->getDoctrine()->getRepository(User::class);
        $user = $users->findOneBy([
            'id' => $id
        ]);
        /* $author = $users->findOneBy([
             'id' => $request->get('autor')
         ]);*/

        if($user){
            if($request->get('login')) $user->setLogin($request->get('login'));
            if($request->get('password')) $user->setPassword($request->get('password'));
            if($request->get('role')) $user->setRole($request->get('role'));
            if($request->get('name')) $user->setName($request->get('name'));
            if($request->get('lastname')) $user->setLastname($request->get('lastname'));
            if($request->get('email')) $user->setEmail($request->get('email'));
            if($request->get('tel')) $user->setTel($request->get('tel'));

                $errors = $validator->validate($user);
                if ($errors) {
                    $entityManager->persist($user);
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
