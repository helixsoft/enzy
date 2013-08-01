<?php

/*
Plugin Name: ENZY Playback
Plugin URI: 
Description: A simple plugin that integrates with WordPress using custom post types!
Author: Helixsoft
Version: 0.5
Author URI: http://www.helixsoft.in
*/
/*Some Set-up*/
define('pp_PATH', WP_PLUGIN_URL . '/' . plugin_basename( dirname(__FILE__) ) . '/' );
define('pp_NAME', "Helixsoft");
define ("pp_VERSION", "0.1");
define('THEMEROOT',get_stylesheet_directory_uri());
/*Files to Include*/
require_once('playback-player-enzy.php');
									
function pp_get_slider(){
							$pp_query= "post_type=playback-player";
							query_posts($pp_query);
							$slider='<div class=\'mp_wrapper\'>';
							$slider.='<div id=\'mp_content_wrapper\' class=\'mp_content_wrapper\'>';
							$i=0;
							if (have_posts()) : while (have_posts()) : the_post();
							if($i==0){
								$slider.='<div class=\'mp_content\' id=\'c_album_1\'  style=\'display:block;\'><img src=\''.get_field('mp_cover',$post->ID).'\'/>';
							}else{
								$slider.='<div class=\'mp_content\' id=\'c_album_1\'  style=\'display:none;\'><img src=\''.get_field('mp_cover',$post->ID).'\'/>';
							}
							$slider.='<a href=\'#\' class=\'mp_playall\'>'.get_field('mp_play',$post->ID).'</a>';
							$slider.='<a href=\'#\' class=\'mp_downall\'>'.get_field('mp_down',$post->ID).'</a>';
							$slider.='<div class=\'mp_description\'>';
							$slider.='<h2>'.get_field('mp_description_title',$post->ID).'</h2>
										<p>'.get_field('mp_description',$post->ID).'</p>
									</div>';
							$slider.='<div class=\'mp_songs\'>';
							$slider.='<div>
											<h3>'.get_field('mp_songs_title',$post->ID).'</h3>';
							$slider.='<div class=\'mp_options\'>';
							$slider.='<span class=\'mp_play\'>'.get_field('mp_play',$post->ID).'</span>';
							$slider.='<span class=\'mp_addpl\'>'.get_field('mp_addplay',$post->ID).'</span>';
							$slider.='<a class=\'fancybox-media\' href=\'http://www.youtube.com/watch?v=opj24KnzrWo\'><span class=\'mp_vid\'></span></a>';
							$slider.='<span class=\'mp_down\'>Download</span>
											</div>';
							$slider.='<div class=\'mp_song_info\' style=\'display:none;\'>';
							$slider.='<span class=\'mp_song_title\'>'.get_field('mp_songs_title',$post->ID).'</span>';
							
							print_r(get_field('music_file',$post->ID));
							$slider.='<span class=\'mp_mp3\'>http://localhost/enzy/wp-content/uploads/2013/07/ramblinglibrarian_-_Bass_Drifting1.mp3</span>';
							$slider.='</div>
										</div>										
									</div>
								</div>';
								
							$i++;
							endwhile; endif; wp_reset_query();
							$slider.='</div>';
							$slider.='<div class=\'mp_player\'>';
							$slider.='<div id=\'jquery_jplayer\'></div>';
							$slider.='<div class=\'jp-playlist-player\'>';
							$slider.='<div class=\'jp-interface\'>
										<ul class=\'jp-controls\'>
											<li><a href=\'#\' id=\'jplayer_play\' class=\'jp-play\' tabindex=\'1\'>play</a></li>
											<li><a href=\'#\' id=\'jplayer_pause\' class=\'jp-pause\' tabindex=\'1\'>pause</a></li>
											<li><a href=\'#\' id=\'jplayer_stop\' class=\'jp-stop\' tabindex=\'1\'>stop</a></li>
											<li><a href=\'#\' id=\'jplayer_volume_min\' class=\'jp-volume-min\' tabindex=\'1\'>min volume</a></li>
											<li><a href=\'#\' id=\'jplayer_volume_max\' class=\'jp-volume-max\' tabindex=\'1\'>max volume</a></li>
											<li><a href=\'#\' id=\'jplayer_previous\' class=\'jp-previous\' tabindex=\'1\'>previous</a></li>
											<li><a href=\'#\' id=\'jplayer_next\' class=\'jp-next\' tabindex=\'1\'>next</a></li>
										</ul>
										<div class=\'jp-progress\'>
											<div id=\'jplayer_load_bar\' class=\'jp-load-bar\'>
												<div id=\'jplayer_play_bar\' class=\'jp-play-bar\'></div>
											</div>
										</div>
										<div id=\'jplayer_volume_bar\' class=\'jp-volume-bar\'>
											<div id=\'jplayer_volume_bar_value\' class=\'jp-volume-bar-value\'></div>
										</div>
										<div id=\'jplayer_play_time\' class=\'jp-play-time\'></div>
										<div id=\'jplayer_total_time\' class=\'jp-total-time\'></div>
									</div>
									<div id=\'jplayer_playlist\' class=\'jp-playlist\'><ul></ul></div>
								</div>
							</div>';
							$slider.='<ul id=\'mp_albums\' class=\'mp_albums jcarousel-skin\'>';
							$pp_query= "post_type=playback-player";
							query_posts($pp_query);
							if (have_posts()) : while (have_posts()) : the_post();
								$slider.='<li><img src=\''.get_field('mp_cover',$post->ID).'\' alt=\'album1\' /></li>';
							endwhile; endif; wp_reset_query();
							$slider.='</ul>';
						$slider.='</div>';
						return $slider;
						
}


/**add the shortcode for the slider- for use in editor**/

function pp_insert_slider($content=null){

$slider= pp_get_slider();

return $slider;

}


add_shortcode('pp_slider', 'pp_insert_slider');



/**add template tag- for use in themes**/

function pp_slider(){

	print pp_get_slider();
}
?>

