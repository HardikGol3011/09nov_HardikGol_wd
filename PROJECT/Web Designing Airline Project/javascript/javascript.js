
function formvalidation() {

var name = document.forms["form"]["user-name"].value;
var number = document.forms["form"]["number"].value;
var email = document.forms["form"]["email"].value;
var city = document.forms["form"]["city_code"].value;
var letters = /^[a-zA-Z]*$/;




    if (name == "") {

        alert('Please Enter Your Full Name');
        return false;

    }
    else if (name.length < 3) {

        alert('Full Name Must be Grater Than 2 Characters');
        return false;

    }
    else if(!name.match(letters)) {

        alert('Full Name Must Contain Only Alphabets');
        return false;

    }
    else{
        alert ("Now Enter Your Mobile Number.");
    }
    
    
    if (number == "") {

        alert('Please Enter Your Mobile number');
        return false;

    }
    else if(number.length != 10){

        alert("Please Enter 10 Digit Mobile Number")
        return false;

    }
    else{

        alert ("Now Enter Your Email Id.");

    }
    


    if (email == "") {

        alert('Please Enter Your E-mail ID')
        return false;
    }

    
    
    if (city == "") {

        alert('Please Enter Your City')
        return false;
    }

}






