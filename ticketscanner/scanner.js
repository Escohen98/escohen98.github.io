(function() {
  "use strict";

  window.addEventListener("load", initialize);
  const CODE_LENGTH = 4;

  //Adds event listeners to specified buttons.
  function initialize() {
    let nums = qsa(".num");
    for (let i = 0; i<nums.length; i++) {
      addColorChange(nums[i]);
      nums[i].addEventListener("click", addChar);
    }
    addColorChange($("x"));
    $("x").addEventListener("click", delChar);

    addColorChange($("enter"));
    $("enter").addEventListener("click", fetchData);
  }

  function fetchData() {
    updateBtnColor();
    let code = $("code").innerText;
    let test = Math.round(Math.random());
    if(code.length == 4) {
      if(test==0) {
        displayResult(true);
      } else {
        displayResult(false);
      }
    }
  }

    // Displays success image for 1/2 a second and plays a success sound
    // after code is validated as
    // active and exists in database (if result == true) otherwise displays
    // error image and plays fail sound.
    function displayResult(result) {
      let element = "error";
      let file = "bad-beep.wav";
      document.body.style.backgroundColor = "red";
      if(result) {
        element = "success";
        file = "success.wav";
        document.body.style.backgroundColor = "green";
      }
      let timer = null;
      timer = setTimeout(function() {
        console.log(element + ": " + $(element).classList);
        $("code").innerText = "";
      }, 1000);

      let audio = new Audio(`./audio/${file}`);
      audio.play();
      $(element).classList.remove("hidden");
    }

    //Adds given number (0-9) to the code string while the length <= CODE_LENGTH
    function addChar() {
      updateBtnColor();
      $("success").classList.add("hidden");
      $("error").classList.add("hidden");
      document.body.style.backgroundColor = "white";
      let code = $("code").innerText;
      if(code.length < CODE_LENGTH)
        $("code").innerText += this.innerText;
    }

    //Removes the last character in the code string from the code.
    function delChar() {
      updateBtnColor();
      let code = $("code").innerText;
      console.log(`|${code}|`);
      if(code.length != 0) {
        $("code").innerText = code.substring(0, code.length-1);
        code = $("code").innerText;
      }
      console.log(`|${code}|`);
    }

  //Adds mousedown and mouseup events to given button to change the color
  //when pressed.
  function addColorChange(btn) {
    btn.addEventListener("mousedown", function() {this.style.backgroundColor =
                                                  "blue";});
    btn.addEventListener("mouseup", function() {this.style.backgroundColor =
                                                "#DBDBDB";});
  }

  //Changes the color of the element that called on the function to
  //gray if it's blue, otherwise turns it gray.
  function changeColor() {
    if(this.style.backgroundColor == "blue" ) {
      this.style.backgroundColor = "#DBDBDB";
    } else {
      this.style.backgroundColor = "blue";
    }

  }

  //Makes sure all buttons are set to default.
  //Redundant but necessary.
  function updateBtnColor() {
    let btns = qsa("button");
    for(let i = 0; i<btns.lenght; i++) {
      if(btns[i].style.backgroundColor == "blue" ) {
        btns[i].style.backgroundColor = "#DBDBDB";
      }
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

})();
