"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      // TODO: search by traits
      break;
      default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person["firstName"] === firstName && person["lastName"] === lastName){
      return true
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  let newPerson = foundPerson[0];
  return newPerson;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}

//search by gender
function searchByGender(people){
  let foundPerson;
  if(people.length > 1){

  
  let input = promptFor("Do you know the person's gender?", yesNo).toLowerCase();
  
  switch (input){
    case 'yes': 
      let input2 = promptFor("Male or Female?", chars).toLowerCase();
      foundPerson = people.filter(function(person){
        if(person["gender"] === input2){
          return true
        }
        else{
          return false;
        }
      })
    case 'no':
      foundPerson = people;
      break;
  }
  return foundPerson;
  }
  else if(people.length === 1){
    foundPerson = people[0];
    return mainMenu(foundPerson, people)
  }
}

//search by height
function searchByHeight(people){
  let foundPerson;
  if(people.length > 1){

  
  let input = promptFor("Do you know the person's height?", yesNo).toLowerCase();
  
  switch (input){
    case 'yes': 
      let input2 = promptFor("What is the person's height?(ex. 71)", chars);
      foundPerson = people.filter(function(person){
        if(person["height"] === input2){
          return true
        }
        else{
          return false;
        }
      })
    case 'no':
      foundPerson = people;
      break;
  }
  return foundPerson;
  }
  else if(people.length === 1){
    foundPerson = people[0];
    return mainMenu(foundPerson, people)
  }
}

//search by weight
function searchByWeight(people){
  let foundPerson;
  if(people.length > 1){

  
  let input = promptFor("Do you know the person's weight?", yesNo).toLowerCase();
  
  switch (input){
    case 'yes': 
      let input2 = promptFor("What is the person's weight in pounds?(ex. 160)", chars);
      foundPerson = people.filter(function(person){
        if(person["weight"] === input2){
          return true
        }
        else{
          return false;
        }
      })
    case 'no':
      foundPerson = people;
      break;
  }
  return foundPerson;
  }
  else if(people.length === 1){
    foundPerson = people[0];
    return mainMenu(foundPerson, people)
  }
}

//get eye color
function searchByEyeColor(people){
  let foundPerson;
  if(people.length > 1){

  
  let input = promptFor("Do you know the person's eye color?", yesNo).toLowerCase();
  
  switch (input){
    case 'yes': 
      let input2 = promptFor("What is the person's eye color?(ex. Blue)", chars).toLowerCase;
      foundPerson = people.filter(function(person){
        if(person["eyeColor"] === input2){
          return true
        }
        else{
          return false;
        }
      })
    case 'no':
      foundPerson = people;
      break;
  }
  return foundPerson;
  }
  else if(people.length === 1){
    foundPerson = people[0];
    return mainMenu(foundPerson, people)
  }
}

//get occupation
function searchByOccupation(people){
  let foundPerson;
  if(people.length > 1){

  
  let input = promptFor("Do you know the person's occupation?", yesNo).toLowerCase();
  
  switch (input){
    case 'yes': 
      let input2 = promptFor("What is the person's occupation?(ex. landscaper)", chars);
      foundPerson = people.filter(function(person){
        if(person["occupation"] === input2){
          return true
        }
        else{
          return false;
        }
      })
    case 'no':
      foundPerson = people;
      break;
  }
  return foundPerson;
  }
  else if(people.length === 1){
    foundPerson = people[0];
    return mainMenu(foundPerson, people)
  }
}



function searchByTraits(people){
  
   let result = searchByOccupation(searchByWeight(searchByHeight(searchByEyeColor(searchByGender(people)))));
   if(result.length === 1){
     return mainMenu(result[0], people)
   }
   else if(result.length > 1){
     return displayPeople(result);
   }
}
