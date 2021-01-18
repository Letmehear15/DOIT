<?php

namespace App\Controller;

use App\Entity\Journal;
use Doctrine\DBAL\Types\DateTimeType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\DateTime;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use App\Services\FileUploader;

class JournalController extends AbstractController
{
    /**
     * @Route("/journals", name="Journals", methods={"GET"})
     * @return JsonResponse
     */
    public function Journals()
    {
        $journals = $this->getDoctrine()->getRepository(Journal::class)->findAll();

        $i = 0;

        $journalsAll = array();

        foreach ($journals as $j) {
            $journalsAll[$i] = $j->jsonSerialize();
            $i++;
        }


        $response = new JsonResponse();
        $response->setData($journalsAll);
        return $response;
    }

    /**
     * @Route("/journal/{id}", name="Journal", methods={"GET"})
     * @param int $id
     * @return JsonResponse
     */
    public function Journal(int $id)
    {
        $journal = $this->getDoctrine()->getRepository(Journal::class)->findOneBy([
            'id' => $id
        ]);


        $response = new JsonResponse();

        if($journal){
            $response->setData($journal->jsonSerialize());
        }



        return $response;
    }

    /**
     * @Route("/journal/new", name="JournalNew", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function NewJournal(Request $request, ValidatorInterface $validator, FileUploader $fileUploader){
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);

        $entityManager = $this->getDoctrine()->getManager();

        $journal = new Journal();

        $docPDF = $request->files->all();

        if ($docPDF) {
            $docFileName = $fileUploader->upload($docPDF);
            $journal->setDocument($docFileName);
        }


        $date = new \DateTimeImmutable($request->get('date'));
        $journal->setDate($date);
        $journal->setName($request->get('name'));


        $errors = $validator->validate($journal);
        $response = new JsonResponse();
        if($errors){
            $entityManager->persist($journal);
            $entityManager->flush();
            $response->setData(['isSave' => true]);
        }
        else{
            $response->setData(['isSave' => false]);
        }
        return $response;

    }

    /**
     * @Route("/journal/{id}", name="journalUpdate", methods={"PUT"})
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function journalUpdate(Request $request, ValidatorInterface $validator, int $id){
        $response = new JsonResponse();
        $entityManager = $this->getDoctrine()->getManager();
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);

        $journals = $this->getDoctrine()->getRepository(Journal::class); //TODO articles

        $journal = $journals->findOneBy([
            'id' => $id
        ]);

        if($journal){
            if($request->get('name') AND $request->get('date')) {
                $journal->setName($request->get('name'));
                $date = new \DateTimeImmutable($request->get('date'));
                $journal->setDate($date);
                //TODO
                if($request->get('document')){
                    $journal->setDocument($request->get('document'));
                }
                $errors = $validator->validate($journal);
                if ($errors) {
                    $entityManager->persist($journal);
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
}
