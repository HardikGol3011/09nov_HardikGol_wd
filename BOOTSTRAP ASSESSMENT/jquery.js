$(document).ready(function () {

    $('#calculate').click(function () {
        var date = document.getElementById("datepicker");

        var date2 = document.getElementById("datepicker1");

        console.log(date.value);
        var d1 = new Date(date.value);

        var d2 = new Date(date2.value);
         

        var Months = d2.getMonth() - d1.getMonth();

        var Years = d2.getFullYear() - d1.getFullYear();

        var Days = d2.getDate() - d1.getDate();

       

    });

});