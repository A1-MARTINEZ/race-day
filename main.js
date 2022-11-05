// RACE DAY

let raceNumber = Math.floor(Math.random() * 1000);

const earlyBird = false;
const age = 17;

if (age >= 18 && earlyBird === true){
    console.log(raceNumber + 1000)
}
if (age >= 18 && earlyBird === true){
    console.log('You will run at 09:30am')
}
if (age < 18){
    console.log(raceNumber + 1000)
    console.log('You will run at 12:30pm')
}
else if (age >= 18 && earlyBird === false){
    console.log(raceNumber + 1000)
    console.log('You will run at 11:00am')
}
