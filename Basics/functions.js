// ** FUNCTIONS ** //

// JS de fonksiyonlar "function" anahtar kelimesi ile tanımlanır. 
// Örneğin;

// function add(a, b) {
//     return a + b;
// }

// - Fonksiyonlar bir değerdir. Bu yüzden bir değişkene atanabilirler.
// - Başka bir fonksiyona parametre olarak gönderilebilirler.
// - Başka bir fonksiyondan döndürülebilirler.
// - Dart dilindeki gibi geri dönüş tipi belirtilmez. 

// Örneğin;

zeroToTen = () => {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}

console.log(zeroToTen); // [Function: zeroToTen]

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function calculate(a, b, operation) {
    return operation(a, b);

}

console.log(calculate(2, 3, add)); // 5

// - Fonksiyonlarda Dart dilindeki gibi parametreler verilebilir.

// Örneğin;

function addNonNamed(a, b) {
    return a + b;
}

console.log(addNonNamed(2, 3)); // 5

// - Fonksiyonlarda Dart dilindeki gibi parametrelerin varsayılan değerleri verilebilir.


// Örneğin; 

function addDefaultValued(a, b = 1) {
    return a + b;
}

console.log(addDefaultValued(2)); // 3

// - Fonksiyonlarda Dart dilindeki gibi isimlendirilmiş parametreler verilebilir.

// Örneğin;

function addNamed({  a, b }) {
    return a + b;
}

console.log(addNamed({ a: 2, b: 3 })); // 5


// - Fonksiyonlarda return ifadesi ile döndürülen değerler varsa döndürülür. 

// Örneğin;

function divide(a, b) {
   console.log(a / b);
    return Math.round(a / b);
}

console.log(divide(5, 2)); // 3

// - Fonksiyonlarda iç içe fonksiyonlar tanımlanabilir. 

// Örneğin;

function outer() {

    function inner() {
        console.log("inner");
    }

    console.log("outer");
    inner();
}

outer(); // outer inner


// - Fonksiyonlarda Dart dilindeki gibi arrow function kullanılabilir.

// Örneğin;


const addArrow = (a, b) => {
    return a + b;
}


console.log(addArrow(2, 3)); // 5

// - Fonksiyonlarda Dart dilindeki gibi arrow function kullanılarak tek satırlık fonksiyonlar tanımlanabilir.

// Örneğin;

const addArrowSingleLine = (a, b) => a + b;

console.log(addArrowSingleLine(2, 3)); // 5

