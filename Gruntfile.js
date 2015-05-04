'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-notify');


  // Show elapsed time after tasks run
  require('time-grunt')(grunt);


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: [
      "_site",
      "js/**/*.map",
      "css/**/*.map",
      ".sass-cache",
      ".DS_Store",
      ".codekit-cache",
      ".tscache",
    ],
    jekyll: {
      options: {
        bundleExec: true,
        safe: true,
      },
      dev: {
        options: {
          drafts: true,
          future: true,
          config: '_config.yml,_config-dev.yml',
        }
      },
      dist: {
        options: {
          drafts: false,
          future: false,
          config: '_config.yml',
        }
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      configFiles: {
        files: [ 'Gruntfile.js' ],
        options: {
          reload: true
        }
      },
      jekyll: {
        files: [
          '_posts/*',
          '_layouts/*',
          '_includes/*',
          '_drafts/*',
          'img/**/*.{jpg,png,svg}',
          '*.{html,yml,md}',
          '**/index.html',
          '*.xml',
          '!_site/**/*', // not anything in the output dir
          '!TODO.md', // don't rebuild when the TODO file changes
        ],
        tasks: ['jekyll:dev']
      },
      compass: {
        files: [
          '_sass/*.scss'
        ],
        tasks: ['compass:dev', 'jekyll:dev']
      },
      typescript: {
        files: [
          'ts/*.ts',
          "!node_modules/**/*.ts"
        ],
        tasks: ['typescript:dev', 'uglify:dev', 'jekyll:dev']
      }
    },
    typescript: {
      dev: {
        src: ["ts/*.ts", "!node_modules/**/*.ts"],
        dest: 'js/all.ts.js',
        options: {
          target: 'es5',
          sourceMap: true,
          declaration: true,
          references: [
            'core', 'dom'
          ]
        }
      },
      dist: {
        src: ["ts/*.ts", "!node_modules/**/*.ts"],
        dest: 'js/all.ts.js',
        options: {
          target: 'es5',
          sourceMap: false,
          declaration: true,
          references: [
            'core', 'dom'
          ]
        }
      }
    },
    compass: {
      options: {
        config: 'config.rb',
      },
      dist: {
        options: {
          environment: 'production',
          outputStyle: 'compressed',
          noLineComments: true,
          force: true,
        }
      },
      dev: {
        options: {
          environment: 'development',
          outputStyle: 'expanded',
          noLineComments: false,
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 4000,
          base: '_site/',
          hostname: '0.0.0.0',
          keepalive: false
        }
      },
      keepalive: {
        options: {
          port: 4000,
          base: '_site/',
          hostname: '0.0.0.0',
          keepalive: true
        }
      }
    },
    uglify: {
      options: {
        mangle: false,
        compress: true,
      },
      dev: {
        options: {
          sourceMapIncludeSources: true,
          sourceMap: true,
        },
        files: {
          'js/min/all.min.js': [
            'js/all.ts.js',
            'bower_components/Stickyfill/src/stickyfill.js',
//            'bower_components/immutable/dist/immutable.js',
//            'bower_components/underscore/underscore.js',
//            'js/bootstrap/carousel.js',
            'js/bootstrap/collapse.js',
            'js/bootstrap/transition.js',
            'js/bootstrap/tab.js',
            'js/bootstrap/dropdown.js',
            'js/bootstrap/button.js',
          ]
        },
      },
      dist: {
        options: {
          sourceMapIncludeSources: false,
          sourceMap: false,
        },
        files: {
          'js/min/all.min.js': [
            'js/all.ts.js',
            'bower_components/Stickyfill/src/stickyfill.js',
//            'bower_components/immutable/dist/immutable.js',
//            'bower_components/underscore/underscore.js',
//            'js/bootstrap/carousel.js',
            'js/bootstrap/collapse.js',
            'js/bootstrap/transition.js',
            'js/bootstrap/tab.js',
            'js/bootstrap/dropdown.js',
            'js/bootstrap/button.js',
          ]
        },
      },
    }
  });

  grunt.registerTask('dev', function(target) {
    grunt.task.run([
      'typescript:dev', 'uglify:dev', 'compass:dev', 'jekyll:dev', 'connect:server', 'watch'
    ]);
  });
  grunt.registerTask('build', function(target) {
    grunt.task.run([
      'clean',
      'typescript:dist',
      'uglify:dist',
      'compass:dist',
      'jekyll:dist'
    ]);
  });
  grunt.registerTask('dist', function(target) {
    // dist is an alias for build
    grunt.task.run(['build']);
  });

}