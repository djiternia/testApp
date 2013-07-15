define([
    'jquery',
    'underscore',
    'backbone', 'spin',
    'models/Stub',
    'collections/Stubs',

    'views/PersonView'

],
    function ($, _, Backbone, Spinner, StubDataModel, StubCollection, PersonView) {
        "use strict";

        return Backbone.View.extend({
            tagName: 'ul',
            // Setting the view's template property using the Underscore template method
            initialize: function () {
                // this.model.bind("reset", this.render, this);
                var self = this;
                this.collection.bind("add", function (person) {
                    //alert("inside");
                    $(self.el).append(new PersonView({model: person}).render().el);
                });
            },
            events: {
                //'click #save':'saveData'
            },
            render: function () {
                //alert("inside render");
                console.log(this.collection);
                _.each(this.collection.models, function (person) {
                    // alert("inside");
                    $(this.el).append(new PersonView({model: person}).render().el);
                }, this);
                return this;
            }

        });
    });
