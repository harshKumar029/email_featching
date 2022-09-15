function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "harshanand029@gmail.com",
//                 password is none for security resion
        Password: "none",
        To: 'harsh.20scse1040084@galgotiasuniversity.edu.in',
        From: document.getElementById("email").value,
        Subject: "New Contact Form Enquiry",
        Body: "Name: " + document.getElementById("name").value
            + " <br> Email: " + document.getElementById("email").value
            + " <br> Phone no: " + document.getElementById("phone").value
            + " <br> Message: " + document.getElementById("message").value
            + " <br> img" + document.getElementById("imgdiv").value
    }).then(
        message =>alert(message)
    );
    // .then(function (message) {
    //     alert("mail sent successfully")
    // });
}