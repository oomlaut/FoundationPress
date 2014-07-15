<?php
/*
Author: Paul Gueller
URL: http://paulgueller.com
*/

define("VERSION", '0.0.1');

// Various clean up functions
require_once('library/cleanup.php');

// Required for Foundation to work properly
require_once('library/foundation.php');

// Register all navigation menus
require_once('library/navigation.php');

// Add menu walker
require_once('library/menu-walker.php');

// Create widget areas in sidebar and footer
require_once('library/widget-areas.php');

// Return entry meta information for posts
require_once('library/entry-meta.php');

// Enqueue scripts
require_once('library/enqueue-scripts.php');

// Enqueue styles
require_once('library/enqueue-styles.php');

// Add theme support
require_once('library/theme-support.php');

?>
