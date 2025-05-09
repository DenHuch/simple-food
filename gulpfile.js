const { src, dest, watch, series, parallel } = require('gulp')

const browserSync = require('browser-sync').create();
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const fileInclude = require('gulp-file-include');

function html() {
	return src('app/html/pages/*.html')
		.pipe(
			fileInclude({
				prefix: '@@',
				basepath: '@file',
			})
		)
		.pipe(dest('app'))
		.pipe(browserSync.stream())
}

function styles() {
	return src('app/scss/*.scss')
		.pipe(autoprefixer())
		.pipe(concat('style.min.css'))
		.pipe(
			scss({
				style: 'compressed',
			})
		)
		.pipe(dest('app/css'))
		.pipe(browserSync.stream())
}

function scripts() {
	return src([
		'node_modules/mixitup/dist/mixitup.js',
		'app/js/main.js'
	])
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(dest('app/js'))
		.pipe(browserSync.stream())
}

function watching() {
	browserSync.init({
		server: {
			baseDir: 'app/',
		},
	})
	watch(['app/html/**/*'], html)
	watch(['app/scss/**/*.scss'], styles)
	watch(['app/js/main.js'], scripts)
	watch(['app/html/*.html']).on('change', browserSync.reload)
}

function building() {
	return src(
		[
			'app/css/style.min.css',
			'app/images/**/*.*',
			'app/js/main.min.js',
			'app/html/*.html',
		],
		{ base: 'app' }
	).pipe(dest('dist'))
}

function cleanDist() {
	return src('dist').pipe(clean())
}

exports.html = html
exports.styles = styles
exports.scripts = scripts
exports.watching = watching
exports.building = building
exports.cleanDist = cleanDist

exports.build = series(cleanDist, building)
exports.default = parallel(styles, scripts, html, watching)
