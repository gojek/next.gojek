// generated on 2020-03-23 using generator-webapp 4.0.0-7
const { src, dest, watch, series, parallel, lastRun } = require('gulp')
const gulpLoadPlugins = require('gulp-load-plugins')
const fs = require('fs')
const mkdirp = require('mkdirp')
const Modernizr = require('modernizr')
const browserSync = require('browser-sync')
const del = require('del')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const { argv } = require('yargs')

const $ = gulpLoadPlugins()
const server = browserSync.create()

const port = argv.port || 9000

const isProd = process.env.NODE_ENV === 'production'
const isTest = process.env.NODE_ENV === 'test'
const isDev = !isProd && !isTest

function styles() {
  return src('app/styles/*.scss')
    .pipe($.plumber())
    .pipe($.if(!isProd, $.sourcemaps.init()))
    .pipe(
      $.sass
        .sync({
          outputStyle: 'expanded',
          precision: 10,
          includePaths: ['.'],
        })
        .on('error', $.sass.logError)
    )
    .pipe($.postcss([autoprefixer()]))
    .pipe($.if(!isProd, $.sourcemaps.write()))
    .pipe(dest('.tmp/styles'))
    .pipe(server.reload({ stream: true }))
}

function scripts() {
  return src('app/scripts/**/*.js')
    .pipe($.plumber())
    .pipe($.if(!isProd, $.sourcemaps.init()))
    .pipe($.babel())
    .pipe($.if(!isProd, $.sourcemaps.write('.')))
    .pipe(dest('.tmp/scripts'))
    .pipe(server.reload({ stream: true }))
}

async function modernizr() {
  const readConfig = () =>
    new Promise((resolve, reject) => {
      fs.readFile(`${__dirname}/modernizr.json`, 'utf8', (err, data) => {
        if (err) reject(err)
        resolve(JSON.parse(data))
      })
    })
  const createDir = () =>
    new Promise((resolve, reject) => {
      mkdirp(`${__dirname}/.tmp/scripts`, (err) => {
        if (err) reject(err)
        resolve()
      })
    })
  const generateScript = (config) =>
    new Promise((resolve, reject) => {
      Modernizr.build(config, (content) => {
        fs.writeFile(
          `${__dirname}/.tmp/scripts/modernizr.js`,
          content,
          (err) => {
            if (err) reject(err)
            resolve(content)
          }
        )
      })
    })

  const [config] = await Promise.all([readConfig(), createDir()])
  await generateScript(config)
}

const lintBase = (files) => {
  return src(files)
    .pipe($.eslint({ fix: true }))
    .pipe(server.reload({ stream: true, once: true }))
    .pipe($.eslint.format())
    .pipe($.if(!server.active, $.eslint.failAfterError()))
}
function lint() {
  return lintBase('app/scripts/**/*.js').pipe(dest('app/scripts'))
}
function lintTest() {
  return lintBase('test/spec/**/*.js').pipe(dest('test/spec'))
}

function html() {
  return src('app/*.html')
    .pipe($.useref({ searchPath: ['.tmp', 'app', '.'] }))
    .pipe($.if(/\.js$/, $.uglify({ compress: { drop_console: true } })))
    .pipe(
      $.if(/\.css$/, $.postcss([cssnano({ safe: true, autoprefixer: false })]))
    )
    .pipe(
      $.if(
        /\.html$/,
        $.htmlmin({
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: { compress: { drop_console: true } },
          processConditionalComments: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
        })
      )
    )
    .pipe(dest('dist'))
}

function images() {
  return src('app/img/**/*', { since: lastRun(images) })
    .pipe($.imagemin())
    .pipe(dest('dist/img'))
}

function fonts() {
  return src('app/fonts/**/*.{otf,eot,svg,ttf,woff,woff2}').pipe(
    $.if(!isProd, dest('.tmp/fonts'), dest('dist/fonts'))
  )
}

function icons() {
  return src('node_modules/@fortawesome/fontawesome-free/webfonts/*').pipe(
    dest('dist/webfonts/')
  )
}

function extras() {
  return src(['app/*', '!app/*.html'], {
    dot: true,
  }).pipe(dest('dist'))
}

function clean() {
  return del(['.tmp', 'dist'])
}

function measureSize() {
  return src('dist/**/*').pipe($.size({ title: 'build', gzip: true }))
}

const build = series(
  clean,
  parallel(
    lint,
    series(parallel(styles, scripts, modernizr), html),
    images,
    fonts,
    icons,
    extras
  ),
  measureSize
)

function startAppServer() {
  server.init({
    notify: false,
    port,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/node_modules': 'node_modules',
      },
    },
  })

  watch(['app/*.html', 'app/images/**/*', '.tmp/fonts/**/*']).on(
    'change',
    server.reload
  )

  watch('app/styles/**/*.scss', styles)
  watch('app/scripts/**/*.js', scripts)
  watch('modernizr.json', modernizr)
  watch('app/fonts/**/*', fonts)
}

function startTestServer() {
  server.init({
    notify: false,
    port,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/scripts': '.tmp/scripts',
        '/node_modules': 'node_modules',
      },
    },
  })

  watch('app/scripts/**/*.js', scripts)
  watch(['test/spec/**/*.js', 'test/index.html']).on('change', server.reload)
  watch('test/spec/**/*.js', lintTest)
}

function startDistServer() {
  server.init({
    notify: true,
    port,
    server: {
      baseDir: 'dist',
      routes: {
        '/node_modules': 'node_modules',
      },
    },
  })
}

let serve
if (isDev) {
  serve = series(
    clean,
    parallel(styles, scripts, modernizr, fonts),
    startAppServer
  )
} else if (isTest) {
  serve = series(clean, scripts, startTestServer)
} else if (isProd) {
  serve = series(build, startDistServer)
}

exports.serve = serve
exports.build = build
exports.default = build
