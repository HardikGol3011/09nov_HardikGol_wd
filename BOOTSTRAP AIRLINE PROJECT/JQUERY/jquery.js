$(function () {
    $('#datepicker').datepicker();
});

$(document).ready(function () {
    $('#time').timepicker();
});

$(document).ready(function () {
    $('#time').timepicker({
        timeFormat: 'h:mm:ss p'
    });
});

$(document).ready(function () {
    if ($('#read').text() == 'READ MORE') {
        $('#read').text('READ LESS');
    }
    else {
        $('#read').text('READ MORE');
    }

});

$("#myform").validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        email: {
            required: true,
            email: true
            },
        phone:{
            required: true,
            number: true,
            minlength: 10,
            maxlength: 10
        },
       
    },
    messages:{
        name: {
            required: "Please Enter Your Full Name",
            minlength: "Your Full Name must consist of at least 2 characters"
        },
        email: {
            required: "Please enter your email",
            email: "Please enter a email valid format"
        },
        phone: {
            required: "Please enter your phone number",
            number: "Please enter a phone number valid format(only digits are allowed)",
            minlength: "Your phone number must consist of 10 digits",
            maxlength: "Your phone number only consist of 10 digits"
        },
        
    },
    submitHandler: function(form) {
      form.submit();
    }
   });