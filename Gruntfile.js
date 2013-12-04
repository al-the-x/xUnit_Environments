/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    shell: {
      test_js: {
        command: 'node ./javascript/test.js'
      },
      test_py: {
        command: 'python -m ./python/test.py'
      },
      test_php: {
        command: 'phpunit ./php/test.php'
      },
      test_rb: {
        command: 'ruby ./ruby/test.rb'
      },
      options: {
        stdout: true,
        failOnError: true
      }
    },
    nodeunit: {
      files: ['test/**/*_test.js']
    },
    watch: {
      javascript: {
        files: 'javascript/*.js',
        tasks: ['shell:test_js']
      },
      python: {
        files: 'python/*.py',
        tasks: ['shell:test_py']
      },
      php: {
        files: 'php/*.php',
        tasks: ['shell:test_php']
      },
      ruby: {
        files: 'ruby/*.rb',
        tasks: ['shell:test_rb']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  // Default task.
  grunt.registerTask('default', 'watch');

};
