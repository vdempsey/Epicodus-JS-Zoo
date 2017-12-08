# Epicodus-JS-Zoo

#### _Enter/View animals in a Zoo database application, December 8, 2017_


#### By _**Valia Dempsey**_



## Description

_This is an application which allows a zoo employee enter a new animal and view the list of existing animals in database with the ability to filter the results by age of animals. The employess also has the ability to edit information for existing animals, as well as remove animals from the database._


## Setup/Installation Requirements

  ### Required:
    - Node and Bower are installed on your machine globally
    - Basic knowledge of ES6 vocabulary and syntax
    - Basic knowledge of AngularJS vocabulary and syntax
    - Basic knowledge of Sass

  ### Installation Setup:
    1. Clone project from GitHub repository, by copying and pasting the url of this GitHub repository following the $git clone command into your favorite command line program, such as Terminal on Mac.  
        - For example, $git clone https://github.com/vdempsey/Epicodus-JS-Zoo

    2. In the command line run the following commands at the root level of your cloned repository folder:
        - $npm install
        - $bower install
        - $gulp build
        - $gulp serve (to preview live server updates)

    3. If needed, ready for production by running command $gulp build --production


## Specifications


| Description        | Input           | Output |
| ------------- |:-------------| :-----|
| To add a new animal, the user will enter info in appropriate fiels in provided form | Species: "Monkey"<br>Name: "Zita"<br>Age: 5<br>Diet: "Vegetarian"<br>Location: "Tropics"<br>Caretakers: 2<br>Sex: "female"<br>Likes: "Bananas, Toys"<br>Dislikes: "Briefcases" | **Species:** Monkey<br>**Name:** Zita<br>**Age:** 5<br>Diet: Vegetarian<br>**Location:** Tropics<br>**Caretakers:** 2<br>Sex: female<br>**Likes:** Bananas, Toys<br>**Dislikes:** Briefcases |
| Display animals by age group      |   2 years old and younger | **Species:** Arctic Fox<br>**Name:** Moon<br>**Age:** 2<br>Diet: Carnivore<br>**Location:** Northern Trail<br>**Caretakers:** 5<br>Sex: Female<br>**Likes:** Cool shade<br>**Dislikes:** Loud Noises
| To edit an entry for existing animal, the user clicks "edit" button in the info block for selected animal  | edit "Name" field for "Arctic Fox"<br> Change from "Moon" to "Sun" |  updated entry will display<br><br> **Name:** Sun |


### Future Improvements

_Add styling._



## Support and contact details

_Please feel free to reach out with any questions, etc. to valiadempsey@gmail.com._


## Technologies/Resources Used

* ES6 (JavaScript)
* Node.js, including:
  - Bower
  - Gulp
* jQuery
* HTML, CSS, Sass


### License

*Developed under the MIT license.*

Copyright (c) 2017 **_Valia Dempsey_**
