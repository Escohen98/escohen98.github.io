<?php
  if(!isset($_GET["type"]) || strtolower($_GET["type"]) == "json") {
    if (isset($_GET["name"])) {
      $members;
      $name = strtolower($_GET["name"]);
      if($name == "all") {
        $members = affiliation_handler();
      } else {
        $name = explode($name, "-");
        $members = get_brother($name[0], $name[1]);
      }
    } else {
      print_error("Missing GET parameter: 'name'");
    }
    header("Content-type: application/json");
    echo $members;
  } else if(strtolower($_GET["type"]) == "string") {
      $files = get_files();
      header("Content-type: text/plain");
      echo $files;
  } else {
    print_error("Invalid GET parameter: {$_GET["type"]}");
  }

  //Deals with affiliation parameter case.
  //If param = "brother", function will return a JSON object of Brothers
  //If param = "sweatheart", function will return a JSON object of sweathearts
  //If empty, function will return a JSON object of brothers and Sweathearts
  //Otherwise function will throw an error message.
  function affiliation_handler() {
    $members;
    if(isset($_GET["affiliation"])) {
      $affiliation = $_GET["affiliation"];
      if(strtolower($affiliation) == "brother") {
        $members = get_brothers(false);
      } else if(strtolower($affiliation) == "sweatheart") {
          $members = get_brothers(true);
      } else {
        print_error("Invalid GET parameter: {$affiliation}");
      }
    } else {
      $members = json_encode(
                 array("brothers" => json_decode(get_brothers(false)),
                 "sweathearts" => json_decode(get_brothers(true))));
    }

    return $members;
  }

  //Function taken from section Trivia Game.
  //Prints given message as an invalid request.
  function print_error($msg) {
    header("HTTP/1.1 400 Invalid Request");
    die($msg);
  }

  //Returns a JSON object for a group affiliation to our house; brothers or
  //sweathearts. These objects contain a list of brothers with information about
  //their first and last names and the path to their picture.
  function get_brothers($sweatheart) {
    $glob_dir = "*/*/";
    $brother_dir = "Images/Brothers/";
    $affiliation = "brothers";
    if($sweatheart) {
      $glob_dir .= "*/";
      $brother_dir .= "Sweathearts/";
      $affiliation = "sweathearts";
    }
    $names = array_diff(scandir($brother_dir),
             array('..', '.', 'Sweathearts'));
    $member[$affiliation] = array();

    foreach($names as $name) {
      $name_short = substr(0, strlen($name)-4);
      array_push($member[$affiliation], [$name_short =>
                set_properties($name, $brother_dir, $name_short)]);
    }
    return json_encode($member);
   }

   //Looks through Brothers directory and subdirectory for files with given
   //first and last name. Returns file if a single element exists, otherwise
   //throws error.
   function get_brother($first_name, $last_name) {
     $file_syntax = $first_name . "-" . $last_name;
     $brother_dir = "Images/Brothers/";
     $file = find_match($brother_dir, $file_syntax);
     if($file == "") {
       $brother_dir .= "Sweathearts/";
       $file = find_match($brother_dir, $file_syntax);
       if($file == "") {
         print_error("Invalid GET parameter for name. ");
       }
     }
     return $file;
   }

   //Searches given directory for given file name.
   //Returns the file if it uniquely exists, returns blank string if it does
   //not, and prints an error if there is a duplicate.
   function find_match($brother_dir, $file_syntax) {
     $names = scandir($brother_dir);
     foreach($names as $name) {
       $file;
       if(preg_match("/\b" . $file_syntax . "\b/", $name)) {
         $file = glob($brother_dir . $file_syntax . ".*");
         if(count($file)>1) {
           print_error("Duplicate files in '{$brother_dir}' .");
         }
       }
       $name_short = substr(0, strlen($name)-4);
       return set_properties($name, $brother_dir, $name_short);
     }
     return "";
   }

   //Returns an array of files names of every person who's image is in the directory.
   function get_files() {
     $brother_dir = "Images/Brothers/";
     //$names_brother = array_merge(glob("Images/Brothers/*.jpg"),
      //                glob("Images/Brothers/Sweathearts/*.jpg");
     $names = array_merge(array_diff(scandir($brother_dir),
              array('..', '.', 'Sweathearts'),
              array_diff(scandir($brother_dir . "Sweathearts/"),
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
?>
