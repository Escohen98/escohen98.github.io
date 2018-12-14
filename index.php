<?php
/*
* Eric Cohen
* Date: November 16, 2018
* Section: CSE 154 AI
* -------------------------------------type------------------------------------
* When sent a GET request, a paremeter 'type' is optionally passed with one
* of two values:
* =======================
*   - type=json (DEFAULT)
*    | returns a JSON object of 'name=all' or 'name={brothername}''
*    | see parameter 'name' for more information
*    | If there are duplicate file names, returns a 400 response.
* =======================
*   - type=string
*    | returns a String containing every file name in the image directory.
*    | If type is passed but does not correspond to one of the available
*    | catergories on the server or there are duplicate
*    | file names, returns a 400 response.
* ------------------------------------name-------------------------------------
* When sent a GET request, a parameter 'name' is required to be passed with one
* of two values:
* =======================
*   - name=all
*    | returns a JSON containing information about every person with an
*    | associated file in the format: 'first-last.*' .
*    | the JSON contains two sub categories: 'Brothers' and 'Sweethearts'
*    | Each sub-category contains every person mentioned above.
*    | Each person holds an array containing the following information:
*      -----------------
*       - first_name
*         | first name of the desired person.
*       - last_name
*         | last name of the desired person.
*       - file
*         | name of the file of the associated image.
*       - path
*         | path to the associated file.
* =======================
*   - name={brothername}
*     | Not yet implemented.
*/
  if(!isset($_GET["type"]) || strtolower($_GET["type"]) == "json") {
    if (isset($_GET["name"])) {
      $members;
      $name = strtolower($_GET["name"]);
      if($name == "all") {
        $members = affiliation_handler();
      } else {
        print_error("Functionality coming soon.");
      }
    } else {
      print_error("Missing GET parameter: 'name'");
    }
    header("Content-type: application/json");
    echo json_encode($members);
  } else if(strtolower($_GET["type"]) == "string") {
      $files = get_files();
      header("Content-type: text/plain");
      echo $files;
  } else {
    print_error("Invalid GET parameter: {$_GET["type"]}");
  }

  //Deals with affiliation parameter case.
  //If param = "brother", function will return a JSON object of Brothers
  //If param = "sweetheart", function will return a JSON object of sweethearts
  //If empty, function will return a JSON object of brothers and Sweethearts
  //Otherwise function will throw an error message.
  function affiliation_handler() {
    $members;
    if(isset($_GET["affiliation"])) {
      $affiliation = $_GET["affiliation"];
      if(strtolower($affiliation) == "brother") {
        $members = get_brothers(FALSE);
      } else if(strtolower($affiliation) == "sweetheart") {
          $members = get_brothers(TRUE);
      } else {
        print_error("Invalid GET parameter: {$affiliation}");
      }
    } else {
      $members = array("brothers" => get_brothers(false),
                 "sweethearts" => get_brothers(true));
    }

    return $members;
  }

  //Returns a JSON object for a group affiliation to our house; brothers or
  //sweethearts. These objects contain a list of brothers with information about
  //their first and last names and the path to their picture.
  function get_brothers($sweetheart) {
    $glob_dir = "*/*/";
    $brother_dir1 = "Images/Brothers/";
    $affiliation = "brothers";
    if($sweetheart) {
      $glob_dir .= "*/";
      $brother_dir1 .= "Sweethearts/";
      $affiliation = "sweethearts";
    }
    $names = array_diff(scandir($brother_dir1),
             array('..', '.', 'Sweethearts'));
    $member = array();

    foreach($names as $name) {
      $name_short = substr($name, 0, strlen($name)-4);
      array_push($member,
                set_properties($name, $brother_dir1, $name_short));
    }
    return $member;
   }

   //Returns an array of files names of every person who's image is in the directory.
   function get_files() {
     $brother_dir3 = "Images/Brothers/";
     $names = array_merge(array_diff(scandir($brother_dir3),
              array('..', '.', 'Sweethearts'),
              array_diff(scandir($brother_dir3 . "Sweethearts/"),
              array('..', '.'))));
     $file_names = "";
     foreach ($names as $name) {
       $file_names .= "{$name} ";
     }
     return $file_names;
   }

   //Creates an array of information about the given file/image name which
   //includes the person's (represented by the file) first name, last name,
   //file name, and path. Returns an associative object.
   function set_properties($name, $directory, $name_short) {
     $components = explode("-", $name_short);
     $properties =
       array (
         "first_name" => $components[0],
         "last_name" => $components[1],
         "file" => $name,
         "path" => $directory,
       );
       return $properties;
   }

   //Function taken from section Trivia Game.
   //Prints given message as an invalid request.
   function print_error($msg) {
     header("HTTP/1.1 400 Invalid Request");
     header("Content-type: text/plain");
     die($msg);
   }
?>
