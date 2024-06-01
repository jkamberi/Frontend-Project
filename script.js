// p3180064 - p3190295
// script.js

function toggleText() {
    var textInput = document.getElementById("OtherMeans");
    var enableTextInput = document.getElementById("OtherMeansText");
    enableTextInput.disabled = !textInput.checked;
    if(!OtherMeans.checked){
        OtherMeansText.value ="";
    }
}

function resetQuestionaire(){
    document.getElementById("detailsHere").removeAttribute("open");
}

function showEmailError(){
    var emailin = document.getElementById("Email");

    if (!emailin.value.includes('@')){
        emailin.setCustomValidity("Do not forget the @ symbol")
    }
    else if (emailin.validity.typeMismatch){
        emailin.setCustomValidity("check again");
    } else {
        emailin.setCustomValidity("");
    }
}

var passLocker = false;
document.getElementById("form").addEventListener("submit", function(event){
    var pass1 = document.getElementById("Password").value;
    var pass2 = document.getElementById("ConfirmPassword").value;
    var printError = document.getElementById("PassError");

    if (pass1 !== pass2){
        printError.innerHTML = "Passwords are not the same";
        passLocker = true;
        event.preventDefault();
    } else {
        printError.innerHTML = "";
        passLocker = false;
    }
});
var ageLocker = false;
function checkAge () {
    var ageIn = document.getElementById("DateBirth").value;
    var ageFake = new Date(ageIn);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - ageFake.getFullYear();
    if (currentDate.getMonth() < ageFake.getMonth() || (currentDate.getMonth() === ageFake.getMonth() && currentDate.getDate() < ageFake.getDate())) {
        age--;
    }
    if (age < 18) {
        document.getElementById("noLegalAge").innerHTML = "You are TOO young to join us...";
        document.getElementById('submitButton').disabled = true;
        ageLocker = true;
    } else {
        document.getElementById("noLegalAge").innerHTML = "";
        document.getElementById("submitButton").disabled = false;
        ageLocker = false;
    }
}

document.getElementById("submitButton").addEventListener("mouseover", function(){
    if (passLocker){
        var passBox = document.getElementById("Password");
        passBox.focus();
    }
    if (ageLocker){
        var agePosition = document.getElementById("DateBirth");
        var rect = agePosition.getBoundingClientRect();
        window.scrollTo({
            top: window.scrollY + rect.top - 20,
            behavior: 'smooth'
        });
    }
});

var detailsLocker = true;
document.getElementById("detailsHere").addEventListener("click", function(){
    detailsLocker = false;
})
document.getElementById("submitButton").addEventListener("click", function(event){
    if (detailsLocker){
        alert("Please consider filling our Questionaire on <<Click here to improve our services>>");
        detailsLocker = false;
        event.preventDefault();
    }
})