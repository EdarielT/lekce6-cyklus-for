// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


// První příklad - vypiš vzestupně čísla od 0 do 10
console.log('První příklad - vzestupná řada 0 - 10');

// let numberRow = () => {
//     for (let i = 0; i <= 10; i++) {
//         console.log(i);
//     }
// }
// numberRow();

let numberRow = () => {
    let i = 0;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}
numberRow();

console.log('------------------');



// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

console.log('Druhý příklad - rozdíl mezi <= a <');

// let numberRowStrict = () => {
//     for (let i = 0; i < 10; i++) {
//         console.log(i);
//     }
// }
// numberRowStrict();
let numberRowStrict = () => {
    let i = 0;
    while (i < 10) {
        console.log(i);
        i++;
    }
}
numberRowStrict();

console.log('-------------------');



// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0');

// let numberRowDown = () => {
//     for (let i = 10; i >=0; i--) {
//         console.log(i);
//     }
// }
// numberRowDown();

let numberRowDown = () => {
    let i = 10;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}
numberRowDown();

console.log('-------------------');