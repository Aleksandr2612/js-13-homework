// №1

// function Persone(name, id, age) {
//     this.fullName = {
//             name: name,
//             id: id,

//         },
//         this.age = age
// }
// let personVadim = new Persone("Vadim", "d13091983", 21);

// Object.prototype.sayHello = () => {
//     console.log("Hello from prototype");
// }
// console.log(personVadim);




// №2 

// let manchesterUnited = {
//     forvard: "Rashford",
//     age: 27,
//     stadium: "Old Trafford",
//     defender: "Mackguair",
//     lastWinner() {
//         // console.log("English Premier Leauge");
//         console.log(this);
//     }
// }



// let arsenal = {
//         linebacker: "Walbek",
//         age: 31,
//         stadium: "Emiraites",
//         __proto__: manchesterUnited,

//     }
//     // console.log(arsenal.defender);

// let nationalTeam = {
//     coach: "Rodgers",
//     age: 62,
//     progress: {
//         worldCup: true,
//         chempionsLeag: true,
//     },
//     __proto__: arsenal,
//     // __proto__: manchesterUnited,
// }

// // console.log(nationalTeam.forvard);
// console.log(nationalTeam.lastWinner());
// console.log(arsenal.lastWinner());
// console.log(manchesterUnited.lastWinner());




// №3



// let manchesterUnited = {
//     forvard: "Rashford",
//     stadium: "Old Trafford",
//     defender: "Mackguair",
//     lastWinner() {
//         console.log("English Premier Leauge");
//     }
// }

// let secondTeamMu = Object.create(manchesterUnited);
// console.log(secondTeamMu);
// console.log(Object.getPrototypeOf(secondTeamMu));