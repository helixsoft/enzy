<?php
define('CPT_NAME', "Slider Images");
define('CPT_SINGLE', "Slider Image");
define('CPT_TYPE', "slider-image");
define('CPT_THUMB_SIZE', 1980);

add_theme_support('post-thumbnails');  
  
function hse_register() {  
    $args = array(  
        'label' => __(CPT_NAME),  
        'singular_label' => __(CPT_SINGLE),  
        'public' => true,  
        'show_ui' => true,  
        'capability_type' => 'post',  
        'hierarchical' => false,  
        'rewrite' => true,  
        'supports' => array('title', 'thumbnail')  
       );  
  
    register_post_type(CPT_TYPE , $args );  
    set_post_thumbnail_size(CPT_THUMB_SIZE);
}  

add_action('init', 'hse_register');

?>