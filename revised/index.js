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
  //Adds mouseover() event to all objects with .dropdown class.
  function initialize() {
    let donateButton = $("donate-button");
    let rushButton = $("rush-btn");
    let dropdown = qsa(".dropdown");
    for(let i=0; i<dropdown.length; i++) {
      dropdown[i].addEventListener("mouseover", dropdownMenu);
      dropdown[i].addEventListener("mouseout", dropdownMenu);
    }
    //If statements necessary to prevent error when element doesn't exist on a
    //page. The javascript file is used two html pages.
    if(donateButton) {
      donateButton.addEventListener("click", redirect);
    }
    if(rushButton) {
      rushButton.addEventListener("click", rushForm);
    }
  }

  //Redirects page to paypal when donation button is pressed.
  function redirect() {
    //The link is just a placeholder until I get a house link.
    window.location.href = "https://paypal.me/escseller";
  }

  //Redirects page to rush-form.html.
  function rushForm() {
    window.location.href = "rush-form.html";
  }

  //toggles hidden class from inner-dropdown.
  function dropdownMenu() {
    console.log(this.childNodes[2].nextSibling);
    this.childNodes[3].classList.toggle("hidden");
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
