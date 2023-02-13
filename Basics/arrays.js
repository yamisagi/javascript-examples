/// **** ARRAY ****
/// 

// Çoğu programlama dilinde olduğu gibi, JS'de da diziler, birden fazla veriyi saklamak için kullanılır.
// Bazı dillerde array, Dart'ta ise List olarak adlandırılır.

// Örnek olarak, bir liste oluşturalım ve içine bazı veriler ekleyelim.

var numbers = [1, 2, 3, 4, 5];

// Dizilerdeki verilere erişmek için, dizinin adını yazıp köşeli parantez içine indeks numarasını yazmak yeterlidir.

console.log(numbers[0]); // 1

// Dizilerdeki verileri değiştirmek için de aynı işlemi yapabiliriz.

numbers[0] = 10;

console.log(numbers[0]); // 10

// Dart dilindeki gibi, JS'de de dizilerin elemanlarının tipi farklı olabilir.

var mixed = [1, "2", true];

console.log(mixed[0]); // 1


// Ve aynı şekilde özel fonksiyonlarla belirli işlem yapılabilir.

// Örneğin, push() fonksiyonu ile dizinin sonuna eleman ekleyebiliriz.

numbers.push(6);

console.log(numbers); // [ 10, 2, 3, 4, 5, 6 ]


// Aynı şekilde, pop() fonksiyonu ile dizinin sonundaki elemanı çıkarabiliriz.

numbers.pop();

console.log(numbers); // [ 10, 2, 3, 4, 5 ]


// concat() fonksiyonu ile de iki diziyi birleştirebiliriz.

var numbers2 = [6, 7, 8, 9, 10];

var numbers3 = numbers.concat(numbers2);

console.log(numbers3); // [ 10, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// Dizilerdeki elemanları sıralamak için de sort() fonksiyonunu kullanabiliriz.


// Örneğin, sayıları küçükten büyüğe sıralayalım.

numbers3.sort();

console.log(numbers3); // [ 10, 10, 2, 3, 4, 5, 6, 7, 8, 9 ]

// Aynı şekilde, tam tersi için de reverse() fonksiyonunu kullanabiliriz.   

numbers3.reverse();

console.log(numbers3); // [ 9, 8, 7, 6, 5, 4, 3, 2, 10, 10 ]


/// Daha fazla bilgi için: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array