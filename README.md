# Creative Project 2 Project Specification
## Overview
For your second creative project, you will use what we're learning about JavaScript (JS) to
add interactivity a web page using the DOM and event handlers. As a creative project, you have 
freedom to have more ownership in your work, as long as you meet the requirements listed below.

As a reminder, assignments will alternate between creative projects (CPs) and more formal homework
assessments (HWs). We have designed assignments to support each of the 5 modules of this
course, and for creative projects to prepare you for the following HW in each module.

That said, we encourage you to explore the new material covered in class, as well as
related (but optional) content we may link to along the way, as
long as you follow the CSE 154 code quality guidelines. This is your chance to:

1. Continue to build a a websites that you can link to on your resume or code 
   portfolio (CPs can be public, most HWs cannot be).
2. Ask instructors and/or TAs about features you want to learn how to implement (we can
   provide more support for CPs than HWs) and ask for feedback/ideas on Piazza.
3. Apply what you're learning in CSE 154 to projects you are personally interested in and
   may use outside of just a CSE 154 assignment.
4. Optionally showcase your CP work on the CSE 154 Au CP showcase (we'll try to showcase 8-12
   websites per CP).
5. Get feedback on code quality when learning new technologies in CSE 154 to implement for
   the following HW, which will be worth more points.

In past quarters, some students have built upon their creative project each week. You may
choose to do a new website for each CP, or build on a single project, as long as you meet
each CP's requirements.

## Ideas for CP2
As long as you meet the requirements outlined below, you have freedom in what kind of
website you create. Here are some ideas for Autumn 2018 (Your instructors are more than
happy to help discuss more ideas in their office hours!):
* Continue to extend your portfolio page to add interactivity in some way. 
* Write a website to implement drag/drop features.
* Write a to-do list or an option list where you can add or remove items.
* Write something where you add or remove paragraphs or images to/from your page.
* Build a form that adds new features/options based on user input.
* Implement a timeout/interval feature, etc. 
* Write a website to visualize data structures like arrays, lists, or maps.
* Write a website to solve math/science/etc. formulae.
* You might find Section/Lab examples helpful for some inspiration! But your work must be your own - full credit will not be given to submissions that reuse most of the solutions from Section/Lab.

