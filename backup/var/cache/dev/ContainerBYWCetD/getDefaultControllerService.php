<?php

namespace ContainerBYWCetD;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getDefaultControllerService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'App\Controller\DefaultController' shared autowired service.
     *
     * @return \App\Controller\DefaultController
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/src/Controller/DefaultController.php';

        return $container->services['App\\Controller\\DefaultController'] = new \App\Controller\DefaultController();
    }
}
