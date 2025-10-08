// Write a short program that prints each number from 1 to n on a new line. 

// For each multiple of 3, print "Fizz" instead of the number. 

// For each multiple of 5, print "Buzz" instead of the number. 

// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

function fizzBuzz(n) {
    for (let index = 1; index <= n; index++) {
        if (index % 3 == 0 && index % 5 == 0) {
            console.log("FizzBuzz");
            continue;
        } else if (index % 5 == 0) {
            console.log("Buzz");
            continue;
        } else if (index % 3 == 0) {
            console.log("Fiz");
            continue;
        }
        console.log(index);
    }
}

// fizzBuzz(50)

// SENTENCE CAPITALIZATION

function capittt(sentence) {
    let new_sentence = sentence.split(" ")
    for (let index = 0; index < new_sentence.length; index++) {
        let element = new_sentence[index]
        new_sentence[index] = element[0].toUpperCase() + element.substr(1);
    }
    let sss = new_sentence.join(" ")
    return sss;
}

console.log(capittt("do my assignment")); // Do My Assignment

// ASSIGNMENT
// 20 Twenty
// ARRAY CHUNCK

function chunckingArr(arr, div) {
    // [1,2,3,4,5,6,7,8,,9] => arr
    // 3 => div

    //Out => [[1,2,3],
    //Out => [4,5,6],
    //Out => [7,8,9]]
}

chunckingArr([], 2)