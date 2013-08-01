<?php
define('CPTS_NAME', "Small Images");
define('CPTS_SINGLE', "Small Image");
define('CPTS_TYPE', "small-image");
define('CPTS_THUMB_SIZE', 1980);

add_theme_support('post-thumbnails');  
  
function sse_register() {  
    $args = array(  
        'label' => __(CPTS_NAME),  
        'singular_label' => __(CPTS_SINGLE),  
        'public' => true,  
        'show_ui' => true,  
        'capability_type' => 'post',  
        'hierarchical' => false,  
        'rewrite' => true,  
        'supports' => array('title', 'thumbnail')  
       );  
  
    register_post_type(CPTS_TYPE , $args );  
    set_post_thumbnail_size(CPTS_THUMB_SIZE);
}  

add_action('init', 'sse_register');

?>