function sendit() {
    let email = document.getElementById("email").value;
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let icon = document.getElementById("icon-alert");
    let message = document.getElementById("alert-message");


    if(email.match(pattern)) {
        message.innerHTML = "Thank you for submitting your email!"
        message.classList.add("block")
    } else {
        icon.classList.add("block")
        message.classList.add("block")
    
    }
}