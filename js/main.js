require.config({
    paths: {
        jquery: 'libs/jquery',
        underscore: 'libs/underscore-min',
        backbone: 'libs/backbone-min',
        text: 'libs/text',
        spin: 'plugin/spin',
        templates: 'templates'

        // Application Folders
        /*"collections": "collections",
         "models": "models",
         "templates": "templates",
         "views": "views"*/
    },
    shim: {
        "underscore": {
            exports: "_"
        },
        backbone: {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        }
    }
});


window.App = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {}
}
require([ 'jquery', 'backbone', 'router'], function ($, Backbone, AppRouter) {
    $(document).ready(function () {
        App.Router = new AppRouter();

    });
});