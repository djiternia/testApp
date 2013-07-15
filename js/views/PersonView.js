define([
    'jquery',
    'underscore',
    'backbone', 'spin',
    'models/Stub',
    'collections/Stubs',
    'models/Person',
    'views/PersonView',
    'text!templates/personInfo.html'

],
    function ($, _, Backbone, Spinner, StubDataModel, StubCollection, Person, PersonView, personInfo) {
        "use strict";

        return Backbone.View.extend({
            tagName: "li",
            template: _.template(personInfo),
            // Setting the view's template property using the Underscore template method
            initialize: function () {
                this.model.bind("change", this.render, this);
                this.model.bind("destroy", this.remove, this);
            },
            events: {
                'click .delete': 'deleteData',
                'click .edit': 'updateNameF',
                'click .update': 'updateData'
            },
            render: function () {
                //alert("inside li");
                $(this.el).html(this.template(this.model.toJSON()));
                return this;

            },
            deleteData: function (e) {
                //e.preventDefault();
                //alert("inside");
                this.model.destroy();
            },
            remove: function () {
                this.$el.remove();
            },
            updateNameF: function () {
                // $(".updateName").show();
                $(this.el).find(".updateName").show();
                //var info=this.model.toJSON();
                $(this.el).find(".updateF").val(this.model.get("name"));
                //console.log(this.model.get("name"));
            },
            updateData: function () {
                this.model.set("name", $(this.el).find(".updateF").val());
            }
        });
    });
