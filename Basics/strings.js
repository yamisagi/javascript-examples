// ** STRING BASICS **

// - String tipi çoğu dilde olduğu gibi JS de de bir karakter dizisidir.
// - String tipi JS de "String" ve "string" olarak da kullanılabilir.
// - Concatenation (Birleştirme) işlemi için "+" operatörü kullanılır.   

var name = "Jill";
var surname = "Smith";
var age = 20;

console.log(name + " " + surname + " is " + age + " years old."); // Jill Smith is 20 years old.

// - Veya ES6 ile gelen Template Literals kullanılabilir. 

console.log(`${name} ${surname} is ${age} years old.`); // Jill Smith is 20 years old.

//? -  Dart dilinde öğrendiğimin aksine değişkenleri concat etmek için sadece "$" kullanılmaz.
//* - "$" kullanıldığında değişkenin değeri yazdırılmaz. Sadece değişkenin adı yazdırılır. 
//* - "$" kullanıldığında değişkenin değeri yazdırmak için "${}" kullanılır.
console.log(`Hello $name $surname`); // Hello $name $surname
console.log(`Hello ${name} ${surname}`); // Hello Jill Smith

// - ` (Backtick) ile başlayıp ` (Backtick) ile biten bir string ifadeye "Template Literal" denir. 
// - Template Literal'lar ES6 ile gelen bir özelliktir.
// - Bu yüzden tek tırnak veya çift tırnak kullanılmadan string ifadeler yazılabilir. 
//! - Bana backtick saçma gelse de, Dart dilinde değişkenleri concat etmek için sadece "$" ve tırnak yeterliydi.
//! - Bu yüzden daha kolay bir kullanımı vardı.
//! - Ama JS'e sonraki güncellemeler ile geldiği için muhtemelen Legacy Prod'lar patlamasın diye farklı yapmış olabilirler :)


// - String ifadelerdeki karakterlerin index numaraları 0'dan başlar.
// - Ve çoğu dilde ortak olan fonksiyonlar da vardır.

// - Örneğin bir string ifadenin uzunluğunu bulmak için "length" fonksiyonu kullanılır.
// - Veya bir string ifadenin karakterlerini büyük harfe çevirmek için "toUpperCase" fonksiyonu kullanılır.
// - Veya bir string ifadenin karakterlerini küçük harfe çevirmek için "toLowerCase" fonksiyonu kullanılır.
// - Slice fonksiyonu ile bir string ifadenin belirli bir kısmını alabiliriz.


var myName = "Jill Smith";
console.log(myName.length); // 10
console.log(myName.toUpperCase()); // JILL SMITH
console.log(myName.toLowerCase()); // jill smith
console.log(myName.slice(0, 4)); // Jill

// ------------------------------ // 