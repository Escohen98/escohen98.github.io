# Creative Project 1 Project Specification
## Overview
For your first creative project, you will use what we're learning about HTML and CSS to
make a simple website with at least two HTML pages, both linked to one or more CSS files.
As a creative project, you have the freedom to have more ownership in your work, as long
as you meet the requirements below.

As a reminder, assignments will alternate between creative projects (CPs) and more formal homework
assessments (HWs). We have designed assignments to support each of the 5 modules of this
course, and for creative projects to prepare you for the following HW in each module.

That said, we encourage you to explore the new material covered in class, as well as
related (but optional) content we may link to along the way (e.g. CSS3 animations), as
long as you follow the CSE 154 code quality guidelines. This is your chance to:

1. Build websites that you can link to on your resume or code portfolio (CPs can be
   public, most HWs cannot be).
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
each CP requirements (note that you do not need to meet any CP1 requirements in later
CPs).

## Ideas for CP1
As long as you meet the requirements outlined below, you have freedom in what kind of
website you create. Here are some ideas for Autumn 2018 (Your instructors are more than
happy to help discuss more ideas in their office hours!):
* Extend your AboutMe page.
* Turn your current resume into a webpage (make sure you still have a second HTML page to
  link to that resume).
* Implement a simple website for an RSO club you're in.
* Write a website for a friend/family member.
* Write a website with facts on your favorite animal/hobby/topic.
* Write a website with a few of your favorite recipes.
* Write a "tutorial" website on the basics of HTML/CSS given what you're learning
  (teaching is a great way to reinforce what you're learning!).
* Start a blog website, perhaps documenting what you're learning this quarter in one of
  your classes.
* Showcase any work about a hobby you may have (art, 3D printing, sports, travel, etc.)
* Check out your TA's AboutMe pages for some more inspiration!

## External Requirements
* Your website must contain at least two pages that are "linked together" - in other words you can use a link to get from one page to another, and a link to get back to the first page. 
* The whole website should have a stylistic “theme” that cohesively connects the pages together. There can be some differences between the different pages, but the reader of your site should be able to tell these are connected. 
* Your page should include [school appropriate content](https://courses.cs.washington.edu/courses/cse154/18au/syllabus/conduct.html#content) and [copyrights and citations](https://courses.cs.washington.edu/courses/cse154/18au/syllabus/conduct.html#copyright). If we find plaigarism in CPs 
or inappropriate content, **you will be ineligible for any points on the CP**. Ask the instructors if you're unsure  if you're work is appropriate.

## Internal Requirements
* Your project must include the following three files at a minimum: 
  *  `index.html` (this file name is required) and one other `.html` file (you can choose the filename) that are linked together (with an `<a>` tag that will count towards your 10 tags in the requirement listed below).
  *  an `index.css` file. 
* You must link `index.css` to `index.html` and your other html page to style the your HTML pages with your consistent look and feel. 
* Links to **your** `.html` and `.css` files should be **relative links**, not absolute. 
* Do not express style information in the HTML, such as inline styles or presentational HTML tags such as b or font. 
* You must use at least 10 different types of HTML tags total (any tag excluding `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>` will qualify towards this count) in your `index.html` and other HTML page in your site. 
  * Suggestion: Refer to [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) for a comprehensive list of different HTML tags, and post on Piazza if you have any questions about any! 
  * You may use ones we haven't talked about in lecture, since there are many more that we could possibly cover in class (ask on Piazza or office hours if you have questions about new tags!).
  * Do not use any deprecated HTML tags listed on [this page](http://www.tutorialspoint.com/html5/html5_deprecated_tags.htm). 
  * At least two of the 10 tags should be semantic tags listed under "HTML Layout Elements in More Detail" [here](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure#HTML_layout_elements_in_more_detail)
  * At least one of your HTML tags should be an inline element (see the Inline section [here] (https://www.w3schools.com/html/html_blocks.asp))
* `index.css` must have at least 5 different CSS selectors. Refer to [this page](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Selectors) for a CSS reference of selectors. 
* `index.css` must apply at least 10 different CSS rules to content in `index.html`
* Note: You _may_ use a framework such as Bootstrap to help with your styling and helpful responsive layout features, however you must still meet all of the above requirements and demonstrate that you understand the key concepts of how the HTML and CSS work. Any framework code _will not count_ towards HTML/CSS requirements (e.g. if you use the Bootstrap "container" class in your HTML, you cannot count the CSS implementation the bootstrap.css file towards the CSS requirements), however you can add new (not duplicate) CSS for this class to `index.css`. You are not allowed to use any template HTML files for frameworks (this defeats the purpose of writing HTML and CSS from scratch in this first assignment).
  * Don't know what any of that means but want to learn how to use a CSS framework? Ask
    about them in office hours!

## Style and Documentation
* Your HTML and CSS should demonstrate good code quality 
  * This is demonstrated in class and detailed in the [CSE 154 Code Quality Guidelines](https://courses.cs.washington.edu/courses/cse154/18au/resources/styleguide/index.html), which can be found as a link off the course home page. 
  * Part of your grade will come from using consistent indentation, proper naming conventions, curly brace locations, etc. 
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

  * HTML and CSS files must be well-formed and pass W3C validation (this will be graded). 
    * The links to the [Code Validators](https://courses.cs.washington.edu/courses/cse154/18au/resources/index.html#validators) can be found in the side bar of the main page of the course website.  
  * To keep line lengths manageable, do not place more than one block element on the same line or begin a block element past the 100th character on a line.

## Grading
Grading for Creative Projects are lighter as this is your chance to explore and learn without the overhead of 
having to match strict external requirements. Our goal is to give you feedback, particularly on the internal
requirements and style and documentation, so you can incorporate this feedback in your homework assignments which 
will be worth more towards your final grade.  

This CP will be out of 8 points and will likely be distributed as: 
* External Correctness (2 pts) - The external requirements listed in this document are met. 
* Internal Correctness (3 pts) - The external requirements listed in this document are met. 
* Style and Documentation (3 pts) - The style and documentation requirements in this document are met.  

## Late Day Challenge
You can earn one extra late day if your website also includes a 404.html page. 
In order to receive your extra late day this page must meet the following requirements: 

* Your site must already contain the two required pages listed in the External Requirements section above. 
* Your 404 page must be in keeping with the theme of your site and also include school appropriate content. 

