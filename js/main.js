/**
 * Created with JetBrains WebStorm.
 * User: iternia
 * Date: 7/9/13
 * Time: 12:08 PM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {
// Handler for .ready() called.
    $('#submit').click(function () {
        // alert("clicked");

        var person = new Object();
        person.firstName = $('#firstName').val();
        person.lastName = $('#lastName').val();

        //alert(person);

        var jsonPerson = JSON.stringify(person);

        // alert(jsonPerson);
        console.log(jsonPerson);

        $.ajax({
            url: "http://server1.iternia.com:9090/iterniaapp/api/addperson",
            method: 'POST',
            data: jsonPerson,
            dataType: 'json',
            contentType: "application/json"


        }).done(function (data) {
                // alert("send"+data);
                console.log(data);
                //var responseObj = $.parseJSON(data);
                //alert(data);
                $('#showFirstName').html("First Name :- " + data.firstName);
                $('#showLastName').html("Last Name :- " + data.lastName);
            });

    });
});