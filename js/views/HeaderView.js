define([
    'jquery',
    'underscore',
    'backbone', 'spin',
    'models/Stub',
    'collections/Stubs',
    'text!templates/header.html'
],
    function ($, _, Backbone, Spinner, StubDataModel, StubCollection, tplHeader) {
        "use strict";

        return Backbone.View.extend({
            el: "#headerWrapper",
            // Setting the view's template property using the Underscore template method
            template: _.template(tplHeader),

            initialize: function () {

            },
            events: {
                //'click ul li':'addActive'
            },
            render: function () {
                this.$el.html(this.template());
                return this;
            },
            addActive: function (e) {
                e.preventDefault();
                alert("inside");
            }


        });
    });
