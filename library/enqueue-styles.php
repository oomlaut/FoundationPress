<?php

if (!function_exists('FoundationPress_styles')) :
  function FoundationPress_styles() {

    // register styles
	wp_register_style('global', get_stylesheet_uri(), array(), VERSION);

    // enqueue styles
    wp_enqueue_style('global');
  }

  add_action( 'wp_enqueue_scripts', 'FoundationPress_styles' );
endif;
