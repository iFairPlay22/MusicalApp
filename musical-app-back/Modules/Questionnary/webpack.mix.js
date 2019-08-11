const mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.setPublicPath('../../public').mergeManifest();

mix.js(__dirname + '/Resources/assets/js/app.js', 'js/questionnary.js')
    .sass( __dirname + '/Resources/assets/sass/app.scss', 'css/questionnary.css');

if (mix.inProduction()) {
    mix.version();
}