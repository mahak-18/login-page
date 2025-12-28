function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user === "" || pass === "") {
        document.getElementById("message").innerHTML =
            "Please fill all fields";
    } else if (user === "admin" && pass === "1234") {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerHTML =
            "Login Successful!";
    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML =
            "Invalid Username or Password";
    }
}
