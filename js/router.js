//console.log('router');
define(["jquery", "underscore", "backbone", "views/HeaderView", "views/FooterView", "views/RightView", "views/PeopleView", "collections/People", "models/Person"],
    function ($, _, Backbone, HeaderView, FooterView, RightView, PeopleView, People, Person) {
        "use strict";

        return Backbone.Router.extend({
            initialize: function () {
                Backbone.history.start();

            },
            routes: {
                'about': 'aboutPage',
                '*actions': 'homePage'
            },

            showPage: function () {
                //alert("inside Show page");
                this.loadDefault();

            },
            loadDefault: function () {
                if (typeof App.Views.HeaderView == "undefined") {
                    //alert("inside default")
                    App.Views.HeaderView = new HeaderView();
                    App.Views.HeaderView.render();
                }

                if (typeof App.Views.FooterView == "undefined") {
                    // alert("inside default")
                    App.Views.FooterView = new FooterView();
                    App.Views.FooterView.render();
                }
            },
            homePage: function () {
                this.loadDefault();
                App.Views.RightView = new RightView();
                App.Views.RightView.render();
                App.Models.person1 = new Person();
                App.Models.person1.set("name", "gfdg");
                App.Models.person1.set("age", "12");
                App.Models.person1.set("mark", "60");

                App.Models.person2 = new Person();
                App.Models.person2.set("name", "ramesh");
                App.Models.person2.set("age", "21333");
                App.Models.person2.set("mark", "21212");
                App.Collections.People = new People([
                    {
                        "name": "dhfhd",
                        "age": "dfga",
                        "mark": "fafa"
                    },
                    {
                        "name": "dhfhdfgdf",
                        "age": "43343",
                        "mark": "3434343"
                    }
                ]);
                /* App.Collections.People.add(App.Models.person1);
                 App.Collections.People.add(App.Models.person2);*/
                App.Views.PeopleView = new PeopleView({collection: App.Collections.People});
                $("#leftWrap").html(App.Views.PeopleView.render().el);
                //$("#rightWrap").html()
                // alert("inside home");

            },
            aboutPage: function () {
                this.loadDefault();
                //alert("inside about");
            }


        });

    });