//gruntfile.js

module.exports = function(grunt) {
	

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concurrent: {
			dev: ['jshint', 'watch', 'nodemon'],
			options: {
				logConcurrentOutput: true
			}
		},

		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},
			developer: ['gruntfile.js', './public/js/**/*.js', './app/**/*.js']
		},

		watch: {
			tasks: ['jshint'],
			files: ['gruntfile.js', './public/js/**/*.js', './app/**/*.js']
		},

		nodemon: {
			dev: {
				script: 'server.js',
				options: {
					nodeArgs: ['--debug']
				}
			}
		}


	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['concurrent']);
};