module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  /**
   * parses an array of strings into a WordPress-style banner
   * @param  array    arr  list of strings to interact with
   * @return string        properly formed string with system newlines
   */
  function buildBanner(arr){
    var banner = '';
    for (var i in arr){
      if(i > 0){
        banner += grunt.util.linefeed;
      }
      banner += arr[i];
    }
    return banner;
  }

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // https://github.com/gruntjs/grunt-contrib-concat
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          'js/modernizr/modernizr.js',
          //'js/fastclick/lib/fastclick.js',
          //'js/jquery.cookie/jquery.cookie.js',
          //'js/jquery.placeholder/jquery.placeholder.js',
          'js/foundation/js/foundation.js',
          'js/init-foundation.js'
        ],

        dest: 'js/app.js',
      },

    },

    // https://github.com/gruntjs/grunt-contrib-copy
    copy: {
      scripts: {
        expand: true,
        cwd: 'bower_components/',
        src: ['**/*.js', '!**/*.min.js'],
        dest: 'js'
      },

      maps: {
        expand: true,
        cwd: 'bower_components/',
        src: '**/*.map',
        dest: 'js'
      },
    },

    // https://github.com/zonak/grunt-ftp-deploy
    'ftp-deploy': {
      dist: {
        auth: {
          host: 'forsyth.dreamhost.com',
          authKey: 'dreamhost'
        },
        src: '../<%= pkg.themeName %>',
        dest: 'paulgueller.com/wp-content/themes/<%= pkg.themeName %>',
        exclusions: [
          '../<%= pkg.themeName %>/.sass-cache',
          '../<%= pkg.themeName %>/bower_components',
          '../<%= pkg.themeName %>/js',
          '../<%= pkg.themeName %>/node_modules',
          '../<%= pkg.themeName %>/scss',
          '../<%= pkg.themeName %>/.bowerrc',
          '../<%= pkg.themeName %>/.ftppass',
          '../<%= pkg.themeName %>/.gitignore',
          '../<%= pkg.themeName %>/.git',
          '../<%= pkg.themeName %>/bower.json',
          '../<%= pkg.themeName %>/Gruntfile.js',
          '../<%= pkg.themeName %>/package.json',
          '../<%= pkg.themeName %>/README.md',
          '../<%= pkg.themeName %>/*.txt'
        ]
      }
    },

    // https://github.com/gruntjs/grunt-contrib-jshint
    jshint: {
      options: {
        globals: {
          'jQuery': true
        }
      },
      beforeconcat: ['js/init-foundation.js', 'js/kitchen-sink.js']
    },

    // https://github.com/gruntjs/grunt-contrib-sass
    sass: {
      options: {
        loadPath: ['bower_components/foundation/scss'],
        banner: buildBanner([
          '/*',
          'Theme Name:         FoundationPress',
          'Theme URI:          https://github.com/oomlaut/FoundationPress',
          'Description:        FoundationPress is a WordPress theme based on Foundation 5 by Zurb',
          'Version:            <%= pkg.version %>',
          'Author:             Paul Gueller',
          'Author URI:         http://paulgueller.com/',
          '',
          'License:            ISC License',
          'License URI:        http://www.isc.org/downloads/software-support-policy/isc-license/',
          '*/',
          '',
          ])
      },
      dev: {
        options: {
          style: 'expanded',
          lineNumbers: true
        },
        files: {
          'style.css': 'scss/app.scss'
        }
      },
      dist: {
        options: {
          style: 'compressed',
          noCache: true,
          unixNewlines: true
        },
        files: {
          'style.css': 'scss/app.scss'
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'app.min.js': ['js/app.js']
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      lint: {
        files: ['<%= watch.scripts.files %>'],
        tasks: ['jshint']
      },

      scripts: {
        files: ['js/init-foundation.js', 'kitchen-sink.js'],
        tasks: ['concat:dist', 'uglify:dist']
      },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.registerTask('default', [ 'dev', 'watch']);
  grunt.registerTask('build', ['copy', 'concat', 'uglify']);
  grunt.registerTask('dev', ['build','sass:dev']);
  grunt.registerTask('dist', ['build', 'sass:dist']);
  grunt.registerTask('deploy', ['dist', 'ftp-deploy:dist', 'sass:dev']);

}
