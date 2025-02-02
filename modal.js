function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");
const submitBtn = document.querySelector(".btn-submit");
const form = document.getElementById("reserve");
const closeBtn = document.getElementById("closeBtn");
const messageConfirmation = document.getElementById("messageConfirmation");

const heroSection = document.querySelector(".hero-section");
let formConfirmation = false;

// variable mobile media query
let mediaQueryMobile = window.matchMedia("(max-width: 480px)");

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  // si ecran mobile, heroSection ne s'affiche pas
  if (mediaQueryMobile.matches) {
    heroSection.style.display = "none";
  }
}

// fermeture du formulaire
function closeModal() {
  modalbg.style.display = "none";
  if (mediaQueryMobile.matches) {
    heroSection.style.display = "block";
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.forEach((close) => close.addEventListener("click", closeModal));

// message de confirmation et bouton fermer pas affiché
closeBtn.style.display = "none";
messageConfirmation.style.display = "none";

// fonction pour checker les champs du formulaire, si incorrects, un message d'erreur s'affiche
function inputsChecker() {
  const first = document.querySelector("#first"); // DOM Elements champs du formulaire
  const firstError = document.getElementById("firstError"); // DOM Elements Error messages
  const verifName = /^[A-Za-z]+$/;
  if (
    first.value == null ||
    !first.value.match(verifName) ||
    first.value.length < 2
  ) {
    firstError.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    firstError.style.color = "red";
    firstError.style.fontSize = "12px";
    first.style.borderColor = "red";
    first.style.borderWidth = "2px";
    return formConfirmation === false;
  } else {
    firstError.style.display = "none";
    first.style.borderColor = "green";
    first.style.borderWidth = "2px";
  }

  const last = document.querySelector("#last"); // DOM Elements champs du formulaire
  const lastError = document.getElementById("lastError"); // DOM Elements messages d'erreurs
  if (
    last.value == null ||
    !last.value.match(verifName) ||
    last.value.length < 2
  ) {
    lastError.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    lastError.style.color = "red";
    lastError.style.fontSize = "12px";
    last.style.borderColor = "red";
    last.style.borderWidth = "2px";
    return formConfirmation === false;
  } else {
    lastError.style.display = "none";
    last.style.borderColor = "green";
    last.style.borderWidth = "2px";
  }

  const email = document.querySelector("#email"); // DOM Elements champs du formulaire
  const emailError = document.getElementById("emailError"); // DOM Elements Error messages
  let verifEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value == null || !email.value.match(verifEmail)) {
    emailError.textContent = "L'adresse mail n'est pas valide.";
    emailError.style.color = "red";
    emailError.style.fontSize = "12px";
    email.style.borderColor = "red";
    email.style.borderWidth = "2px";
    return formConfirmation === false;
  } else {
    emailError.style.display = "none";
    email.style.borderColor = "green";
    email.style.borderWidth = "2px";
  }

  const birthdate = document.querySelector("#birthdate"); // DOM Elements champs du formulaire
  const birthdateError = document.getElementById("birthdateError"); // DOM Elements Error messages
  if (!birthdate.value) {
    birthdateError.textContent =
      "Veuillez entrer une date de naissance valide.";
    birthdateError.style.color = "red";
    birthdateError.style.fontSize = "12px";
    birthdate.style.borderColor = "red";
    birthdate.style.borderWidth = "2px";
    return formConfirmation === false;
  } else {
    birthdateError.style.display = "none";
    birthdate.style.borderColor = "green";
    birthdate.style.borderWidth = "2px";
  }

  const quantity = document.querySelector("#quantity"); // DOM Elements champs du formulaire
  const quantityError = document.getElementById("quantityError"); // DOM Elements Error messages
  if (quantity.value === "") {
    quantityError.textContent = "Ce champ ne peut pas être vide.";
    quantityError.style.color = "red";
    quantityError.style.fontSize = "12px";
    quantity.style.borderColor = "red";
    quantity.style.borderWidth = "2px";
    return formConfirmation === false;
  } else {
    quantityError.style.display = "none";
    quantity.style.borderColor = "green";
    quantity.style.borderWidth = "2px";
  }

  const city = document.getElementsByName("location"); // DOM Elements champs du formulaire
  const cityError = document.getElementById("locationError"); // DOM Elements Error messages
  if (
    !(
      city[0].checked ||
      city[1].checked ||
      city[2].checked ||
      city[3].checked ||
      city[4].checked ||
      city[5].checked
    )
  ) {
    cityError.textContent = "Veuillez choisir une option";
    cityError.style.color = "red";
    cityError.style.fontSize = "12px";
    return formConfirmation === false;
  } else {
    cityError.style.display = "none";
    city.style = "default";
  }

  const condition = document.querySelector("#checkbox1");
  const conditionError = document.getElementById("conditionError"); // DOM Elements Error messages
  if (!condition.checked) {
    conditionError.textContent =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
    conditionError.style.color = "red";
    conditionError.style.fontSize = "12px";
    condition.style.borderColor = "red";
    condition.style.borderWidth = "3px";
    return formConfirmation === false;
  } else {
    conditionError.style.display = "none";
    condition.style = "default";
  }
  return (formConfirmation = true);
}

// fonction pour vérifier que le formulaire est correcte, si oui, affichage du message de confirmation + stockage des données
function formValidation(event) {
  inputsChecker();
  event.preventDefault();
  if (formConfirmation === true) {
    form.style.display = "none";
    messageConfirmation.style.fontSize = "30px";
    messageConfirmation.style.textAlign = "center";
    closeBtn.style.display = "block";
    submitBtn.style.display = "none";
    messageConfirmation.style.display = "flex";
    closeBtn.addEventListener("click", closeModal);
    // stockage des données dans localStorage
    localStorage.setItem("first", document.querySelector("#first").value);
    localStorage.setItem("last", document.querySelector("#last").value);
    localStorage.setItem("email", document.querySelector("#email").value);
    localStorage.setItem(
      "birthdate",
      document.querySelector("#birthdate").value
    );
    localStorage.setItem("quantity", document.querySelector("#quantity").value);
    localStorage.setItem(
      "city",
      document.querySelector("input[name='location']:checked").value
    );
    localStorage.setItem(
      "condition",
      document.querySelector("#checkbox1").value
    );

    // affichage des données dans la console
    console.log(document.querySelector("#first").value);
    console.log(document.querySelector("#last").value);
    console.log(document.querySelector("#email").value);
    console.log(document.querySelector("#birthdate").value);
    console.log(document.querySelector("#quantity").value);
    console.log(document.querySelector("input[name='location']:checked").value);
    console.log(document.querySelector("#checkbox1").value);
    return true;
  }
}

// event au clique sur le boutton "C'est parti" qui appele la fonction pour la vérification du formulaire
form.addEventListener("submit", formValidation);
