/* Basic Settings */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
}

/* Header */

header {
    background-color: #c62828;
    color: white;
    padding: 20px;
    text-align: center;
}

nav {
    margin-top: 15px;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 10px;
    font-weight: bold;
}

nav a:hover {
    color: #ffcccc;
}

/* Home Section */

.hero {
    background-color: #ffebee;
    text-align: center;
    padding: 80px 20px;
}

.hero h2 {
    font-size: 35px;
    color: #c62828;
    margin-bottom: 15px;
}

.hero p {
    margin-bottom: 25px;
}

/* Buttons */

.btn {
    display: inline-block;
    background-color: #c62828;
    color: white;
    padding: 12px 25px;
    text-decoration: none;
    border-radius: 5px;
}

.btn:hover {
    background-color: #8e0000;
}

/* Sections */

section {
    padding: 50px 20px;
    text-align: center;
}

section h2 {
    color: #c62828;
    margin-bottom: 25px;
}

/* Cards */

.cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    background-color: white;
    padding: 25px;
    width: 280px;
    border-radius: 10px;
    box-shadow: 0 2px 8px #ccc;
}

.card h3 {
    color: #c62828;
    margin-bottom: 10px;
}

/* Eligibility Section */

.eligibility-box {
    background-color: white;
    max-width: 600px;
    margin: auto;
    padding: 25px;
    border-radius: 10px;
    text-align: left;
    box-shadow: 0 2px 8px #ccc;
}

.eligibility-box p {
    margin: 10px 0;
}

/* Registration Form */

form {
    background-color: white;
    max-width: 500px;
    margin: auto;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 8px #ccc;
    text-align: left;
}

label {
    display: block;
    margin-top: 15px;
    font-weight: bold;
}

input,
select {
    width: 100%;
    padding: 12px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 15px;
}

input:focus,
select:focus {
    outline: none;
    border-color: #c62828;
}

/* Form Button */

form button {
    width: 100%;
    padding: 14px;
    margin-top: 25px;
    background-color: #c62828;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

form button:hover {
    background-color: #8e0000;
}

/* Camp Details */

#campDetails {
    color: #c62828;
    margin-top: 10px;
    font-weight: bold;
}

/* Registration Result */

#result {
    max-width: 500px;
    margin: 20px auto;
    padding: 15px;
    font-weight: bold;
    border-radius: 5px;
}

/* Resources Section */

#resources {
    background-color: #ffebee;
}

/* Footer */

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 25px;
}

/* Responsive Design */

@media screen and (max-width: 600px) {

    nav a {
        display: inline-block;
        margin: 5px;
    }

    .hero h2 {
        font-size: 27px;
    }

    .card {
        width: 100%;
    }

    form {
        padding: 20px;
    }

}
