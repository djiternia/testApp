define([
    'jquery',
    'underscore',
    'backbone', 'spin',
    'models/Stub',
    'collections/Stubs',
    'models/Person',
    'text!templates/right.html'
],
    function ($, _, Backbone, Spinner, StubDataModel, StubCollection, Person, tplRight) {
        "use strict";

        return Backbone.View.extend({
            el: "#rightWrap",
            // Setting the view's template property using the Underscore template method
            template: _.template(tplRight),

            initialize: function () {

            },
            events: {
                'click #save': 'saveData'
            },
            render: function () {
                // alert("inside")
                this.$el.html(this.template());
                return this;
            },
            saveData: function (e) {
                e.preventDefault();
                var name = $("#name").val();
                var age = $("#age").val();
                var mark = $("#mark").val();
                //alert(name+" "+age+" "+mark);
                App.Models.Person = new Person();
                App.Models.Person.set("name", name);
                App.Models.Person.set("age", age);
                App.Models.Person.set("mark", mark);
                //App.Models.Person.set("id",Math.random(10));

                App.Collections.People.add(App.Models.Person);
                App.Models.Person.save();
                App.Models.Person.set("id", Math.random(10));
                App.Models.Person.save();
                //App.Collections.People.add(App.Models.Person);
            }



        });
    });
