// Karma configuration
// Generated on Mon Mar 09 2015 09:51:24 GMT-0600 (Mountain Daylight Time)

module.exports = function(config) {
	config.set({

			// base path that will be used to resolve all patterns (eg. files, exclude)
			basePath: './',


			// frameworks to use
			// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
			frameworks: ['mocha', 'chai', 'sinon', 'chai-sinon'],


			// list of files / patterns to load in the browser
			files: [
				'./bower_components/jquery/dist/jquery.min.js',
				'./bower_components/angular/angular.js',
				'./bower_components/angular-mocks/angular-mocks.js',
				'./bower_components/angular-animate/angular-animate.min.js',
				'./bower_components/angular-route/angular-route.min.js',
				'./bower_components/angular-sanitize/angular-sanitize.min.js',
				'./bower_components/angular-cookies/angular-cookies.min.js',
				'./bower_components/angular-touch/angular-touch.min.js',
				'./bower_components/angular-translate/angular-translate.min.js',
				'./bower_components/angular-ui-select/dist/select.min.js',
				'./bower_components/angular-bootstrap/ui-bootstrap.min.js',
				'./bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
				'./bower_components/moment/moment.js',
				'./bower_components/toastr/toastr.js',
				'./bower_components/jquery-ui/jquery-ui.min.js',
				'./bower_components/underscore/underscore-min.js',
				'./scripts/autocomplete.js',
				'./scripts/scrollTo.js',
				'./scripts/touchpunch.js',
				'./bower_components/angular-ui-sortable/sortable.js',

				'./app/app.module.js',
				'./app/**/*.module.js',
				'./app/**/*.js',

				/* MOCHA */
				'./test/lib/*.js',

				// all specs
				'./test/specs/**/*.spec.js'
			],


			// list of files to exclude
			exclude: [],

			// preprocess matching files before serving them to the browser
			// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
			preprocessors: {
				'./app/**/*.js': 'coverage'
			},


			// test results reporter to use
			// possible values: 'dots', 'progress'
			// available reporters: https://npmjs.org/browse/keyword/karma-reporter
			reporters: ['progress'],

			coverageReporter: {
				type: 'lcov',
				dir: 'test/coverage'
			},

			// web server port
			port: 9876,
			// enable / disable colors in the output (reporters and logs)
			colors: true,


			// level of logging
			// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
			logLevel: config.LOG_INFO,


			// enable / disable watching file and executing tests whenever any file changes
			autoWatch: true,


			// start these browsers
			// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
//        browsers: ['Chrome', 'ChromeCanary', 'FirefoxAurora', 'Safari', 'PhantomJS'],
			browsers: ['Chrome'],


			// Continuous Integration mode
			// if true, Karma captures browsers, runs the tests and exits
			singleRun: false
		}
	);
};
