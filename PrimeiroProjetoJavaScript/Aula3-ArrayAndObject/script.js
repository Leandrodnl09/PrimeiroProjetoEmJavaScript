// Vetores ou Arrays

// Declarar um array
let array = ['string', 1, true];
console.log(array);

let array0 = ['string', 1, true, [array1], [array2], [array3], [array4]];
console.log(array0);
console.log(array0[3]);

// farEach
array.forEach(function (item, index) {console.log(item, index)});

//Push
array.push('novo item');
console.log(array);

//Pop
array.pop(); // Apaga o último item do array;
console.log(array);

//Shift
array.shift(); // Apaga o primeiro item do array;
console.log(array);

// UnShift
array.unshift('novo item no inínio'); // Add um primeiro item do array;
console.log(array);

// IndexOf
console.log(array.indexOf(true)); // Passa em qual indice esta o true;

// Splice
array.splice(0, 3); // Apaga os valores da array de 0 ate 3;
console.log(array);

// Slice
let novoArray = array.slice(0, 3);
console.log(novoArray);


let object = {string: 'string', number: 1, boolean: true, array: [array], objectInterno: {objectInterno: 'objeto interno'}};
console.log(object.objectInterno);

var string = object.String;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);
