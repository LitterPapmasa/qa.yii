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
			
	];
	public $js = [
			'js/menu-highlight.js?v=1.0',
			'js/contacts.js?v=1.0',
			'js/modal.js?v=1.0',
			'js/faq.js?v=1.0',
			'js/feedback-rating.js?v=1.0',
	];
	 
	public $jsOptions = [
			'position' => \yii\web\View::POS_BEGIN		
	];

	public $depends = [

	];
}
