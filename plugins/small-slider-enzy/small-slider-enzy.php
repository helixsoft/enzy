<?php

/*
Plugin Name: ENZY smalll slider
Plugin URI: 
Description: A simple plugin that integrates with WordPress using custom post types!
Author: Helixsoft
Version: 0.5
Author URI: http://www.helixsoft.in
*/
/*Some Set-up*/
define('sse_PATH', WP_PLUGIN_URL . '/' . plugin_basename( dirname(__FILE__) ) . '/' );
define('sse_NAME', "Helixsoft");
define ("sse_VERSION", "0.1");
define('THEMEROOT',get_stylesheet_directory_uri());
/*Files to Include*/
require_once('slider-image-type.php');
function sse_get_slider($atts){
							
							
							$sse_query= "post_type=small-image";
							query_posts($sse_query);
							$slider.='<div class=\'ca-wrapper\'>';
							if (have_posts()) : while (have_posts()) : the_post();
							if(get_field('studio_type',$post->ID)==$atts):
							$slider.='<div class=\'ca-item ca-item-1\'><div class=\'ca-item-main\'><div class=\'pic\'>';						
							$img1= get_the_post_thumbnail( $post->ID, array(200,200));
							//the_field('studio_a_plugin_images',$post->ID)
							$slider.='<a href=\''.get_field('studio_images',$post->ID).'\' title=\''.get_the_title($post->ID).'\'><span class=\'roll\'></span>'.$img1.'</a>';
							$slider.='</div></div></div>';	
							endif;
							endwhile; endif; wp_reset_query();
							$slider.= '</div>';
	
	return $slider;
}


/**add the shortcode for the slider- for use in editor**/

function sse_insert_slider($atts, $content=null){

$slider= sse_get_slider($atts);

return $slider;

}


add_shortcode('sse_slider', 'sse_insert_slider');



/**add template tag- for use in themes**/

function sse_slider($atts){

	print sse_get_slider($atts);
}
?>