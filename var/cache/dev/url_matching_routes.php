<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/articles' => [[['_route' => 'articles', '_controller' => 'App\\Controller\\ArticlesController::articles'], null, ['GET' => 0], null, false, false, null]],
        '/articles/new' => [[['_route' => 'NewArticle', '_controller' => 'App\\Controller\\ArticlesController::NewArticle'], null, ['POST' => 0], null, false, false, null]],
        '/' => [[['_route' => 'Home', '_controller' => 'App\\Controller\\DefaultController::home'], null, ['GET' => 0], null, false, false, null]],
        '/about' => [[['_route' => 'About', '_controller' => 'App\\Controller\\DefaultController::about'], null, ['GET' => 0], null, false, false, null]],
        '/contacts' => [[['_route' => 'Contacts', '_controller' => 'App\\Controller\\DefaultController::contacts'], null, ['GET' => 0], null, false, false, null]],
        '/journal' => [[['_route' => 'journal', '_controller' => 'App\\Controller\\JournalController::index'], null, null, null, false, false, null]],
        '/logon' => [[['_route' => 'LogOn', '_controller' => 'App\\Controller\\UserController::isAuth'], null, ['POST' => 0], null, false, false, null]],
        '/signup' => [[['_route' => 'SignUp', '_controller' => 'App\\Controller\\UserController::Registration'], null, ['POST' => 0], null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_error/(\\d+)(?:\\.([^/]++))?(*:35)'
                .'|/article/([^/]++)(?'
                    .'|(*:62)'
                    .'|/(?'
                        .'|update(*:79)'
                        .'|comment(?'
                            .'|/new(*:100)'
                            .'|s/([^/]++)(*:118)'
                        .')'
                    .')'
                .')'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        35 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        62 => [
            [['_route' => 'article', '_controller' => 'App\\Controller\\ArticlesController::article'], ['id'], ['GET' => 0], null, false, true, null],
            [['_route' => 'articleDelete', '_controller' => 'App\\Controller\\ArticlesController::articleDelete'], ['id'], ['DELETE' => 0], null, false, true, null],
        ],
        79 => [[['_route' => 'articleUpdate', '_controller' => 'App\\Controller\\ArticlesController::articleUpdate'], ['id'], ['POST' => 0], null, false, false, null]],
        100 => [[['_route' => 'newComment', '_controller' => 'App\\Controller\\CommentsController::newComment'], ['id'], ['POST' => 0], null, false, false, null]],
        118 => [
            [['_route' => 'deleteComment', '_controller' => 'App\\Controller\\CommentsController::deleteComment'], ['id', 'comment_id'], ['DELETE' => 0], null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
