// Data => is the collection of information or details about a particular object or figure
// structure => How you save, format, process the data
// Algorithm => This is a set of instruction or a step by step rule on how to solve a problem

// Write an algorithm that adds 2 to every number in an arr

import { performance } from "perf_hooks";


const num = [3, 7, 12, 6, 34, 19,];

async function addTwo(sum) {
    for (let index = 0; index < num.length; index++) {
        num[index] += sum;
    }
    return num;
}
console.log(addTwo(5));
async function fetchUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return await response.json();
}
fetchUser()
async function dotThen() {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) => {
        return data;
    })
}
dotThen()
// The O of n
// The O of 1
// The O of n ^2

function isPalindrome(word) {
    //
    let reversed_word = "";
    let i = word.length - 1
    while (i >= 0) {
        if (word[i] == " ") {
            i--
            continue;
        }
        reversed_word += word[i]
        i--
    }
    console.log(reversed_word);
    return word.replaceAll(" ", "").toLowerCase().trim() == reversed_word.toLowerCase()
}
// console.log(isPalindrome("MaDAm"))
console.log(isPalindrome("     race car    "))
// isPalindrome("Daniel")
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********

function rightAngleTriangle(num) {
    let star = ""
    for (let index = 1; index <= num; index++) {
        star += "*"
        console.log(star);
    }
}
rightAngleTriangle(3)

let hobbies = ["Sporty Bet", "Trading", "K drama"];
for (let index = 0; index < hobbies.length; index++) {
    const element = hobbies[index];
    if (element == "Trading") {
        // continue;
        break;
    }
    console.log(element);

}

// min 
// max
// sort in alphabetical order => ascending
// sort in alphabetical order => descending
// lexographical order
let names = ["Daniel", "Opemipo", "Afolabi", "Precious", "Opemipo", "Boy"];

console.log("15" > "10");
console.log(10 < 5);
let mm = 1000
let jj = "1000"

console.log(mm[1]);
console.log(jj[1]);

findName("Precious")
maxLenght() // "Opemipo is the name with the longest character, We have 2 copies of opemipo"
minLenght() // "Boy is the name with the smallet character"


function keypads() {

}
























if (import.meta.url === `file://${process.argv[1]}.js`) {
    const t0 = performance.now();
    addTwo().then(() =>
        console.log(`[time] ${((performance.now() - t0) / 1000).toFixed(4)}s`)
    );
    fetchUser().then(() =>
        console.log(`[time] ${((performance.now() - t0) / 1000).toFixed(4)}s => Without then`)
    );
    dotThen().then(() =>
        console.log(`[time] ${((performance.now() - t0) / 1000).toFixed(4)}s => Dot then`)
    );
}

// The Big O => Time complexity and space complexity