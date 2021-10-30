const array1 = [1, 4, 9, 16, -31, -50];
const passedArray = [2, 10, 15, 25];
const array2 = [5, undefined, 12, 5, undefined, null, ,-99];

// arrow function with element
const map1_1 = array1.map((x) => {return x * 2});
// const map1_4 = array1.map();
// const map1_5 = map();

// arrow function with element and index
const map1_2 = array1.map((x, idx) => {return x + idx}) 

// arrow function with element and index and array
const map1_3 = array1.map((x, idx, passedArray) => {return x + idx + passedArray[idx]});

// callback function 
    const map2 = array1.map(callbackFn);
    
// callback function with thisArg
    const map3 = array2.map(callbackFn, true);

// callback function
// can be an variable you want: Tried (x and arr) both worked
function callbackFn(x, idx, array) {
    if (x == undefined){
        return this;
    }
    else {
        return x;
    }
}

console.log('');

console.log('Arrays used: array1, array2, passedArray');
console.log('array1:');
console.log(array1);
console.log('array2:');
console.log(array2);
console.log('passedArray:');
console.log(passedArray);

console.log('');

console.log('Maps outputted:');
console.log('map1_1: arrow function with element');
console.log(map1_1);
console.log('map1_2: arrow function with element and index');
console.log(map1_2);
console.log('map1_3: arrow function with element and index and array');
console.log(map1_3);
console.log('map2: callback function');
console.log(map2);

// console logs that figure out all the types used
console.log('map3: callback function with thisArg');
console.log(map3);
console.log("typeof array2: " + typeof array2);
console.log("typeof array2[2]: " + typeof array2[2]);
console.log("typeof map3[1]: " + typeof map3[1])
console.log("typeof map3: " + typeof map3);
console.log("typeof map3[0]: " + typeof map3[0]);


console.log('');