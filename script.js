// Camp Information

let camps = {

    "University Campus Camp": {
        date: "20 November 2026",
        time: "10:00 AM - 2:00 PM",
        location: "University Campus",
        slots: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"]
    },

    "Community Hall Camp": {
        date: "25 November 2026",
        time: "9:00 AM - 1:00 PM",
        location: "Community Hall",
        slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"]
    },

    "City Hospital Camp": {
        date: "30 November 2026",
        time: "11:00 AM - 3:00 PM",
        location: "City Hospital",
        slots: ["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"]
    }

};


// Display Selected Camp Details

function showCampDetails() {

    let campName = document.getElementById("camp").value;

    let timeSelect = document.getElementById("appointmentTime");

    timeSelect.innerHTML = '<option value="">Select Time Slot</option>';

    if (campName == "") {

        document.getElementById("campDate").innerHTML = "Not selected";
        document.getElementById("campTime").innerHTML = "Not selected";
        document.getElementById("campLocation").innerHTML = "Not selected";

        return;
    }

    let selectedCamp = camps[campName];

    document.getElementById("campDate").innerHTML = selectedCamp.date;

    document.getElementById("campTime").innerHTML = selectedCamp.time;

    document.getElementById("campLocation").innerHTML = selectedCamp.location;


    // Add Appointment Time Slots

    for (let i = 0; i < selectedCamp.slots.length; i++) {

        let option = document.createElement("option");

        option.value = selectedCamp.slots[i];

        option.text = selectedCamp.slots[i];

        timeSelect.appendChild(option);

    }

}


// Registration Function

function registerDonor() {

    let name = document.getElementById("name").value;

    let age = Number(document.getElementById("age").value);

    let blood = document.getElementById("blood").value;

    let donorType = document.getElementById("donorType").value;

    let phone = document.getElementById("phone").value;

    let camp = document.getElementById("camp").value;

    let appointmentTime = document.getElementById("appointmentTime").value;


    if (name == "" || age == 0 || blood == "" ||
        donorType == "" || phone == "" ||
        camp == "" || appointmentTime == "") {

        alert("Please fill all the fields.");

    }

    else if (age < 18 || age > 65) {

        alert("Age must be between 18 and 65 years.");

    }

    else if (donorType == "First Time Donor" && age > 60) {

        alert("First-time donors should not be above 60 years.");

    }

    else if (!/^[0-9]{10}$/.test(phone)) {

        alert("Please enter a valid 10-digit phone number.");

    }

    else {

        let selectedCamp = camps[camp];

        document.getElementById("result").innerHTML =

            "<h3>Registration Submitted Successfully!</h3>" +

            "<p>Name: " + name + "</p>" +

            "<p>Blood Group: " + blood + "</p>" +

            "<p>Camp: " + camp + "</p>" +

            "<p>Date: " + selectedCamp.date + "</p>" +

            "<p>Location: " + selectedCamp.location + "</p>" +

            "<p>Appointment Time: " + appointmentTime + "</p>";

        alert("Thank you for registering!");

    }

}
