// Display Camp Details
function showCampDetails() {

    let camp = document.getElementById("camp").value;

    let details = document.getElementById("campDetails");

    if (camp == "University Campus") {

        details.innerHTML =
            "Date: 20 November 2026 | Location: LPU Campus | Time: 9 AM - 2 PM";

    }

    else if (camp == "Community Hall") {

        details.innerHTML =
            "Date: 25 November 2026 | Location: Community Hall | Time: 10 AM - 3 PM";

    }

    else if (camp == "City Hospital") {

        details.innerHTML =
            "Date: 30 November 2026 | Location: City Hospital | Time: 9 AM - 1 PM";

    }

    else {

        details.innerHTML = "";

    }

}


// Donor Registration Function

function registerDonor() {

    let name = document.getElementById("name").value;

    let age = Number(document.getElementById("age").value);

    let blood = document.getElementById("bloodGroup").value;

    let type = document.getElementById("donorType").value;

    let phone = document.getElementById("phone").value;

    let weight = Number(document.getElementById("weight").value);

    let hemoglobin = Number(document.getElementById("hemoglobin").value);

    let camp = document.getElementById("camp").value;

    let slot = document.getElementById("slot").value;

    let result = document.getElementById("result");


    // Check Empty Fields

    if (
        name.trim() == "" ||
        age <= 0 ||
        blood == "" ||
        type == "" ||
        phone == "" ||
        weight <= 0 ||
        hemoglobin <= 0 ||
        camp == "" ||
        slot == ""
    ) {

        result.innerHTML = "Please fill all the fields.";

        result.style.backgroundColor = "#ffcccc";

        result.style.color = "red";

        return;

    }


    // Phone Number Validation

    if (!/^\d{10}$/.test(phone)) {

        result.innerHTML = "Please enter a valid 10-digit phone number.";

        result.style.backgroundColor = "#ffcccc";

        result.style.color = "red";

        return;

    }


    // Age Validation

    if (age < 18 || age > 65) {

        result.innerHTML = "Age must be between 18 and 65 years.";

        result.style.backgroundColor = "#ffcccc";

        result.style.color = "red";

        return;

    }


    // Weight Validation

    if (weight < 45) {

        result.innerHTML =
            "Minimum weight requirement is 45 kg. Please consult medical staff.";

        result.style.backgroundColor = "#ffcccc";

        result.style.color = "red";

        return;

    }


    // Haemoglobin Validation

    if (hemoglobin < 12.5) {

        result.innerHTML =
            "Minimum haemoglobin requirement is 12.5 g/dL. Please consult medical staff.";

        result.style.backgroundColor = "#ffcccc";

        result.style.color = "red";

        return;

    }


    // Successful Registration

    result.innerHTML =

        "<h3>Registration Successful!</h3>" +

        "<p>Welcome, " + name + "</p>" +

        "<p>Age: " + age + "</p>" +

        "<p>Blood Group: " + blood + "</p>" +

        "<p>Donor Type: " + type + "</p>" +

        "<p>Weight: " + weight + " kg</p>" +

        "<p>Haemoglobin: " + hemoglobin + " g/dL</p>" +

        "<p>Selected Camp: " + camp + "</p>" +

        "<p>Appointment: " + slot + "</p>" +

        "<p>Please complete medical screening at the camp.</p>";


    result.style.backgroundColor = "#d4edda";

    result.style.color = "green";


    // Clear Form

    document.getElementById("donorForm").reset();

    document.getElementById("campDetails").innerHTML = "";

}
