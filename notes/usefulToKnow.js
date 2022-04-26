let arr = [1, 2, 3, 4, 5];

// 1. Sort an array in increasing & decreasing order

arr.sort((a,b) => a-b); // increasing
arr.sort((a,b) => b-a); // decreasing

// 2. Shuffle an array ( make it random) - Use Fisher-Yates shuffle

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

shuffle(arr)
console.log(`Random arr: ${arr}  Increasing arr: ${arr.sort((a,b) => a-b)}`);
shuffle(arr)
console.log(`Random arr: ${arr}  Decreasing arr: ${arr.sort((a,b) => b-a)}`);

// 3. Filter unique array members

function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    return result;
  }

let strings = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O

// 4. When we need to iterate over an array – we can use forEach, for, for..of, for..in.

let list = [4, 5, 6];

for (let i in list) { // iterates over indexes
  console.log("Index: " + i); // "0", "1", "2",
}
for (let i of list) { // iterates over values
  console.log("Value: " + i); // 4, 5, 6
}

// for loop is the same as .forEach()
for (let i = 0; i < list.length; i++) {
  console.log(`For loop.. \nIndex is ${i}  || Value is ${list[i]}`);
}

list.forEach((value, index) => console.log(`.foreach loop.. \nIndex is ${index}  || Value is ${value}`));

//..  When we need to iterate and return the data for each element – we can use map.