/// **** IF ELSE **** /// 

// Diğer dillerde olduğu gibi JS'de de if else yapısı vardır. 
// if else yapısı şu şekilde kullanılır;

if (true) {
    console.log("true");
}
else {
    console.log("false");
}

// Bunun dışında if else yapısında kullanılan operatörler aşağıdaki gibidir;

// === eşittir (tip kontrolü yapar)
// !== eşit değildir (tip kontrolü yapar)
// == eşittir (tip kontrolü yapmaz)
// != eşit değildir (tip kontrolü yapmaz)
// > büyüktür
// < küçüktür
// >= büyük eşittir
// <= küçük eşittir


// Örneğin;

if (2 > 1) {
    console.log("2 > 1");
}
else {
    console.log("2 < 1");
}

// 2 > 1

// Dart ve başka dillerin aksine 2 eşittir ve 3 eşittir işaretleri JS'de aynı işlemi yapmaz.
// === eşittir operatörü hem değeri hem de tipini kontrol ederken == eşittir operatörü sadece değeri kontrol eder.



// Örneğin;

if (2 === "2") {
    console.log("2 === 2");
}
else {
    console.log("2 !== 2");
}


// 2 !== 2

if (2 == "2") {
    console.log("2 == 2");

}
else {
    console.log("2 != 2");
}

// 2 == 2

// Artı olarak else if yapısı da vardır. 

// Örneğin;


if (1 > 1) {
    console.log("2 > 1");
}
else if (1 < 2) {
    console.log("2 < 1");
}
else {
    console.log("2 == 1");
}


// 2 < 1

