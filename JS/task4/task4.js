console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1.7 , 9 , 45 ]

 ["Str", "alex","moh"]

 ['the' , 'fox' , 'over' , 'lazy' , 'dog' ]

*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
0,1
*/


/*
3
Create an array represents your:
1- Favorite Food (5) ["pizza" , "noodles" , "potato" , "ice cream" , "cookies"]
2- Favorite Sport (3) ["weight lifting" ,"boxing", "basketball"]
3- Favorite Movie (4) ["12 angry men", "the dressmaker" , "i am sam" ," dune"]
*/


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
function firstOfArray(array) {
    return array[0];
}
*/


/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array
function lasttOfArray(array) {
n=arr.length
    return array[n-1];
}
Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)
arr.shift();
arr.shift();
arr.shift();
arr.push(10);
arr.unshift(8);
arr.unshift(6);
arr.unshift(4);
arr.unshift(3);
arr.unshift(1);
var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/


/*
7
Using the console try to figure out what the thing thats (push adds to the back, unshift adds to the front, shift deletes from the front, pop delets from back) return to you

var array2 = [5,9,-7,3.5]
*/


/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets
function middletOfArray(array) {
n=arr.length 
if{ n%2=0 
return array[n/2];
}
else{
    return arry[n/2-0.5,n/2=0.5]
    }
    
}
Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/


/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something
animals[2]=['cat']
animals[3]=['ele']
animals[4]=['bird']
var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/


/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index
function indexOfArray (var,index){
index=arr.length 
return index}
var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/


/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]
function arrayExceptLast(array){
return array.splice
}
**try more cases by your self
*/


// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array
function minInArray(arr) {
    let min = arr[0];       
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
        
var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
let min = arr[0];
    let i = 1;
    while (i < arr.length) {
        if (arr[i] < min) {
            min = arr[i];
        }
*/


/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
function removeFromArray(arr, elem) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == elem) {
        arr.splice(i, 1);
        i--; 
        } 
}    return arr;
    while (i < arr.length) {
        if (arr[i] == elem) {
            arr.splice(i, 1);
            i--; 
        }
*/


/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]
function oddArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
            while (i < arr.length) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6
function aveArray(arr) {
    let sum = 0;
    let average ;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

    }
    average = sum / arr.length;
    return average;
       
    let i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    average = sum / arr.length;
    return average;
}

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
function shorterInArray(arr) {
    let shortest = arr[0];  
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < shortest.length) {
            shortest = arr[i];
        }
    }
    return shortest;
    let i = 1;
    while (i < arr.length) {
        if (arr[i].length < shortest.length) {
            shortest = arr[i];
        }
        i++;
    }       
    return shortest;
    

*/


/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
function repeatChar(str, char) {
    let count = 0;                  
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }   
    }
    let i = 0;
    while (i < str.length) {
        if (str[i] === char) {      
            count++;
        }
        i++;
    }   
    return count;
*/


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

function evenIndexOddLength(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i].length % 2 === 1) {
            result.push(arr[i]);
        }
            return result;
            for (let i = 1; i < arr.length; i += 2) {
        if (arr[i].length % 2 === 0) {
            result.push(arr[i]);
        }
            return result;
    }
    let i = 0;
    while (i < arr.length) {
        if (i % 2 === 0 && arr[i].length % 2 === 1) {
            result.push(arr[i]);
      i+=2;
        }       
        i += 2;
    }
        i=1;
        while (i < arr.length) {
        if (i % 2 === 1 && arr[i].length % 2 === 0) {
            result.push(arr[i]);
        i+=2;
        }
    return result;
}

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
function powerElementIndex(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(Math.pow(arr[i], i));
    }
    let i = 0;
    while (i < arr.length) {
        result.push(Math.pow(arr[i], i));
        i++;
    }
    return result;
*/


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index
    function evenNumberEvenIndex(arr) {
    let result = [];    
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }   
    }
    return result;
    let i = 0;

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/