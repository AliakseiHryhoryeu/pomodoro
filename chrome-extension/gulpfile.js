const { src, dest, series, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const csso = require('gulp-csso')
const include = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const sync = require('browser-sync').create()
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const autoPrefixer = require('gulp-autoprefixer')
const imagemin = require('gulp-imagemin')

const paths = {
	html: {
		src: './src/**.html',
		dest: './build',
	},
	scss: {
		src: './src/scss/**.scss',
		watch: './src/scss/**/**.scss',
		dest: './build',
	},
	fonts: {
		src: './src/fonts/**',
		dest: './build/fonts/',
	},

	images: {
		src: './src/img/**',
		dest: './build/img/',
	},
	js: {
		src: './src/js/**.js',
		dest: './build/js/',
	},
	manifest: {
		src: './src/manifest.json',
		dest: './build/',
	},
}

function clear() {
	return del('build')
}

function html() {
	return src(paths.html.src)
		.pipe(
			include({
				prefix: '@@',
			})
		)
		.pipe(
			htmlmin({
				collapseWhitespace: true,
				removeComments: true,
			})
		)
		.pipe(dest(paths.html.dest))
}

function scss() {
	return src([paths.scss.src])
		.pipe(sass())
		.pipe(
			autoPrefixer({
				cascade: false,
			})
		)
		.pipe(csso())
		.pipe(concat('index.css'))
		.pipe(dest(paths.scss.dest))
}
function fonts() {
	return src(paths.fonts.src).pipe(dest(paths.fonts.dest))
}

function images() {
	return src(paths.images.src)
		.pipe(dest(paths.images.dest))
		.pipe(src(paths.images.src))
		.pipe(
			imagemin({
				progressive: true,
				svgoPlugins: [{ removeViewBox: false }],
				interlaced: true,
				optimizationLevel: 3,
			})
		)
		.pipe(dest(paths.images.dest))
}

function js() {
	return src(paths.js.src, { sourcemaps: true })
		.pipe(babel())
		.pipe(uglify())
		.pipe(dest(paths.js.dest))
}

function fonts() {
	return src(paths.fonts.src).pipe(dest(paths.fonts.dest))
}

function manifest() {
	return src(paths.manifest.src).pipe(dest(paths.manifest.dest))
}

function serve() {
	sync.init({
		server: './build',
	})
	watch(paths.html.src, series(html)).on('change', sync.reload)
	watch(paths.scss.src, series(scss)).on('change', sync.reload)
	watch(paths.scss.watch, series(scss)).on('change', sync.reload)
	watch(paths.images.src, series(images)).on('change', sync.reload)
	watch(paths.fonts.src, series(fonts)).on('change', sync.reload)
	watch(paths.manifest.src, series(manifest)).on('change', sync.reload)
	watch(paths.js.src, series(js)).on('change', sync.reload)
}

exports.build = series(clear, html, scss, images, fonts, manifest, js, scss)

exports.dev = series(clear, html, scss, images, fonts, manifest, js, serve)
