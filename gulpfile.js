const gulp          = require('gulp');
const debug         = require('gulp-debug');
const del           = require('del');
const eventStream   = require('event-stream');

const config    = require('./config');

const paths     = {
    sep: '/',
    root: './',
    nodeModules: './node_modules',
    dist: {
        dir: './dist',
        vendor: {
            dir:    './dist/vendor',
            fa:     './dist/vendor/fontawesome',
            bs:     './dist/vendor/bootstrap',
            jq:     './dist/vendor/jquery',
            pjs:    './dist/vendor/parsleyjs',
            dtb:    './dist/vendor/dataTables',
            prjs:   './dist/vendor/prismjs'
        }
    }
};

const tasks     = {
    default: 'default',
    copy: 'copy',
    del: 'del'
};

gulp.task(tasks.default, [tasks.del, tasks.copy]);

gulp.task(tasks.copy, () => {
    return eventStream.merge([
        // Font Awesome
        gulp.src(`${paths.nodeModules}/@fortawesome/fontawesome-free/js/*.js`)
            .pipe(debug({ title: "--- copied FontAwesome 5 Free scripts" }))
            .pipe(gulp.dest(`${paths.dist.vendor.fa}/js`)),
        gulp.src(`${paths.nodeModules}/@fortawesome/fontawesome-free/svgs/**/*.svg`)
            .pipe(debug({ title: "--- copied FontAwesome 5 Free SVGs" }))
            .pipe(gulp.dest(`${paths.dist.vendor.fa}/svgs`)),

        //Bootstrap
        gulp.src([
            `${paths.nodeModules}/bootstrap/dist/css/bootstrap.css`,
                `${paths.nodeModules}/bootstrap/dist/css/bootstrap.css.map`,
                `${paths.nodeModules}/bootstrap/dist/css/bootstrap.min.css`,
                `${paths.nodeModules}/bootstrap/dist/css/bootstrap.min.css.map`
            ])
            .pipe(debug({ title: "--- copied Bootstrap 4 styles" }))
            .pipe(gulp.dest(`${paths.dist.vendor.bs}/css`)),
        gulp.src([
            `${paths.nodeModules}/bootstrap/dist/js/bootstrap.bundle.js`,
                `${paths.nodeModules}/bootstrap/dist/js/bootstrap.bundle.js.map`,
                `${paths.nodeModules}/bootstrap/dist/js/bootstrap.bundle.min.js`,
                `${paths.nodeModules}/bootstrap/dist/js/bootstrap.bundle.min.js.map`
            ])
            .pipe(debug({ title: "--- copied Bootstrap 4 bundle scripts" }))
            .pipe(gulp.dest(`${paths.dist.vendor.bs}/js`)),

        //jQuery
        gulp.src(`${paths.nodeModules}/jquery/dist/**.*`)
            .pipe(debug({ title: "--- copied jQuery scripts" }))
            .pipe(gulp.dest(paths.dist.vendor.jq)),

        //Parsley
        gulp.src([
                `${paths.nodeModules}/parsleyjs/src/parsley.css`,
                `${paths.nodeModules}/parsleyjs/dist/**.*`
            ])
            .pipe(gulp.dest(`${paths.dist.vendor.pjs}`)),

        //DataTables
        gulp.src([
                `${paths.nodeModules}/dataTables.net-bs4/css/**.*`,
                `${paths.nodeModules}/dataTables.net-responsive-bs4/css/**.*`
            ])
            .pipe(gulp.dest(`${paths.dist.vendor.dtb}/css`)),
        gulp.src([
                `${paths.nodeModules}/dataTables.net/js/**.*`,
                `${paths.nodeModules}/dataTables.net-responsive/js/**.*`,
                `${paths.nodeModules}/dataTables.net-bs4/js/**.*`,
                `${paths.nodeModules}/dataTables.net-responsive-bs4/js/**.*`
            ])
            .pipe(gulp.dest(`${paths.dist.vendor.dtb}/js`)),

        //PrismJS
        gulp.src(`${paths.nodeModules}/prismjs/**/*.{css,js}`)
            .pipe(gulp.dest(`${paths.dist.vendor.prjs}`))
    ]);
});

gulp.task(tasks.del, () => {
    return del.sync([
        `${paths.dist.vendor.dir}/**/*.*`
    ]);
});