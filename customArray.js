let arr = new Array();
// classes are object blueprint => How your object is expected to look like
class DanArr {
    constructor() {
        this.length = 0
        this.data = {}
    }

    myPush(element) {
        this.data[this.length] = element
        this.length++
        return this.data
    }
    myFind(index) {
        if (this.data[index] === undefined) {
            console.log("Not found");
        }
        return this.data[index];
        // return "Hello";
    }
    myPop() {
        delete this.data[this.length - 1]
        this.length--
        return
    }
}
// Shift
// unshift
// foreach
// includes
// slice
// filter
let arr1 = new DanArr()
arr1.myPush("Daniel")
arr1.myPush("Samuel")

console.log(arr1.myFind(1))
arr1.myPop();
console.log(arr1);
console.log(arr1.length);







class CustomArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
  
    // --- Core methods from the previous example ---
    get(index) {
      if (this.data[index] === undefined) {
        throw new Error("Index out of bounds");
      }
      return this.data[index];
    }
  
    push(element) {
      this.data[this.length] = element;
      this.length++;
      return this.length;
    }
  
    pop() {
      if (this.length === 0) {
        return undefined;
      }
      const lastElement = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastElement;
    }
  
    // --- Newly implemented methods ---
  
    // Removes the first element and returns it. Shifts all other elements.
    shift() {
      if (this.length === 0) {
        return undefined;
      }
      const firstElement = this.data[0];
  
      // Shift all elements to a lower index
      for (let i = 0; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
  
      // Delete the last element and decrement length
      delete this.data[this.length - 1];
      this.length--;
  
      return firstElement;
    }
  
    // Adds one or more elements to the beginning of the array.
    unshift(...items) {
      // Make room for the new elements by shifting all current elements
      // to a higher index.
      for (let i = this.length - 1; i >= 0; i--) {
        this.data[i + items.length] = this.data[i];
      }
  
      // Insert the new elements at the beginning
      for (let i = 0; i < items.length; i++) {
        this.data[i] = items[i];
      }
      this.length += items.length;
  
      return this.length;
    }
  
    // Executes a provided function once for each array element.
    forEach(callback) {
      for (let i = 0; i < this.length; i++) {
        callback(this.data[i], i, this);
      }
    }
  
    // Checks if an element exists in the array, returns true or false.
    includes(searchElement, fromIndex = 0) {
      for (let i = fromIndex; i < this.length; i++) {
        if (this.data[i] === searchElement) {
          return true;
        }
      }
      return false;
    }
  
    // Returns a shallow copy of a portion of an array.
    slice(start = 0, end = this.length) {
      const newArray = new CustomArray();
      const startIndex = start < 0 ? this.length + start : start;
      const endIndex = end < 0 ? this.length + end : end;
  
      for (let i = startIndex; i < endIndex; i++) {
        if (this.data[i] !== undefined) {
          newArray.push(this.data[i]);
        }
      }
      return newArray;
    }
  
    // Creates a new array with all elements that pass the test.
    filter(callback) {
      const newArray = new CustomArray();
      for (let i = 0; i < this.length; i++) {
        const element = this.data[i];
        if (callback(element, i, this)) {
          newArray.push(element);
        }
      }
      return newArray;
    }
  }
  
//   // --- Usage examples ---
//   const myCustomArray = new CustomArray();
//   myCustomArray.push(10);
//   myCustomArray.push(20);
//   myCustomArray.push(30);
//   myCustomArray.push(40);
//   console.log("Original array:", myCustomArray); // CustomArray { length: 4, data: { '0': 10, '1': 20, '2': 30, '3': 40 } }
  
//   // Shift
//   const shifted = myCustomArray.shift();
//   console.log("Shifted element:", shifted); // 10
//   console.log("Array after shift:", myCustomArray); // CustomArray { length: 3, data: { '0': 20, '1': 30, '2': 40 } }
  
//   // Unshift
//   myCustomArray.unshift(5, 10);
//   console.log("Array after unshift:", myCustomArray); // CustomArray { length: 5, data: { '0': 5, '1': 10, '2': 20, '3': 30, '4': 40 } }
  
//   // forEach
//   console.log("forEach output:");
//   myCustomArray.forEach((item, index) => {
//     console.log(`Index: ${index}, Value: ${item}`);
//   });
  
//   // includes
//   console.log("Includes 20?", myCustomArray.includes(20)); // true
//   console.log("Includes 50?", myCustomArray.includes(50)); // false
  
//   // slice
//   const slicedArray = myCustomArray.slice(1, 4);
//   console.log("Sliced array:", slicedArray); // CustomArray { length: 3, data: { '0': 10, '1': 20, '2': 30 } }
//   console.log("Original array after slice (unchanged):", myCustomArray); // Unchanged
  
//   // filter
//   const filteredArray = myCustomArray.filter(item => item > 20);
//   console.log("Filtered array (items > 20):", filteredArray); // CustomArray { length: 2, data: { '0': 30, '1': 40 } }


  