module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-compass-multiple');

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
		}

	});

	grunt.registerTask('default', ['compass', 'compassMultiple']);

};