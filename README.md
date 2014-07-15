# FoundationPress

This is a WordPress starter theme based on Foundation 5 by Zurb. The purpose of FoundationPress, is to act as a small and handy toolbox that contains the essentials needed to build any design. FoundationPress is meant to be a starting point, not the final product. If you're looking for an all-in-one theme with built-in shortcodes, plugins, fancypancy portfolio templates or whatnot, I'm afraid you have to look elsewhere.

Please fork, copy, modify, delete, share or do whatever you like with this.

All contributions are welcome!

## Requirements

*You'll need to have the following items installed before continuing.*

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`

## Quickstart

```bash
cd my-wordpress-folder/wp-content/themes/
git clone git@github.com:oomlaut/FoundationPress.git
mv FoundationPress your-theme-name
cd your-theme-name
npm install && bower install
```

While you're working on your project, run:

`grunt`

And you're set!

Check for Foundation Updates? Run:
`foundation update`
(this requires the foundation gem to be installed in order to work. Please see the [docs](http://foundation.zurb.com/docs/sass.html) for details.)


## Stylesheet Folder Structure

  * `style.css`: Do not worry about this file. It is required by WordPress, and is automatically compiled using the SASS assets below

  * `scss/app.scss`: Sass imports for global config, foundation and site structure

  * `scss/config/_variables.scss`: Your custom variables
  * `scss/config/_colors.scss`: Your custom color scheme
  * `scss/config/_fonts.scss`: Your custom font families
  * `scss/config/_settings.scss`: Original Foundation 5 base settings

  * `scss/site/_structure`: Your custom site structure

## Script Folder Strucutre

  * `bower_components/`: This is the source folder where all Foundation scripts are located. `foundation update` will check and update scripts in this folder
  * `js/`: jQuery, Modernizr and Foundation scripts are copied from `bower_components/` to this directory, where they are minified and concatinated and enqueued in WordPress
  * Please note that you must run `grunt` in your terminal for the scripts to be copied. See [Gruntfile.js](https://github.com/olefredrik/FoundationPress/blob/master/Gruntfile.js) for details

## Building and deploying with [Grunt.js](http://gruntjs.com/)

The configuration settings in _Gruntfile.js_ will control how assets are loaded, concatenated, minified, and deployed. Here are some things to be aware of:

  * _default_             : the parameterless command will get the environment up and running for local development and monitor for changes
  * _build_               : prepares the JavaScript components of the solution, copying from bower, concatenating, and uglifying the specified files
  * _dev_                 : _build_s the environment, and compiles the .scss files for local use
  * _dist_                : _build_s the environment, and compiles the .scss files for production
  * _deploy_              : _dist_s the environment, pushes to FTP server, and restores the compiled .scss to avoid conflicts
  * _sass.options.banner_ : generates the header as required and defined for WordPress [Theme Stylesheets](http://codex.wordpress.org/Theme_Development#Theme_Stylesheet)


## How to get started with Foundation

* [Zurb Foundation Docs](http://foundation.zurb.com/docs/)

## Learn how to use WordPress

* [WordPress Codex](http://codex.wordpress.org/)
