let js = 'amazing'
if(js==='amazing') alert('Javascript is fun');
console.log(64+10+23-10);
const wMark = 78;
const hMark = 1.69;
const wJohn = 92;
const hJohn = 1.95;

const BMIMark = wMark / (hMark ** 2);
const BMIJohn = wJohn / (hJohn ** 2);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
if(markHigherBMI)
{
    console.log(`Mark's BMI(${BMIMark})  is higher than John's(${BMIJohn})`);
}
else
{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's(${BMIMark})`);
}

const dolScore =  (96 + 108 + 89) / 3;
const kolScore = ( 88 + 91 + 110) / 3;

if(dolScore> kolScore)
{
    console.log("Team Dolphin win the competition!!");
}
else if(kolScore>dolScore)
{
    console.log("Teamp Koala win the competition!!");
}
else
{
    console.log("It's a draw");
}

const day = "tuesday";

switch(day){

    case "monday":
        console.log("Do chores");
        break;
    case "tuesday" :
        console.log("Read books");
        console.log("Do coding exercise");
        break;
    case "wednesday":
    case "thursday":
        console.log("Help Dad in gardening");
        console.log("Check emails");
        break;
    case "friday":
        console.log("Go to Jummah");
        break;
    case "saturday":
    case"sunday":
        console.log("Enjoy the weekend");
        break;
    default:
        console.log("Invalid day");

}
// The if-else statement version of the switch statement code above
// if (day === "monday"){
//     console.log("Do chores");
// }
// else if (day === "tuesday")
// {
//     console.log("Read books");
//     console.log("Do coding exercise");
// }
// else if(day === "wednesday" || day === "thursday")
// {
//     console.log("Help Dad in gardening");
//     console.log("Check emails");
// }
// else if(day === "friday")
// {
//     console.log("Go to Jummah");
// }
// else if(day === "saturday" || day ==="sunday")
// {
//     console.log("Enjoy the day");
// }
// else
// {
//     console.log("Not a valid day");
// }
