function validationName(name){
    const regex= /^[A-Za-z\s]+$/;
    if(name.trim() === ""){
        return "Name Cannot be Empty";
    }
    if(!regex.test(name)) {
        return "Name can only contain letter and spaces";
    }
    return "Name is valid";
}

function validationEmail(email){
    const regex= /^[a-zA-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,}$/;
    if(email.trim() === ""){
        return "Email Cannot be Empty";
    }
    if(!regex.test(email)) {
        return "Invalid email format";
    }
    return "Email is valid";
}

function validationPassword(password){
    const regex= /^(?=.*[A-Z])(?=.*\d).(8,)$/;
    if(password.trim() === ""){
        return "Password Cannot be Empty";
    }
    if(!regex.test(password)) {
        return "Password must be at least 8 character long,contains an uppercase letter,and a number";
    }
    return "Password is valid";
}

function validationPhone(phone){
    const regex= /^[0-9]{10}$/;
    if(phone.trim() === ""){
        return "Phone Number Cannot be Empty";
    }
    if(!regex.test(phone)) {
        return "Phone Number must be 10 digit long";
    }
    return "Phone Mumber is valid";
}

function validateForm(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
} 

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const phoneError = validatePhone(phone);

    if(nameError === "Name is valid" && emailError === "Email is valid" && passwordError === "Password is valid" && phoneError === "Phone number is valid"){
        return true;
    }
    else{
    document.getElementById("nameError").innerText = nameError === "Name is valid" ? "" :nameError;
    document.getElementById("emailError").innerText = emailError === "Email is valid" ? "" :emailError;
    document.getElementById("passwordError").innerText = passwordError === "Password is valid" ? "" :passwordError;
    document.getElementById("phoneError").innerText = phoneError === "Phone Number is valid" ? "" :phoneError;
    return false;
}