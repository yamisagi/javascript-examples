/// **** LOOPS ****

// Çoğu programlama dilinde olduğu gibi, JS'de de döngüler, bir işlemi tekrar tekrar yapmak için kullanılır.

// JS'de döngüler 3 türdür;

// for
// while
// do while


// for döngüsü şu şekilde kullanılır;

// for (başlangıç değeri; bitiş değeri; artış miktarı) {

// Döngü içinde yapılacak işlemler

// }

// Örneğin, 1'den 10'a kadar olan sayıları yazdıralım.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 1 ... 10


// while döngüsü şu şekilde kullanılır;

// while (koşul) {

// Döngü içinde yapılacak işlemler

// }

// Örneğin, 1'den 10'a kadar olan sayıları yazdıralım.

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

// While döngüsü, koşul sağlandığı sürece döngü içindeki işlemleri tekrar eder.
// Bu yüzden, while döngüsünde döngü içindeki işlemlerden biri, koşulun sağlanmamasını sağlamalıdır.
// Aksi takdirde, döngü sonsuza kadar devam eder.


// do while döngüsü şu şekilde kullanılır;

// do {


// Döngü içinde yapılacak işlemler

// } while (koşul);

// Örneğin, 1'den 10'a kadar olan sayıları yazdıralım.


i = 1;

do {
    console.log(i);
    i++;
}
while (i <= 10);

// Aynı şekilde, do while döngüsünde de döngü içindeki işlemlerden biri, koşulun sağlanmamasını sağlamalıdır.
// Aksi takdirde, döngü sonsuza kadar devam eder.

// Basit bir FizzBuzz uygulaması yapalım.

// FizzBuzz, 1'den 100'e kadar olan sayıları yazdırmak için kullanılan bir uygulamadır.
//  Eğer sayı 3'e bölünüyorsa, "Fizz" yazdır.
//  Eğer sayı 5'e bölünüyorsa, "Buzz" yazdır.
//  Eğer sayı hem 3'e hem de 5'e bölünüyorsa, "FizzBuzz" yazdır.

var fizzBuzzArray = [];

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            fizzBuzzArray.push("FizzBuzz");
        }
        else if (i % 3 == 0) {
            fizzBuzzArray.push("Fizz");
        }
        else if (i % 5 == 0) {

            fizzBuzzArray.push("Buzz");

        }
        else {
            fizzBuzzArray.push(i);
        }
    }
    console.log(fizzBuzzArray);
}


fizzBuzz();