/* // reverse a string
reverseString = (str) => {
    let revStr = "";
    for (let count = str.length - 1; count >= 0; count--) { 
    revStr += str[count];
  }
  return revStr;
  }
  console.log(reverseString("hello"));

  // looping triangle
  for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

  // divisible by 3 and 5
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

// n Factorial

function factorialize(num) {
  let fac = 1;
  for (let i = num; i > 0; i--) {
    fac = fac * i;
  }
  return fac;
}

console.log(factorialize(5));
console.log(factorialize(3));

// find longest word in string
function findLongestWordLength(str) {
  let strArr = str.split(" ");
  let init = strArr[0];
  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i].length > init.length) {
      init = strArr[i];
    }
  }
  return init;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// Another way with .Reduce
console.clear();
function findLongestWordLength(s) {
  return s.split(' ')
    .reduce(function(x, y) {
      return Math.max(x, y.length)
    }, 0);
}
console.log(findLongestWordLength("The quick extremely brown fox jumped over the lazy dog"));


// return array of largest number in sub array
largestOfFour = (arr) => {
  let newArr = [];
  for (let i=0; i<arr.length; i++){
    let subArr = arr[i][0];
    for(let j=0; j<arr[i].length; j++){
      if (arr[i][j] > subArr) {
        subArr = arr[i][j];
      }
    }
    newArr.push(subArr);
  }
  
  return newArr;
  console.log(newArr);
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
*/

//Ceasar Cipher
function ceasar(str, numChange) {
  let alpha = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
  let codedString = '';
  for (let i = 0; i < str.length; i++) {
    codedString += str[i]
  }
}

Test 1