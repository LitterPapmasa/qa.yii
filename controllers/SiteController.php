<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;

class SiteController extends \yii\web\Controller
{
	
	public function behaviors()
	{
		return [
				'access' => [
						'class' => AccessControl::className(),
						'only' => ['logout'],
						'rules' => [
								[
										'actions' => ['logout'],
										'allow' => true,
										'roles' => ['@'],
								],
						],
				],
				'verbs' => [
						'class' => VerbFilter::className(),
						'actions' => [
								'logout' => ['post'],
						],
				],
		];
	}
	
    public function actionIndex()
    {
        return $this->render('index');
    }

}
