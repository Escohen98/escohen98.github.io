(function() {
  "use strict";

  window.addEventListener("load", initialize);
  const URL = "https://afternoon-citadel-95316.herokuapp.com/?";

  //Begins proccess to acquire image data.
  //Adds click event listener to #singlemember.
  function initialize() {
    fetchData();
    //$("singlemember").addEventListener("click", toggleViews);
  }

  //Fetches from Image API (That's what I am naming it), with parameter name=all
  //checks the status and if sucessful parses the response and sends to another
  //function, otherwise sends error code to be displayed on page.
  function fetchData() {
    console.log("Access: Open.");
    fetch(URL + "name=events", {mode: "cors"})
      .then(checkStatus)
      .then(JSON.parse)
      .then(processImages)
      .catch(printError);
  }

/*  //Fetches from Image API, with parameter type=string. checks the status and if
  //successful sends response to another function, otherwise sends error code to
  //be displayed on page.
  function fetchStringData() {
    fetch(URL + "type=string", {mode : "cors"})
      .then(checkStatus)
      .then(printText)
      .catch(printStringError);
  }*/

  //Intermediate function to allow parameters in function.
  function processImages(response) {
    console.log("Successful fetch.");
    console.log(response);
    imageHandler(response);
  }

  //Creates a div for each element in response["affiliation"] that contains
  //an image of the given person and a <p> element with their full name.
  //Adds div to #images-brother or #images-sweethearts.
  function imageHandler(response) {
    for (let year=0; year<response.length; year++) {
      let title = document.createElement("h2")
      let pics = response[year];
      title.innerText = pics[0];
      let yearBlock = document.createElement("div");
      yearBlock.id = `images-${pics[0]}`;

      for (let i=1; i<pics.length; i++) {
        let imageBlock = document.createElement("div");
        let image = document.createElement("img");
        let pic = pics[i];
        image.src = `./Images/Events/${pics[0]}/${pic}`;
        image.alt = pic;
        image.classList.add("image-person");

        imageBlock.appendChild(image);
        imageBlock.classList.add("div-person");
        imageBlock.classList.add("div-event");
        //imageBlock.addEventListener("click", singleMemberHandler);

        yearBlock.appendChild(imageBlock);
      }
    $("images").appendChild(title);
    $("images").appendChild(yearBlock);
    }
  }

  /*function singleMemberHandler() {
    $("member-portrait").src = this.firstChild.src;
    toggleViews();
  }*/
/*
  //Sets the inner text of #file-names to response.
  function printText(response) {
      sessionStorage.setItem("files", response);
      let files = $("file-names");
      //For the extra credit.
      if(files.innerText != "");
        files.innerText = response;
      files.classList.toggle("hidden");
  }*/

  //Toggles hidden class for #allmembers and #singlemember.
  function toggleViews() {
    $("allmembers").classList.toggle("hidden");
    $("singlemember").classList.toggle("hidden");
    $("member-portrait").classList.toggle("hidden");
    document.querySelector("h1").classList.toggle("hidden");
  }

  //Helper function returns response if successful or a rejection promise if
  //the response code is not between 200 and 300 inclusive. Taken from
  //Trivia Lab
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300 ||
      response.status == 0) {
      return response.text();
    } else {
      return Promise.reject(new Error(response.status + ": " +
        response.statusText));
    }
  }

  //Creates a new p element.
  //Sets innerText of p element to response.
  //Appends p element to #images-brother.
  function printError(response) {
    let errorMsg = document.createElement("p");
    errorMsg.innerText = response;
    //$("images-brothers").appendChild(errorMsg);
  }
/*
  //Creates a new p element.
  //Sets innerText of p element to response.
  //Appends p element to #file-names.
  function printStringError(response) {
    let errorMsg = document.createElement("p");
    errorMsg.innerText = response;
    $("file-names").appendChild(errorMsg);
  }*/

  //Helper function that simplifies importing a single id element.
  function $(id) {
    return document.getElementById(id);
  }

}());
