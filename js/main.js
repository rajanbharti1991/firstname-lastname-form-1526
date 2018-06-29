function validate() {
    
    let fullname = document.getElementById("fname").value,
        email = document.main_form.u_email.value,
        message = document.main_form.message.value,
        btn = document.main_form.btn,
        main_form = document.forms["main-form"],
        mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;


    let data = {};
    let err = [];

    //Check for fullname
    if (fullname !== (null || "")) {
        data.fn = fullname;
    } else {
        err.push("Please enter fullname");
    }

    //Check for email
    if (email !== (null || "")) {

        if (mailformat.test(email)) {
            data.em = email.toLocaleLowerCase();
        } else {
            err.push("Invalid email");
        }

    } else {
        err.push("Please enter email");
    }

    //Check for message
    if (message !== (null || "")) {
        data.mg = message;
    } else {
        err.push("Please enter message");
    }

    if (err.length > 0) {
        console.log("ERRORS");
        console.log(err);
    } else {
        console.log("COLLECTED DATA");
        console.log(data);
        main_form.reset();
    }

}

btn.addEventListener("click", validate);
