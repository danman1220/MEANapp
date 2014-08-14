//gruntfile.js

module.exports = function(grunt) {
	'use strict';

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
				reporter: require('jshint-stylish'),
				jshintrc: true
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
		},

		exec: {
			clean: 'del node_modules /Q && del public\\bower_components /Q',
			node: 'npm install',
			bower: 'bower install'
		}


	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['concurrent']);
	grunt.registerTask('clean-install', ['exec:clean', 'exec:node', 'exec:bower']);
};