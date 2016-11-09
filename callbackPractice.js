/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/



  //Code Here for first

var first = function(names, firstName) {
  firstName(names[0]);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last
var last = function(names, lastName) {
  lastName(names[names.length -1]);
}



last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



  //Code Here for multiply

var multiply = function(num1, num2, answer) {
  var num3 = num1 * num2;
  answer(num3);
}



multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


  //Code Here for contains
var contains = function(names, str, result) {
  for (var i = 0; i < names.length; i++) {
    if (names[i] === str) {
      result(true);
    } else {
      result(false);
    }
  }
}



contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


    //Code Here for uniq
var uniq = function(names, uniqArr) {
  for (var i = 0; i < names.length; i++) {
    for (var j = 0; j < names.length; j++) {
      if (i === j) {
        continue;
      } else if (names[i] === names[j]) {
            names.splice(i, 1)
      }
    }
  }
  return uniqArr(names);
}

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each

var each = function(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], arr.indexOf(arr[i]));
  }
}

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



// var = getUserById(users, id, user) {
//
// }

 //code here for getUserById
function getUserById(arr, prop, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].id === prop) {
      cb(arr[i]);
    }
  }
}

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
