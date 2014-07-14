module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        loadPath: ['bower_components/foundation/scss']
      },
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },

    copy: {
      scripts: {
        expand: true,
        cwd: 'bower_components/',
        src: '**/*.js',
        dest: 'js'
      },

      maps: {
        expand: true,
        cwd: 'bower_components/',
        src: '**/*.map',
        dest: 'js'
      },
    },

    uglify: {
      dist: {
        files: {
          'js/modernizr/modernizr.min.js': ['js/modernizr/modernizr.js']
        }
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          'js/foundation/js/foundation.min.js',
          'js/init-foundation.js'
        ],

        dest: 'js/app.js',
      },

    },


    'ftp-deploy': {
      dist: {
        auth: {
          host: 'forsyth.dreamhost.com',
          authKey: 'dreamhost'
        },
        src: '../<%= pkg.themeName %>',
        dest: 'paulgueller.com/wp-content/themes/<%= pkg.themeName %>',
        exclusions: [
          '../<%= pkg.name %>/.sass-cache',
          '../<%= pkg.name %>/bower_components',
          '../<%= pkg.name %>/node_modules',
          '../<%= pkg.name %>/scss',
          '../<%= pkg.name %>/.bowerrc',
          '../<%= pkg.name %>/.ftppass',
          '../<%= pkg.name %>/.gitignore',
          '../<%= pkg.name %>/.git',
          '../<%= pkg.name %>/bower.json',
          '../<%= pkg.name %>/Gruntfile.js',
          '../<%= pkg.name %>/package.json',
          '../<%= pkg.name %>/README.md',
          '../<%= pkg.name %>/*.txt'
        ]
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.registerTask('default', [ 'dev', 'watch']);
  grunt.registerTask('build', ['copy', 'uglify', 'concat']);
  grunt.registerTask('dev', ['build','sass:dev']);
  grunt.registerTask('deploy', ['build', 'sass:dist', 'ftp-deploy:dist', 'sass:dev']);

}
