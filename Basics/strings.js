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
// - Template Literal'lar ile birlikte ES6 ile gelen "Template Literals" özelliği de gelmiştir.
// - Bu yüzden tek tırnak veya çift tırnak kullanılmadan string ifadeler yazılabilir. 
//! - Bana backtick saçma gelse de, Dart dilinde değişkenleri concat etmek için sadece "$" ve tırnak yeterliydi.
//! - Bu yüzden daha kolay bir kullanımı vardı.
//! - Ama JS'e sonraki güncellemeler ile geldiği için muhtemelen Legacy Prod'lar patlamasın diye farklı yapmış olabilirler :)