/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself

const bioInfo = {
    name: "Savannah Rucker",
    photo: "images\myPhoto.jpeg",
    favoriteFoods: ["falafel", "hummus", "lasagne", "cereal"],
    hobbies: ["coding", "teaching", "making school lunches"],
    placesLived: [
        place: {"Albuquerque": "New Mexico", "Springfield": "Illinois"},
        length: {"4 years": "Land of Enchantment", "8 years": "Land of Lincoln"}
    ],
};


// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived
// I don't understand what #9 is asking...


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
//function setInfo(bio){
    document.querySelector("#name").innerHTML = bioInfo.name;
//}


// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo

document.querySelector("#photo").innerHTML = bioInfo.photo;

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo

document.getElementById("img").value= bioInfo.name; 
//This isn't right, because "img" isn't an HTML id...

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

let favFoods = document.getElementById("favorite-Foods");



for (let i = 0; i < favoriteFoods.length; i++){
    let listItem = document.createElement("li");
    listItem.textContent = bioInfo.favoriteFoods[i]; 
    

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

favorite-Foods.append(listItem);
}

// Step 6: Repeat Step 4 for each hobby in the hobbies property

let hobbies = document.querySelector("#hobbies");

for (let i = 0; i < hobbies.length; i++){
    let listItem = document.createElement("li");
    listItem.textContent = bioInfo.hobbies[i]; 
    hobbies.append(listItem);
}
    

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies



// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

