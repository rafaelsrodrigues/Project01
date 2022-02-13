var pressButton = document.querySelector("#register");
pressButton.addEventListener("click", function(event) {
    event.preventDefault();


    var form = document.querySelector("#form");
    var trainee = newTrainee(form);
    var validation = ValidateForm (trainee);
    console.log(validation);
    
    if(validation == 0 ){
        document.location='sucess.html';
    }

});

function newTrainee(form) {

    var trainee = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        password: form.password.value,
        birthday: form.birthday.value,
        terms: form.terms
    };

    return trainee;
}

function ValidateForm(trainee){

    var result = 0;
    
  if (validateName(trainee) == true){
    console.log("Name Ok")
  }else{
      result = result +1;
  }
    
    if (validateEmail(trainee) == true){
        console.log("Email Ok")
      }else{
          result = result +1;
      }
    
    if (validatePhone(trainee) == true){
        console.log("Phone Ok")
      }else{
          result = result +1;
      }
    
    if (validatePassword(trainee) == true){
        console.log("Password ok")
      }else{
          result = result +1;
      }
    
    if (validateBirthday(trainee) == true){
        console.log("Date Ok")
      }else{
          result = result +1;
      }
    
    if (validateTerms(trainee) == true){
        console.log("Terms Ok")
      }else{
          result = result +1;
      }

    return result;
    
}

function validateName(trainee){

    var erro = document.querySelector("#error-name");
    if ((trainee.name.length < 4) || trainee.name.indexOf(' ') === -1) {
        erro.textContent="FullName Invalid";
        return false;
    }
    return true;
}

function validateEmail(trainee){

    var erro = document.querySelector("#error-email");

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(trainee.email)) {
        erro.textContent="Email Invalid"
        return false;
    }
    return true;
}

function validatePhone(trainee){

    var erro = document.querySelector("#error-phone");

    if (!/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/g.test(trainee.phone)) {
        erro.textContent="Phone Invalid";
        return false;
    }
    return true;
}

function validatePassword(trainee){

    var erro = document.querySelector("#error-password");

    if (!/^(?=[0-9]{6,9}$)0*[1-9][0-9]{3,}/g.test(trainee.password)) {
        erro.textContent="Password Invalid";
        return false;
    }
    return true;
}

function validateBirthday(trainee){

    var erro = document.querySelector("#error-age");

    if (trainee.birthday.length == 0) {
        erro.textContent="Age Invalid";
        return false;
    }
    return true;
}

function validateTerms(trainee){
    var erro = document.querySelector("#error-terms");

    if (trainee.terms.checked == false) {
        erro.textContent="You must accept the terms";
        return false;
    }
    return true;
}