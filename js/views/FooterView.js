define([
    'jquery',
    'underscore',
    'backbone', 'spin',
    'models/Stub',
    'collections/Stubs',
    'text!templates/footer.html'
],
    function ($, _, Backbone, Spinner, StubDataModel, StubCollection, tplFooter) {
        "use strict";

        return Backbone.View.extend({
            el: "#footerWrapper",
            // Setting the view's template property using the Underscore template method
            template: _.template(tplFooter),

            initialize: function () {

            },
            events: {
                //'click #logoToyota':'animateTray'
            },
            render: function () {
                this.$el.html(this.template());
                return this;
            }


        });
    });
