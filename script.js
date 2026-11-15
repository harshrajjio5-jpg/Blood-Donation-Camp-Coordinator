// Camp Information
let camps = {

    university: {
        date: "20 November 2026",
        time: "10 AM - 2 PM",
        location: "University Campus",
        slots: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"]
    },

    community: {
        date: "25 November 2026",
        time: "9 AM - 1 PM",
        location: "Community Hall",
        slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"]
    },

    hospital: {
        date: "30 November 2026",
        time: "11 AM - 3 PM",
        location: "City Hospital",
        slots: ["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"]
    }

};


// Display Selected Camp Details
function showCampDetails() {

    let selectedCamp = document.getElementById("camp").value;

    let details = document.getElementById("campDetails");

    let timeSlot = document.getElementById("appointmentTime");

    timeSlot.innerHTML = '<option value="">Select Time Slot</option>';

    if (selectedCamp == "") {

        details.innerHTML = "";

        return;

    }

    let camp = camps[selectedCamp];

    details.innerHTML =
        "<p><b>Date:</b> " + camp.date + "</p>" +
        "<p><b>Camp Time:</b> " + camp.time + "</p>" +
        "<p><b>Location:</b> " + camp.location + "</p>";

    // Add Time Slots
    for (let i = 0; i < camp.slots.length; i++) {

        let option = document.createElement("option");

        option.value = camp.slots[i];

        option.text = camp.slots[i];

        timeSlot.appendChild(option);

    }

}


// Donor Registration Function
function registerDonor() {

    let name = document.getElementById("name").value.trim();

    let age = Number(document.getElementById("age").value);

    let bloodGroup = document.getElementById("bloodGroup").value;

    let donorType = document.getElementById("donorType").value;

    let phone = document.getElementById("phone").value.trim();

    let campName = document.getElementById("camp").value;

    let appointmentTime = document.getElementById("appointmentTime").value;

    let result = document.getElementById("result");


    // Check Empty Fields
    if (
        name == "" ||
        age == 0 ||
        bloodGroup == "" ||
        donorType == "" ||
        phone == "" ||
        campName == "" ||
        appointmentTime == ""
    ) {

        alert("Please fill all the fields.");

        return;

    }


    // Age Validation
    if (age < 18 || age > 65) {

        alert("Please check the official eligibility guidelines and consult medical staff.");

        return;

    }


    // Phone Number Validation
    if (!/^[0-9]{10}$/.test(phone)) {

        alert("Please enter a valid 10 digit phone number.");

        return;

    }


    // Get Camp Information
    let camp = camps[campName];


    // Display Registration Details
    result.innerHTML =

        "<h3>Registration Successful!</h3>" +

        "<p><b>Name:</b> " + name + "</p>" +

        "<p><b>Age:</b> " + age + "</p>" +

        "<p><b>Blood Group:</b> " + bloodGroup + "</p>" +

        "<p><b>Donor Type:</b> " + donorType + "</p>" +

        "<p><b>Phone:</b> " + phone + "</p>" +

        "<p><b>Camp Date:</b> " + camp.date + "</p>" +

        "<p><b>Camp Location:</b> " + camp.location + "</p>" +

        "<p><b>Appointment Time:</b> " + appointmentTime + "</p>" +

        "<p>Please contact the camp organizers for actual appointment confirmation.</p>";

}
