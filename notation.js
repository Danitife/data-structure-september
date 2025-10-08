// The O of n
// The execution time of the algorithm grows LINEARLY in proportion to the size of the input data (n)
// i.e if we have an array of lenght 5, it takes faster time to execute information that an array of lenght 100
let names = ['femi', 'tunde', 'kunle', 'tope']

function searchName(name) {
    for (let index = 0; index < names.length; index++) {
        const element = names[index];
        if (element == name) {
            return name;
        }
    }
}

searchName("tunde")

// The O of 1
// Also known as constant time, signifies that the execution time of an algorithm remains constant regardless of the input size

// The O of n^2
// Indicates that the algorithm execution time grows QUADRATICALLY with the size of the input data

for (let i = 0; i < 10; i++) {
    // console.log(i);
    for (let j = 0; j < 10; j++) {
        console.log(`Finding pairs: ${i}: ${j}`);
    }
}