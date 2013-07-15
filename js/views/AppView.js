define([
    'jquery',
    'underscore',
    'backbone', 'spin',
    'models/Stub',
    'collections/Stubs',
    'text!templates/main.html'
],
    function ($, _, Backbone, Spinner, StubDataModel, StubCollection, tplMain) {
        "use strict";

        return Backbone.View.extend({

            // The DOM Element associated with this view
            el: "#pageWrapper",

            // Setting the view's template property using the Underscore template method
            template: _.template(tplMain),

            initialize: function () {

            },
            events: {
                //'click #logoToyota':'animateTray'
            },
            render: function () {
                this.$el.html(this.template());
            }


        });
    });
