<?php

/*
Plugin Name: ENZY Home slider
Plugin URI: 
Description: A simple plugin that integrates with WordPress using custom post types!
Author: Helixsoft
Version: 0.5
Author URI: http://www.helixsoft.in
*/
/*Some Set-up*/
define('HSE_PATH', WP_PLUGIN_URL . '/' . plugin_basename( dirname(__FILE__) ) . '/' );
define('HSE_NAME', "Helixsoft");
define ("HSE_VERSION", "0.1");
define('THEMEROOT',get_stylesheet_directory_uri());
/*Files to Include*/
require_once('slider-image-type.php');

function hse_get_slider(){
	$slider= '<div id=\'slides\'>';
	$slider.='<a href=\'#\' class=\'prev\'><img src='.THEMEROOT.'/images/arrow-prev.png width=\'24\' height=\'43\' alt=\'Arrow Prev\'></a><a href=\'#\' class=\'next\'><img src='.THEMEROOT.'/images/arrow-next.png width=\'24\' height=\'43\' alt=\'Arrow Next\'></a>';
	$slider.='<div class=\'slides_container\'>';
	$hse_query= "post_type=slider-image";
	query_posts($hse_query);
	if (have_posts()) : while (have_posts()) : the_post(); 
		$img= get_the_post_thumbnail( $post->ID, 'large');
		$slider.='<div class=\'slide\'>'.$img.'<div class=\'caption\'><p>'.get_the_title($post->ID).'</p></div></div>';
			
	endwhile; endif; wp_reset_query();


	$slider.= '</div></div>';
	
	return $slider;
}


/**add the shortcode for the slider- for use in editor**/

function hse_insert_slider($atts, $content=null){

$slider= hse_get_slider();

return $slider;

}


add_shortcode('hse_slider', 'hse_insert_slider');



/**add template tag- for use in themes**/

function hse_slider(){

	print hse_get_slider();
}
?>