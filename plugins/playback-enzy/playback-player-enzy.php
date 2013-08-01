<?php
define('CPTSP_NAME', "Playback Player");
define('CPTSP_SINGLE', "Playback Player");
define('CPTSP_TYPE', "playback-player");
define('CPTSP_THUMB_SIZE', 1980);

add_theme_support('post-thumbnails');  
  
function pp_register() {  
    $args = array(  
        'label' => __(CPTSP_NAME),  
        'singular_label' => __(CPTSP_SINGLE),  
        'public' => true,  
        'show_ui' => true,  
        'capability_type' => 'post',  
        'hierarchical' => false,  
        'rewrite' => true,  
        'supports' => array('title', 'thumbnail')  
       );  
  
    register_post_type(CPTSP_TYPE , $args );  
    set_post_thumbnail_size(CPTSP_THUMB_SIZE);
}  

add_action('init', 'pp_register');

?>