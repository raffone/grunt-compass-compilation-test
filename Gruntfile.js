module.exports = function(grunt) {

	require('time-grunt')(grunt);

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-compass-multiple');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.initConfig({

		compass: {
			dist: {
				options: {
					sassDir: 'scss',
					cssDir: './grunt-contrib-compass/',
					environment: 'production'
				}
			}
		},

		compassMultiple: {
			dist: {
				options: {
					environment: 'production',
					sassFiles: ['scss/*.scss'],
					sassDir: 'scss/',
					cssDir: 'grunt-compass-multiple/'
				}
			}
		},


		sass: {
			dist: {
				options: {
					style: 'compressed',
					compass: true,
				},
				files: {
			        'grunt-contrib-sass/foundation.css': 'scss/foundation.scss',
        			'grunt-contrib-sass/normalize.css': 'scss/normalize.scss'
				}
			}
		}


	});

	grunt.registerTask('default', ['compass', 'compassMultiple', 'sass']);

};