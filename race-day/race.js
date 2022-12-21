let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 17;

if (age >= 19 && registeredEarly) {
  raceNumber += 1000;
}
if (age >= 19 && registeredEarly) {
  console.log(`Number ${raceNumber}, you will race at 9:30 am!`);
}
else if (age >= 19 && !registeredEarly) {
  console.log(`Number ${raceNumber}, you will race at 11:00 am!`);
}
else if (age === 18) {
  console.log(`Please go to the registration desk!`)
}
else {
  console.log(`Number ${raceNumber}, you will race at 12:30 pm!`);
}