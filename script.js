const UserName = document.querySelector(".UserName");
const Email = document.querySelector(".Email");
const pass = document.querySelector("#pass");
const ConPass = document.querySelector("#conPass");
const PhoneNumber = document.querySelector(".phone");
const form = document.forms[0];


form.addEventListener('submit' , ValidateForm);
function ValidateForm(e){
    e.preventDefault();

    ElementValidator();
}

function ElementValidator(){
    const nomUtulisateurV =  UserName.value.trim();
    const emailV =  Email.value.trim();
    const phoneV = PhoneNumber.value.trim();
    const passV =  pass.value.trim();
    const conPassV =  ConPass.value.trim();

    // User name verfy :
    if(nomUtulisateurV === ""){
        const message = `NomUtulisateure obligatoire`;
        SetErreur(UserName , message);
    }else if(!nomUtulisateurV.match(/^[A-Za-z]/)){
        message = "NomUtulisateure il doive prend un carractére oudibut";
        SetErreur(UserName , message);
    } else{
        if(nomUtulisateurV.length < 3){
            message = "Il doive ou moin 3 caractére";
            SetErreur(UserName , message);
        }else{
            SetSuccess(UserName);
        }
    }

    // Email verfy :
    if(emailV === ""){
        message = "Email obligatoire";
        SetErreur(Email , message);
    }else if(!verfayEmail(emailV)){
        message = "le format d'email est incorrecte";
        SetErreur(Email , message);
    }
    else{
        SetSuccess(Email);
    }

    //Phone number verfy :
    if(phoneV === ""){
        message = "Numére de telephone obligatoire"
        SetErreur(PhoneNumber , message);
    }
    else if(!phoneV.match(/^[0-9]{10}/)){
        message = "le numuro est incorrecte";
        SetErreur(PhoneNumber , message);
    }
    else{
        SetSuccess(PhoneNumber);
    }

    //Password verfy :
    if(passV === ""){
        message = "Mot de passe obligatoire";
        SetErreur(pass , message);
    }
    else if(!verfayPassword(passV)){
        message ="Mot de passe plus faible";
        SetErreur(pass , message);
    }
    else{
        SetSuccess(pass);
    }

    // Confiramtion Password : 
    if(conPassV === ""){
        message ="confirmation Obligatoire";
        SetErreur(ConPass , message);
    }
    else if(conPassV !== passV){
        message = "La confirmation et incorrect";
        SetErreur(ConPass , message);
    }
    else{
        SetSuccess(ConPass);
    }
    
}


// ------ la fontion qui donne un style dans le cas d'erreure : --------------
function SetErreur(elem , message){
    const formControl = elem.parentElement;
    const span = formControl.querySelector('span');

    // chager le contenu du message d'erreur :
    span.innerText = message;
    // afficter la classe errure a l'element parent pour pratiquer les style de css pour l'erreur :
    formControl.className = "form-control erreur";
}

// ------- la fonction qui donne un style dans le cas success : -------------
function SetSuccess(elem){
    const formControl = elem.parentElement;
    // En va ajouter la class success à l'element parent pour pratiquer les style de css pour le cas success :
    formControl.className = "form-control success";
}

// -------- la fonction pour firifier le contenu d'email : ------------
function verfayEmail(email){
    return /^[a-z0-9_.-]+@[a-z0-9_.-]{2,}\.[a-z]{2,4}$/.test(email);
}
// ------- la fonction pour valider le chemp du password : ------------
function verfayPassword(password){
    return/^(?=.*[0-9])(?=.*[#@!$%^&*])[a-zA-Z0-9#@!$%^&*]{8,20}$/.test(password);
}