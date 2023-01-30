// ** TYPES ** //

// - Dart ve diğer dillerde olduğu gibi, JS de de değişkenlerin tipi vardır.
// - String, Number, Boolean, Array, Object, Function, Null, Undefined, Symbol etc.
// - JS de değişkenlerin tipi değişebilir. (Dynamic Typing)
// - JS de değişkenlerin tipini belirtmek için "var" "let" ve "const" kullanılır.
// - "var" ile tanımlanan değişkenlerin tipi değişebilir.
// - "let" ile tanımlanan değişkenlerin tipi değişebilir.
// - "const" ile tanımlanan değişkenlerin tipi değişemez.
// - "let" ve "var" arasındaki fark ise "let" ile tanımlanan değişkenlerin sadece block scope'u vardır.
// - "var" ile tanımlanan değişkenlerin ise global scope'u vardır.
// - "let" ile tanımlanan değişkeni tekrar tanımlayamayız. Ancak değerini güncelleyebiliriz (Hata verir.)
// - "var" ile tanımlanan değişkeni tekrar tanımlayabiliriz ve günceleyebiliriz.

// - Örneğin;
var a = 10;
a = "10";
a = true;
a = [1, 2, 3];

let b = 10;
b = "10";
b = true;

const c = 10;
// c = "10"; // Hata verir.

// - Çünkü Dart dilinde de olduğu gibi "const" ile tanımlanan değişkenler sabittir. (Immutable) 
// - Ufak bir düzeltme yapalım. 
// - Dart dilindeki gibi JavaScript'in Compile adımı yoktur.
// - Bunun yerine, tarayıcıdaki bir Interpreter JavaScript kodunu okur, her satırı yorumlar ve çalıştırır. Daha modern tarayıcılar, 
// - JavaScript'i tam çalışmak üzereyken yürütülebilir bayt koduna derleyen Tam Zamanında (JIT) derlemesi olarak bilinen bir teknolojiyi kullanır.

// Fakat JS Dart'ın aksine değişkenlerin tipini belirtmek zorunda değildir. (Implicit Typing)
// Örneğin;

var name = "Jill" ;
let age = 20;
var isMarried = false; 
var children = ["Jill", "Jack", "John"];

// - Type Casting
// * - JS de değişkenlerin tipini görmek için "typeof" kullabiliriz.

console.log(typeof name); // string

