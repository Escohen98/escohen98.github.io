/*
Eric Cohen
Date: October, 3, 2018
Section: CSE 154 AI

This is the index.js page for my web development portfolio and my Fraternity's
website. It is used to give functionality to my rush form, rush-form.html,
as well as the donate button on the front page.
*/

(function() {
  "use strict";

  //Makes sure that the webpage loads before executing JavaScript
  window.addEventListener("load", initialize);

  //Runs after page is loaded. If statements are present to prevent typeError.
  function initialize() {
    let donateButton = $("donate-button");
    let radioLegacy = qsa("input[name='legacy']");
    let rushSubmit = $("rush-submit");
    //If statements necessary to prevent error when element doesn't exist on a
    //page. The javascript file is used two html pages.
    if(donateButton)
    donateButton.addEventListener("click", redirect);
    if(radioLegacy[0])
    radioLegacy[0].addEventListener("change", toggleLegacyTimeout);
    if(radioLegacy[1])
    radioLegacy[1].addEventListener("change", toggleLegacyTimeout);
    if(rushSubmit)
    rushSubmit.addEventListener("click", submitForm);
  }

//Redirects page to paypal when donation button is pressed.
  function redirect() {
    //The link is just a placeholder until I get a house link.
    window.location.href = "https://paypal.me/escseller";
  }
//Inermediate function to set a delay for toggleLegacy()
  function toggleLegacyTimeout() {
    setTimeout(toggleLegacy, 1000);
  }
//Unhides legacy-toggle textarea when the 'yes' radio button is selected.
//Hides the legacy-toggle button whenever else.
  function toggleLegacy() {
    let radioInputs = qsa("input[name='legacy']");
    if(radioInputs[0].checked) {
      $("legacy-toggle").classList.remove("hidden");
    } else if(radioInputs[1].checked){
      $("legacy-toggle").classList.add("hidden");
    }
  }

  //Executed after the submit button is clicked. Calls on setFormMap() to
  //retrive form elements and to make sure everything is filled out.
  //If everything is filled out, the function will hide the form and show a
  //response message.
  function submitForm() {
    const form = qsa('form-element');
    //let formDataMap = new Map();
    let formDataMap = setFormMap();
    if(formDataMap) {
      qs('form').classList.add("hidden");
      let response = document.createElement("p");
      let textNode = document.createTextNode(
        "Thank you for your response. We will contact you soon.");
      response.classList.add("center-text");
      response.id = "submit-response-size";
      response.appendChild(textNode);
      qs("main").appendChild(response);
    }
  }

  //Retrieves all form elements and enters them into a map.
  function setFormMap() {
    let formMap = new Map();
    const ERR_STRING = "Please fill out the entire form.";

    let data = [$('name-input-field'), $('year-in-school'),
     $('hometown-input-field'), $('phone-input-field'),
     qs('input[name="legacy"]:checked')];

     console.log(data);

     if(!data[4]) {
       alert(ERR_STRING);
       return null;
     }

     formMap.set(data[0].name, data[0].innerText);
     formMap.set(data[1].name, data[1].options[ data[1].selectedIndex ].value);
     formMap.set(data[2].name, data[2].innerText);
     formMap.set(data[3].name, data[3].innerText);
     formMap.set(data[4].name, data[4].value);

    if(formMap.get("legacy"))
      formMap.set($('legacy-chapter').name, $('legacy-chapter').innerText);

    for(let x in formMap.values()) {
      if(!x || x=="")
        return null;
    }
    return formMap;
  }

  //Retrieved functions from CSE 154 Template
  //Simplifies importing elements
  function $(id) {
    return document.getElementById(id);
  }

  //Simplifies importing multiple elements
  function qsa(query) {
    return document.querySelectorAll(query);
  }

  //Simplifies importing class or semantic elements
  function qs(query) {
    return document.querySelector(query);
  }

})();
