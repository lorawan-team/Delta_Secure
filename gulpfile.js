const elixir = require('laravel-elixir');

require('laravel-elixir-vue');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('app.scss')
       .webpack('app.js');

    mix.scripts(
         [
           // Angular
            'resources/assets/js/bower/angular/angular.js',
            'resources/assets/js/bower/angular-resource/angular-resource.js',
            'resources/assets/js/bower/angular-ui-router/release/angular-ui-router.js',
            'resources/assets/js/angular-app/*.js'
         ],
            'public/js/angular-app.js'
       );
});
