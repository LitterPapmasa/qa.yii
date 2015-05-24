<?php
/**
 * @link http://www.yiiframework.com/
* @copyright Copyright (c) 2008 Yii Software LLC
* @license http://www.yiiframework.com/license/
*/

namespace app\assets;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class QaAsset extends AssetBundle
{
	public $basePath = '@webroot';
	public $baseUrl = '@web';
	public $css = [
			'images/favicon.png?v=1.0',
			'css/bootstrap.min.css?v=1.0',
			'css/bootstrap-social.css?v=1.0',
			'css/style.css?v=1.0',
			'css/font-awesome.min.css?v=1.0',
	];
	public $js = [			
			'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js?v=1.0',
			'js/menu.js?v=1.0',
			//'js/menu-highlight.js?v=1.0',
			'js/contacts.js?v=1.0',
			'js/jquery.form.validation.js?v=1.0',
			'js/modal.js?v=1.0',
			'js/faq.js?v=1.0',
			'js/feedback-rating.js?v=1.0',
			'js/footer/carousel.js',
	];
	 
	public $jsOptions = [
			'position' => \yii\web\View::POS_HEAD		
	];

	public $depends = [

	];
}
