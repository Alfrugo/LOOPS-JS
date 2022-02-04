const array = [1,2,3,4,7,6,3,5];

//FOR LOOP

for (let index=0; index < array.length; index++) {
    console.log(`FOR LOOP ${array[index]} `);

}

//WHILE LOOP

let index = 0
while (index < array.length){
    console.log( `WHILE LOOP ${array[index]}`)
    index++
}

//ForEACH
        // Parameters
        // function()	Required.
        // A function to run for each array element.
        // currentValue	Required.
        // The value of the current element.
        // index	Optional.
        // The index of the current element.
        // arr	Optional.
        // The array of the current element.
        // thisValue	Optional. Default undefined.
        // A value passed to the function as its this value.

array.forEach(function(current_value, index, array){
    console.log (`forEach loop ${current_value}`)
})

// MAP loop

const square = x => Math.pow(x, 2)   // Math.pow(base, exponent)
const squares = array.map(square)

console.log(`Original array: ${array}`)
console.log(`Squared array: ${squares}`)

// REDUCE loop

const sum = (x,y) => x + y;
const array_sum = array.reduce(sum, 0);
console.log (`The sum of the array: ${array} is ${array_sum}`)

// EVERY vs SOME loop

const under_seven = x => x < 7

if (array.every(under_seven)){      // every has to satisfy for ALL elements and some only for one or more. 
    console.log(`Less than seven`)
}else{
    console.log('Seven or bigger than seven')
}
