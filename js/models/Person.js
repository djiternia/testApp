define([
    'backbone'
],
    function (Backbone) {
        "use strict";

        return Backbone.Model.extend({
            urlRoot: "/person",
            defaults: {
                id: null,
                name: "",
                age: null,
                mark: null
            }


        });
    }
);
