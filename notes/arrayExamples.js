// From online

// const companies= [
//     {name: "Company One", category: "Finance", start: 1981, end: 2004},
//     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//     {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//     {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//     {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//     {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//     {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//     {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
//   ];
  
 // const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
  // for(let i = 0; i < companies.length; i++) {
  //   console.log(companies[i]);
  // }
  
  // forEach
  
  // companies.forEach(function(company) {
  //   console.log(company.name);
  // });
  
  // filter
  
  // Get 21 and older
  
  // let canDrink = [];
  // for(let i = 0; i < ages.length; i++) {
  //   if(ages[i] >= 21) {
  //     canDrink.push(ages[i]);
  //   }
  // }
  
  // const canDrink = ages.filter(function(age) {
  //   if(age >= 21) {
  //     return true;
  //   }
  // });
  
//  const canDrink = ages.filter(age => age >= 21);
  
  // Filter retail companies
  
  // const retailCompanies = companies.filter(function(company) {
  //   if(company.category === 'Retail') {
  //     return true;
  //   }
  // });
  
 // const retailCompanies = companies.filter(company => company.category === 'Retail');
  
  // Get 80s companies
  
 // const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
  
  // Get companies that lasted 10 years or more
  
 // const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
  
  // map
  
  // Create array of company names
  // const companyNames = companies.map(function(company) {
  //   return company.name;
  // });
  
  // const testMap = companies.map(function(company) {
  //   return `${company.name} [${company.start} - ${company.end}]`;
  // });
  
  // const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
  
  // const ageMap = ages
  //   .map(age => Math.sqrt(age))
  //   .map(age => age * 2);
  
  
  
  // sort
  
  // Sort companies by start year
  
  // const sortedCompanies  = companies.sort(function(c1, c2) {
  //   if(c1.start > c2.start) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });
  
  // const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
  
  // Sort ages
  // const sortAges = ages.sort((a, b) => a - b);
  
  // console.log(sortAges);
  
  
  // reduce
  
  // let ageSum = 0;
  // for(let i = 0; i < ages.length; i++) {
  //   ageSum += ages[i];
  // }
  
  // const ageSum = ages.reduce(function(total, age) {
  //   return total + age;
  // }, 0);
  
  // const ageSum = ages.reduce((total, age) => total + age, 0);
  
  // Get total years for all companies
  
  // const totalYears = companies.reduce(function(total, company) {
  //   return total + (company.end - company.start);
  // }, 0);
  
//  const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
  
  // Combine Methods
  
//   const combined = ages
//     .map(age => age * 2)
//     .filter(age => age >= 40)
//     .sort((a, b) => a - b)
//     .reduce((a, b) => a + b, 0);
  
//   console.log(combined);

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


/// Translate border-left-width to borderLeftWidth

// function camelize(str) {
//     return str
//       .split('-')
//       .map(
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join('');
//   }

// camelize("background-color") 
// camelize("list-style-image") 
// camelize("-webkit-transition")

///////////////////////////////////////////////////////////////////////////////////////

// Filter Range

// function filterRange(arr, a, b) {

//     return arr.filter( item => item >= a && item <= b )
//     // return arr.filter( function(item) {
//     //     if ( item >= a && item <= b ) return item
//     // })
// }

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // 3,1 (matching values)
// console.log( arr ); // 5,3,8,1 (not modified)

///////////////////////////////////////////////////////////////////////////////////////

// Filter range 'in place'

// function filterRangeInPlace(arr, a, b) {

//     // arr.forEach( val => (val < a || val > b) ? arr.splice)

//     for (i = 0; i < arr.length ; i++) {

//         if ( arr[i] < a || arr[i] > b ) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }

// let arr = [5, 3, 8, 1, 4];
// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
// console.log( arr ); // [3, 1]

///////////////////////////////////////////////////////////////////////////////////////

// Sort in decreasing order

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => a - b).reverse()

// console.log( arr ); // 8, 5, 2, 1, -10

///////////////////////////////////////////////////////////////////////////////////////

// Copy and sort array

// function copySorted(arr) {

//     return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (no changes)

///////////////////////////////////////////////////////////////////////////////////////

// Create an extendable calculator


///////////////////////////////////////////////////////////////////////////////////////

// Map to names

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map( item => item.name )

// alert( names ); // John, Pete, Mary

///////////////////////////////////////////////////////////////////////////////////////

// Map to objects

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map( user => ( {fullName: `${user.name} ${user.surname}`,
//                                         id: `${user.id}`
//                                     }));

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith

///////////////////////////////////////////////////////////////////////////////////////

// Sort users by age

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// function sortByAge(users) {

//     return users.sort( (a, b) => a.age - b.age)
// }

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// // now: [john, mary, pete]
// console.log(arr[0].name + '\'s age is ' + arr[0].age); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete

///////////////////////////////////////////////////////////////////////////////////////

// Shuffle an array

// function shuffle(array) {

//     array.sort(function() {
//         return Math.random() - 0.5;
//     })
// }

// let arr = [1, 2, 3, -5, -7, -9];
// shuffle(arr);
// console.log(arr);

///////////////////////////////////////////////////////////////////////////////////////

// Get average age

// function getAverageAge(users) {

//     return users.reduce((sum, next) => sum += next.age, 0) / users.length

// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

///////////////////////////////////////////////////////////////////////////////////////

// Filter unique array members

// function unique(arr) {

//     let result = [];

//     for ( let str of arr ) {
//         if ( !result.includes(str) ) {
//             result.push(str);
//         }
//     }

//     return result;
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log( unique(strings) ); // Hare, Krishna, :-O

///////////////////////////////////////////////////////////////////////////////////////

// Create keyed object from array

// function groupById(array) {
//     return array.reduce((obj, value) => {
//       obj[value.id] = value;
//       return obj;
//     }, {})
//   }

// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];
  
// let usersById = groupById(users);
// console.log(usersById);
  
  /*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */
  