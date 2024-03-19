let team =document.querySelectorAll(".donnees");

team.forEach(function(members){

             members.addEventListener("mouseover", function() {
        
            
            members.classList.add("photo");
            console.log(members);
        });
           
            members.addEventListener("mouseout", function() {
                
            
            members.classList.remove("photo");

            console.log(members);

        });
    });

let myForm = document.querySelector('form');
//console.log(myForm);
let inputFullName = document.getElementById('fullname');
//console.log(inputFullName);
let fullnameError = document.getElementById('fullnameError');
let inputLastName = document.getElementById('lastname');
//console.log(inputLastname);
let lastnameError = document.getElementById('lastnameError');
let inputChoice = document.getElementById('choice');
//console.log(inputChoice);
let choiceError = document.getElementById('choiceError');
let inputEmail = document.getElementById('email');
//console.log(inputEmail);
let emailError = document.getElementById('emailError');
let inputMessage = document.getElementById('message');
//console.log(inputMessage);
let messageError = document.getElementById('messageError');


myForm.addEventListener('submit', function(event){
    event.preventDefault();
   
    let valueFullName = inputFullName.value.trim();
    let valueLastName = inputLastName.value.trim();
    let valueChoice = inputChoice.value;
    let valueEmail = inputEmail.value.trim();
    let valueMessage = inputMessage.value.trim();

    fullnameError.textContent = '';
    lastnameError.textContent = '';
    choiceError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    

// To verify that the name field is not empty
  if (valueFullName === '') {
    fullnameError.textContent = 'Veuillez entrer votre prenom';
    inputFullName.focus();
    return;
  }

//To verify that the lasstname field is not empty
  if (valueLastName === '') {
    lastnameError.textContent = 'Veuillez entrer votre nom';
    inputLastName.focus();
    return;
  }

//To verify that the choice field is not empty
  if ( valueChoice == "") {
    choiceError.textContent = 'Vous devez choisir une option';
    inputChoice.focus();
    return;
  }

// To verify that the email field is not empty
  if (valueEmail === '') {
    emailError.textContent = 'Veuillez entrer votre email';
    inputEmail.focus();
    return;
  }

//To verify that the name field contains two characters
  if (valueFullName.length < 2) {
    // Si el campo de nombre excede los 50 caracteres, mostramos un mensaje de error
    fullnameError.textContent = 'Votre prenom dois etre deus caracteres';
    inputFullName.focus();
    return;
  }

  //To verify that the last field contains two characters
  if (valueLastName.length < 2) {
    // Si el campo de nombre excede los 50 caracteres, mostramos un mensaje de error
    lastnameError.textContent = 'Votre nom doit faire au moins deux caracteres';
    inputLastName.focus();
    return;
  }

//To verify that the text field has 15 characters at hand
  if (valueMessage.length < 15) {
    messageError.textContent = 'Votre message doit comporter au moins 30 caractères';
    inputMessage.focus();
    return;
  }

  //Email validation
  
  let regexMail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  if (!regexMail.test(valueEmail)) { 
    emailError.textContent = 'Lemail saisi nest pas correct';
    return;
}

//If all the fields are correct, send the form and clean it
//alert('Formulaire soumis avec succès');
inputFullName.style.borderColor = 'green';
inputLastName.style.borderColor = 'green';
inputChoice.style.borderColor = 'green';
inputEmail.style.borderColor = 'green';
inputMessage.style.borderColor = 'green';
myForm.reset();

});