## External Requirements
* Your website must contain at least one page using interactivity to respond to page
  events discussed in class. Specifically, it must:
  1. Respond to an event once after a delay (using `setTimeout`) or repeatedly  (using `setInterval`)
  2. Respond to a page UI event (e.g. changes to a dropdown option or a button click, etc.) or a
     mouse or keyboard event (refer to **Keyboard Events** and **Mouse Events** from
     [here](https://developer.mozilla.org/en-US/docs/Web/Events)). 
* At least one of your event handlers should change the DOM of the page in some way using `document.createElement`, `element.appendChild`, `element.removeChild`, or `element.replaceChild` 
* Functions you add in event handling should be non-trivial, meaning they must be able to change the page or program "state" in response to the event
	* You may have conditions to check whether to change the page/state in different cases for the function, such as whether a game is over.
* Optionally, we also suggest practicing using JS to dynamically modify a `classList` of an element (add/remove a class that is defined in a linked CSS file).
* Make sure to test your webpage UI so that it works properly when a user interacts with page elements - you aren't expected to handle _all_ possible error cases, but part of your grade will come from being able to respond to an user event without an error.
* Tip: You can find a list of some different event types you can listen for 
  [here](https://developer.mozilla.org/en-US/docs/Web/Events) (not comprehensive) and post on 
  Piazza or go to Office Hours if you want to explore those not covered explicitly in class!

## Internal Requirements
* Your project must include the following three files at a minimum:
  * `index.html` - main page of your website
  * `index.css` - file to style your `.html` file
  * `index.js` - containing your JavaScript code 
* When adding interactivity to your website, you should handle any events (like a mouse event, keyboard event, timer, etc.) 
  by responding them using a JavaScript function(s) in your `.js` file. 
* Your `index.js` file should be linked to your `index.html` or other `.html` files using 
   `<script src="...">` in the HTML `<head>`.
* Links to your `.html`,  `.css` and `.js` files should be **relative links**, not absolute. 
* You should not have any JavaScript code in your HTML.
* You should not have any HTML tags as strings in your JavaScript code (e.g. `el.innerHTML = "<p>Foo</p>";`).
* Minimize styling in JS - prefer adding/removing classes to DOM elements instead, and
  style the classes in your CSS.
* Any `.js` code you use must use the module-global pattern (recall the module-global template) and `"use strict";`.
* Your page should have a `window.addEventListener("load", functionName)` as shown in lecture/section/lab (use an appropriate `functionName`).
* Your page should include 
  [school appropriate content](https://courses.cs.washington.edu/courses/cse154/18au/syllabus/conduct.html#content) 
  and [copyrights and citations](https://courses.cs.washington.edu/courses/cse154/18au/syllabus/conduct.html#copyright). 
  If we find plaigarism in CPs or inappropriate content, **you will be ineligible for any points on the CP**. Ask the 
  instructors if you're unsure  if you're work is appropriate.

## Style and Documentation
* Your HTML, CSS, and JavaScript should demonstrate good code quality as demonstrated in class and
  detailed in the [CSE 154 Code Quality Guidelines](https://courses.cs.washington.edu/courses/cse154/18au/resources/styleguide/index.html). 
  Part of your grade will come from using consistent indentation, proper naming conventions, curly brace locations, etc. 
* Place a comment header in each file with your name, section, a brief description of the assignment, and the files contents. Examples: 

    HTML File: 

    ```
<!--
     Name: Mowgli Hovik 
     Date: September 30, 2018
     Section: CSE 154 AB
     This is the index.html page for my portfolio of web development work. It includes links to side 
     projects I have done during CSE 154, including an AboutMe page, a blog template, and 
     a crytogram generator.
-->
    ```

    CSS File: 

    ```
/*
  Name: Mowgli Hovik
  Date: September 30, 2018
  Section: CSE 154 AB
  This is the index.css page for my portfolio of web development work. 
  It is used by all pages in my portfolio to give the site a consistent look and feel. 
*/
    ```

    JS File: 

    ```
/*
 * Name: Mowgli Hovik
 * Date: September 30, 2018
 * Section: CSE 154 AB
 * This is the JS to implement the UI for my cryptogram generator, and generate
 * different types of ciphers from user input.
 */
    ```
* Decompose your JS by writing smaller, more generic functions that complete one task rather than a few larger "do-everything" functions. 
* Localize your variables as much as possible. You should not use any global variables (outside the module pattern) as per the code quality guide. 
* Only use module-global variables whenever absolutely necessary. 
* Use `const` instead of `let` to store constant values (e.g. a file path to your images if
  you are working with many images in your JS).
* Use [JSDoc](http://usejsdoc.org/) to document your JS functions with `@param`, `@returns` as discussed in the Code Quality Guide.
* HTML and CSS files must be well-formed and pass W3C validation. 
  Links to the [Code Validators](https://courses.cs.washington.edu/courses/cse154/18au/resources/index.html#validators)
  can be found on the course website.
* Your JS code must pass [JSLint](https://oxford.cs.washington.edu/cse154/jslint/) with no errors. 
* To keep line lengths manageable, do not place more than one block element on the same line or begin a block element past the 100th character on a line.

## Grading
This CP will be out of 8 points and will likely be distributed as: 
* External Correctness (3 pts) - The external requirements listed in this document are met. 
* Internal Correctness (3 pts) - The internal requirements listed in this document are met. 
* Style and Documentation (2 pts) - The style and documentation requirements in this document are met.  

## Late Day Challenge
You can earn one extra late day if your JavaScript includes both `setInterval` and `setTimeout` appropriately (`setInterval` to repeat a function, `setTimeout` to execute the function exactly once after a delay). These may not execute the same function and the functions must be non-trivial (e.g. it must be possible that your page or module-global JS variables are updated as a result of the function).
