module.exports = function(grunt) {
    grunt.initConfig({
        jasmine: {
            notes: {
                src: 'public/*.js',
                options: {
                    specs: 'spec/*Spec.js',
                    helpers: 'spec/*Helper.js',
                    vendor: [
                        'public/libs/angular/angular.js',
                        'public/libs/angular-mocks/angular-mocks.js'
                    ],
                    junit: {path: 'report'}
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'public/*.js', 'spec/*.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint', 'jasmine']);
};

