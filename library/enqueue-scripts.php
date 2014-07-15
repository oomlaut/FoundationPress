<?php

if (!function_exists('FoundationPress_scripts')) :
  function FoundationPress_scripts() {

    // deregister the jquery version bundled with wordpress
    wp_deregister_script( 'jquery' );

    // register scripts
    // Local jQuery path : get_template_directory_uri() . '/js/jquery/dist/jquery.min.js'
    wp_register_script( 'jquery', '//code.jquery.com/jquery-2.1.1.min.js' );
    wp_register_script( 'global', get_template_directory_uri() . '/js/app.min.js', array(), VERSION, false );

    /*
    wp_register_script( 'modernizr', get_template_directory_uri() . '/js/modernizr/modernizr.min.js', array(), VERSION, false );
    wp_register_script( 'foundation', get_template_directory_uri() . '/js/app.js', array('jquery'), VERSION, true );
    wp_enqueue_script('modernizr');
    wp_enqueue_script('foundation');
*/
    // enqueue scripts
    wp_enqueue_script('jquery');
    wp_enqueue_script('global');

  }

  add_action( 'wp_enqueue_scripts', 'FoundationPress_scripts' );
endif;

if (!function_exists('FoundationPress_scripts')) :
  function kitchensink_scripts() {
    if ( is_page_template('kitchen-sink.php') ) {

      wp_enqueue_script( 'kitchen-sink', get_template_directory_uri() . '/js/kitchen-sink.js', array('jquery'), VERSION, true );

    }
  }

  add_action( 'wp_enqueue_scripts', 'kitchensink_scripts' );
endif;
