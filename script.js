function registerDonor() {

    // Getting values from the form

    let name = document.getElementById("name").value;

    let age = Number(document.getElementById("age").value);

    let blood = document.getElementById("blood").value;

    let type = document.getElementById("type").value;

    let phone = document.getElementById("phone").value;


    // Checking empty fields

    if (name == "" || document.getElementById("age").value == "" ||
        blood == "" || type == "" || phone == "") {

        alert("Please fill all the fields.");

    }

    // Checking age

    else if (age < 18 || age > 65) {

        alert("You are not eligible according to the age criteria.");

    }

    // Checking first-time donor age

    else if (age > 60 && type == "First Time") {

        alert("First-time donors should not be above 60 years.");

    }

    // Successful registration

    else {

        document.getElementById("result").innerHTML =
            "Registration Successful!<br>" +
            "Thank you, " + name + "<br>" +
            "Your Blood Group: " + blood;

        alert("Thank you for registering!");
    }

}
