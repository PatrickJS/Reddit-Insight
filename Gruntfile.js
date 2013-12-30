/* jshint camelcase: false */
'use strict';

var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  var redd = {
    app: 'client',
    dist: 'dist',
    server: 'server',
    client: 'client',
    public: 'public',
    port: 9000
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bwr: grunt.file.readJSON('bower.json'),
    yeoman: redd,
    redd: redd,
    watch: {
      styles: {
        files: ['<%= redd.client %>/styles/{,*/}*.styl'],
        tasks: ['copy:styles', 'autoprefixer']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          '<%= redd.client %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '{.tmp,<%= redd.client %>}/scripts/{,*/}*.js',
          '<%= redd.client %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    autoprefixer: {
      options: ['last 1 version'],
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },
    connect: {
      options: {
        port: '<%= redd.port %>',
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, '.tmp'),
              mountFolder(connect, redd.app)
            ];
          }
        }
      },
      test: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, '.tmp'),
              mountFolder(connect, 'test')
            ];
          }
        }
      },
      dist: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, redd.dist)
            ];
          }
        }
      }
    },
    open: {
      server: {
        url: 'http://localhost:<%= redd.port %>'
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= redd.dist %>/*',
            '<%= redd.public %>/scripts/*',
            '!<%= redd.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= redd.client %>/scripts/{,*/}*.js'
      ]
    },
    // not used since Uglify task does concat,
    // but still available if needed
    concat: {
      // options: {
      //   separator: '\n',
      //   stripBanners: true,
      //   banner: '/*\n  <%= pkg.name %> - v<%= pkg.version %> \n' +
      //   '  <%= grunt.template.today("yyyy-mm-dd") %>\n */\n',
      //   process: function(src, filepath) {
      //     return src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
      //   },
      // },
      // dist: {
      //   src: ['<%= redd.client %>/config/intro.js', '<%= redd.public %>/scripts/*.js', '<%= redd.client %>/config/outro.js'],
      //   dest: 'dist/scripts.js',
      // }
      dist:{}
    },
    rev: {
      dist: {
        files: {
          src: [
            '<%= redd.dist %>/scripts/{,*/}*.js',
            '<%= redd.dist %>/styles/{,*/}*.css',
            '<%= redd.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= redd.dist %>/styles/fonts/*'
          ]
        }
      }
    },
    useminPrepare: {
      html: '<%= redd.client %>/index.html',
      options: {
        dest: '<%= redd.dist %>'
      }
    },
    usemin: {
      html: ['<%= redd.dist %>/{,*/}*.html'],
      css: ['<%= redd.dist %>/styles/{,*/}*.css'],
      options: {
        dirs: ['<%= redd.dist %>']
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= redd.client %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= redd.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= redd.client %>/images',
          src: '{,*/}*.svg',
          dest: '<%= redd.dist %>/images'
        }]
      }
    },
    stylus: {
      compile: {
        options: {
          paths: ['<%= redd.client %>/styles/']
        },
        files: {
          '<%= redd.public %>/styles.css': ['<%= redd.client %>/styles/*.styl']
        }
      }
    },
    cssmin: {
      // By default, your `index.html` <!-- Usemin Block --> will take care of
      // minification. This option is pre-configured if you do not wish to use
      // Usemin blocks.
      // dist: {
      //   files: {
      //     '<%= redd.dist %>/styles/main.css': [
      //       '.tmp/styles/{,*/}*.css',
      //       '<%= redd.client %>/styles/{,*/}*.css'
      //     ]
      //   }
      // }
    },
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
          // https://github.com/redd/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%= redd.client %>',
          src: ['*.html', 'views/*.html'],
          dest: '<%= redd.dist %>'
        }]
      }
    },
    // Put files not handled in other tasks here
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= redd.client %>',
          dest: '<%= redd.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'bower_components/**/*',
            'images/{,*/}*.{gif,webp}',
            'styles/fonts/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= redd.dist %>/images',
          src: [
            'generated/*'
          ]
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= redd.client %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      },
      watch: {
        configFile: 'karma.conf.js',
        singleRun: false
      }
    },
    ngmin: {
      controllers: {
        expand: false,
        src: ['<%= redd.client %>/controllers/{,*/}*.js'],
        dest: '<%= redd.public %>/scripts/controllers.js'
      },
      directives: {
        expand: false,
        src: ['<%= redd.client %>/directives/{,*/}*.js'],
        dest: '<%= redd.public %>/scripts/directives.js'
      },
      services: {
        expand: false,
        src: ['<%= redd.client %>/services/{,*/}*.js'],
        dest: '<%= redd.public %>/scripts/services.js'
      },
      modules: {
        expand: false,
        src: ['<%= redd.client %>/modules/{,*/}*.js'],
        dest: '<%= redd.public %>/scripts/modules.js'
      },
      config: {
        expand: false,
        src: ['<%= redd.client %>/config/app.js', '<%= redd.client %>/config/config.js'],
        dest: '<%= redd.public %>/scripts/config.js'
      }
      // dist: {
      //   files: [{
      //     expand: true,
      //     cwd: '<%= redd.dist %>/scripts',
      //     src: '*.js',
      //     dest: '<%= redd.dist %>/scripts'
      //   }]
      // }
    },
    uglify: {
      options: {
        beautify: false,
        enclose: {
          'this': 'window',
          'this.angular': 'angular'
        },
        banner: '/*\n  <%= pkg.name %> - v<%= pkg.version %> \n  ' +
          '<%= grunt.template.today("yyyy-mm-dd") %>\n*/\n'+
        '',
        compress: {
          global_defs: {
            'DEBUG': false
          },
          dead_code: true
        }
      },
      dist: {
        files: {
          '<%= redd.dist %>/scripts.js': '<%= redd.public %>/scripts/*.js'
        }
      }
    },
    complexity: {
      generic: {
        src: ['<%= redd.dist %>/scripts/*.js', '<%= redd.dist %>/scripts/**/*.js'],
        options: {
          jsLintXML: '<%= redd.test %>/report.xml', // create XML JSLint-like report
          checkstyleXML: '<%= redd.test %>/checkstyle.xml', // create checkstyle report
          errorsOnly: false, // show only maintainability errors
          cyclomatic: 3,
          halstead: 8,
          maintainability: 100
        }
      }
    },
    nodemon: {
      dev: {

      }
    }
  });

  grunt.registerTask('server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'complexity',
    'karma'
  ]);
  grunt.registerTask('build', [
    'clean:dist',
    'ngmin',
    'concat',
    'uglify'
    // 'useminPrepare',
    // 'concurrent:dist',
    // 'autoprefixer',
    // 'copy:dist',
    // 'cssmin',
    // 'rev',
    // 'usemin'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};
