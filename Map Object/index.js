// Initialize Empty Map Object

let map = new Map();

// Add manually data with set function
map.set('name', 'Murat')
map.set('age', 29)

// You can use get function for get data in stored map object
let age = map.get('age') // 29

// You can check data with key value for data is has or has not
let hasAge = map.has('age') // true
let hasLastName = map.has('lastName') // false

// You can delete map data with key value
map.delete('age') // true

// Checking map size before clear all data
map.size // 1

// You can clear all map data
map.clear()

// Checking map size after clear all data
map.size // 2

let mapObject = new Map([["Murat", 1], [2, "Öner"], [3, "Murat"]]);

// usage keys function
for(let key of mapObject.keys()) {
   console.log(key);     // "Murat", 2, 3
}

// usage values function
for(let key of mapObject.values()) {
   console.log(key);     // 1, "Öner", "Murat"
}

// get entries
for(let entry of mapObject.entries()) {
    console.log(entry);  //[ 'Murat', 1 ], [ 2, 'Öner' ], [ 3, 'Murat' ]
}
 //OR
for(let entry of mapObject){
    console.log(entry); // [ 'Murat', 1 ], [ 2, 'Öner' ], [ 3, 'Murat' ]
}

 // usage forEach function
mapObject.forEach((value, key) => {
    console.log(key + "," + value);
});

  // Output ->
  //Murat,1
  //2,Öner
  //3,Murat