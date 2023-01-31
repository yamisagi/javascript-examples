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

