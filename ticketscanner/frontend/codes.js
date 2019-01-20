(function() {
  "use strict";

  window.addEventListener("load", initialize);
  const URL = "https://afternoon-citadel-95316.herokuapp.com/";
  const PULL_LENGTH = 4; //max length for pull requests.
  const CODE_LENGTH = 16; //Length of codes to be printed. Must be greater than
                                                          //or equal to 6.

  function initialize() {
    let nums = qsa(".num");
    for (let i = 0; i<nums.length; i++) {
      //addColorChange(nums[i]);
      nums[i].addEventListener("click", addChar);
    }
    //addColorChange($("x"));
    $("x").addEventListener("click", delChar);

  //  addColorChange($("enter"));
    $("enter1").addEventListener("click", fetchData);
  }

  //Pulls count ammount of codes from database and sets them to active.
  //Logs error.
  function fetchData() {
    let count = $("code1").innerText;
    console.log(count);
    let params = new FormData();
    params.append("pull", count);
    fetch(URL+"/backend/scanner.php", {method: "POST", mode: "cors", body: params})
    .then(checkStatus)
    .then(JSON.parse)
    .then(displayResult)
    .catch(console.log);
  }

  function displayResult(response) {
    let output = createCodes(response);
    for(let i = 0; i<output.length; i++) {
      let code = document.createElement("p");
      code.innerText = output[i];
      $("output").appendChild(code);
    }

    $("input").classList.add("hidden");
    $("output").classList.remove("hidden");
  }

  //Generates randomized code strings from the response. Returns result in array.
  function createCodes(response) {
    let output = new Array();
    for(let i=0; i<response.codes.length; i++) {
      let index = Math.round(Math.random()*(CODE_LENGTH - 6));
      let code_string = "";
      for(let j=0; j<CODE_LENGTH; j++) {
        if(j == index) {
          code_string += `x${response.codes[i]}x`;
          j+=6;
          continue;
        }
        //48-57;10 , 65-90;26, 97-122;26
        //Random character from 48-90 (0-Z)
        let num = Math.round(Math.random()*62);
        if(num < 10) { //0-9
          code_string += String.fromCharCode(num + 48);
        } else if(num > 36) { //a-z
          code_string += String.fromCharCode(num+60);
        } else { //A-Z
          code_string += String.fromCharCode(num+55);
        }
      }
      output.push(code_string);
    }
    console.log("output");
    return output;

  }

  //Adds given number (0-9) to the code string while the length <= CODE_LENGTH
  function addChar() {
    //updateBtnColor();
    document.body.style.backgroundColor = "white";
    let code = $("code1").innerText;
    if(code.length < PULL_LENGTH)
      $("code1").innerText += this.innerText;
  }

  //Removes the last character in the code string from the code.
  function delChar() {
    let code = $("code1").innerText;
    console.log(`|${code}|`);
    if(code.length != 0) {
      $("code1").innerText = code.substring(0, code.length-1);
      code = $("code1").innerText;
    }
  }

  /*
  * Taken from bestreads assignment
  * Helper function to return the response's result text if successful,
  * otherwise returns the rejected Promise result with an error status and
  * corresponding text.
  * @param {object} response - response to check for success/error
  * @returns {object} - valid result text if response was successful, otherwise
  *                     rejected Promise result
  */
  function checkStatus(response) {
   const OK = 200;
   const ERROR = 300;
   let responseText = response.text();
   if (response.status >= OK && response.status < ERROR
       || response.status === 0) {
     return responseText;
   } else {
     return responseText.then(Promise.reject.bind(Promise));
   }
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

  // Function to download data to a file
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

})();
