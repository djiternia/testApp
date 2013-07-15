define([
    'underscore',
    'backbone',
    'models/Person'
],
    function (_, Backbone, Person) {
        "use strict";

        return Backbone.Collection.extend({
            url: "/person",
            model: Person
        })
    }
);
