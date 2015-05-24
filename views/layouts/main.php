<?php
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;

/* @var $this \yii\web\View */
/* @var $content string */

AppAsset::register($this);
?>

<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>

    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
       
    
    <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js?v=1.0"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js?v=1.0"></script>
        <![endif]-->

    <script type="text/javascript">
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	 	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  	})(window,document,'script','//www.google-analytics.com/analytics.js?v=1.0','ga');
	  	ga('create', 'UA-55866070-1', 'auto');
	  	ga('send', 'pageview');
	</script>
    
</head>
<body>

<?php $this->beginBody() ?>
	<header>
        <div class="navbar navbar-default navbar-fixed-top">
            <div class="head-width hidden-xs">
                <div class="container">
                    <div class="row header-align">
                        <div class="col-md-4 col-sm-4 header-left">
                            <div>
                                <a class="image" href="/"><img src="images/logo.svg?v=1.0" alt="" /></a>
                            </div>
                            <p class="my-margin-auto">Учебный Центр</p>
                            <p><span>информационных технологий</span>
                            </p>
                        </div>
                        <div class="col-md-4 col-sm-5 header-center">
                            <a href="#freelesson" data-toggle="modal" class="btn btn-social-icon btn-arrow btn-lg pull-left" onclick="resetf('#freelesson-form')">
                                <i class="fa fa-arrow-right"></i>
                            </a>
                            <p>Запишитесь на бесплатное занятие</p>
                        </div>
                        <div class="col-md-3 col-sm-3 header-right">
                            <p class="phone"><i class="fa fa-phone-square"></i> 096 255 45 49</p>
                            <p><i class="fa fa-phone-square"></i> 093 615 30 90</p>
                            <a href="#callback" data-toggle="modal" class="btn btn-success no-flickr" onclick="resetf('#callback-form')">Заказать обратный звонок</a> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div id='cssmenu'>
                    <ul>
                        <li><a href="/"><span>Главная</span></a></li>
                        <li class='has-sub'><a href='about.php'><span>О нас</span></a>
                            <ul>
                                <li><a href='instructors.php'><span>Тренеры</span></a></li>
                                <li class='last'><a href='faq.php'><span>F.A.Q.</span></a></li>
                            </ul>
                        </li>
                        <li><a href='course.php'><span>Курсы</span></a></li>
                        <li><a href='price.php'><span>Цены</span></a></li>
                        <li><a href='discount.php'><span>Акции</span></a></li>
                        <li><a href='feedback.php'><span>Отзывы</span></a></li>
                        <li class='last'><a href='contacts.php'><span>Контакты</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    
<!-- Header END    ----------->
    
 <!--<div class="wrap">
        <?php
            NavBar::begin([
                'brandLabel' => 'My Company',
                'brandUrl' => Yii::$app->homeUrl,
                'options' => [
                    'class' => 'navbar-inverse navbar-fixed-top',
                ],
            ]);
            echo Nav::widget([
                'options' => ['class' => 'navbar-nav navbar-right'],
                'items' => [
                    ['label' => 'Home', 'url' => ['/site/index']],
                    ['label' => 'About', 'url' => ['/site/about']],
                    ['label' => 'Contact', 'url' => ['/site/contact']],
                    Yii::$app->user->isGuest ?
                        ['label' => 'Login', 'url' => ['/site/login']] :
                        ['label' => 'Logout (' . Yii::$app->user->identity->username . ')',
                            'url' => ['/site/logout'],
                            'linkOptions' => ['data-method' => 'post']],
                ],
            ]);
            NavBar::end();
        ?>

        <div class="container">
            <?= Breadcrumbs::widget([
                'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
            ]) ?>
            <?= $content ?>
        </div>
    </div>
-->

    <footer class="footer">
        <div class="container">
            <p class="pull-left">&copy; My Company <?= date('Y') ?></p>
            <p class="pull-right"><?= Yii::powered() ?></p>
        </div>
        
        <noscript><div><img src="//mc.yandex.ru/watch/26672109" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
		<!-- /Yandex.Metrika counter -->
    </footer>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
