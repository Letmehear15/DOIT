<?php

namespace App\Controller;

use App\Entity\Journal;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class JournalController extends AbstractController
{
    /**
     * @Route("/journals", name="Journals", methods={"GET"})
     * @return JsonResponse
     */
    public function Journals(): Response
    {
        $journals = $this->getDoctrine()->getRepository(Journal::class)->findAll();

        $i = 0;

        foreach ($journals as $j) {
            $journalsAll[$i] = $j->jsonSerialize();
            $i++;
        }


        $response = new JsonResponse();

        return $response;
    }
}
