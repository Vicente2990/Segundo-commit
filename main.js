// const user = {name: "Anres"}
// //SI
// user.name = "carlos"
// user.pass = 123456
// //NO
// user = {pass:12345}
// console.log(user);

// let saludo = function(nombre, tratamiento) {
//     alert ("Hola " + tratamiento + nombre)
// }
// let saludo = (nombre, tratamiento) => {
//    alert ("Hola "+ tratamiento + " " + nombre)
// }
// let saludo = (nombre, tratamiento) => 
//     alert ("Hola "+ tratamiento + " " + nombre) 
// const saludo = (nombre, tratamiento) => 
//     alert("Hola "+ tratamineto " " + nombre)      

// saludo("Andres", "Sr")

// let x = 5
// console.log(Math.pow(x, 2))
// console.log(x ** 2)


// var cars = ["BMW", "Volvo", "Honda", "Ford", "Fiat", "Audi"]

// console.log(cars.map(function(car) {
//     return car.length
// }));
// console.log(cars.map((car) => {
//     return car
// }));
// ES5

// for(let i  0; i < CaretPosition.length; i++){
//     console.log(cars [i]);
// }
// ES6
// cars.forEach((car) => {
//     console.log(car)
// })

// var numbers = [4, 9, 16, 25, 29]
// console.log(numbers.find(foo));
// console.log(numbers.find(fooIndex(foo));

// let foo = (num) => num > 17
// let numbers = [4, 9, 16, 25, 29]
// console.log (numbers.find(foo));
// console.log(numbers.findIndex(foo));


// function persona(name, timeInMillis){
//     this.edad = 0

//     setInterval(() => {
//         this.edad++
//         console.log(name + ": " + this.edad);
//     }, timeInMillis);
// }
// let p1 = persona("uno", 500)
// let p2 = persona("dos", 2000)

// function persona(name, timeInMillis){
//     var edad = 0

//     setInterval(() => {
//         edad++
//         console.log(name + ": " + this.edad);
//     }, timeInMillis);
// }
// let p1 = persona("uno", 500)
// let p2 = persona("dos", 2000)

// var i = "global"
// function foo(){
//     var i = "local"
//     console.log(i)
// }
// console.log(i)

// let obj = {
//     a: 10,
//     b: () => console.log(this.a, this),
//     c: () => a ** 2
// }
// obj.b();

// let a = 5
// if(a == 5){
//     console.log("si");
// } else {
//     console.log("no");
// }
// console.log(a == 5 ? "si" : "no")

// var simple = a => a > 15 > 15 ? : a
// console.log(simple(16));
// console.log(simple(10));

// var foo = [ "uno", "dos", "tres"]

// var uno = foo[0]
// var dos = foo[1]
// var tres = foo[2]

// var [uno, dos, tres] = foo
// console.log(uni + dos + tres)

var metadata ={
    title: "mi titulo",
    translations: [
        {
            locale: "mx",
            tags: [],
            edit: "2019-08-10"
        },
        {
            locale: "usa",
            tags: [],
            edit: "2019-08-10"
        },
        {
            locale: "aud",
            tags: [],
            edit: "2019-08-10"
        }
    ],
    url: "es-Mx/docs/"
}
var {title: myTitle, translations: [{rLocale}, {locale: rrlocale}]} = metadata

console.log(myTitle);
console.log(rLocale);
console.log(rrlocale);


for (let i = 0; i < metadata.translations.length; i++){
    console.log(metadata.translations[i].locale)
}

metadata.translations.forEach((cd) => {
    console.log(cd.locale, cd.edit)
});
