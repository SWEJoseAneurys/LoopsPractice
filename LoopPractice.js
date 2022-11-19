//Write a for loop that logs 0-15;
console.log("1) Write a for loop that logs 0-15:");
console.log("");

for (i = 0; i < 16; i++){
    console.log(i)
};

console.log("");

//Write a for loop that counts from 15-0;
console.log("2) Write a for loop that counts from 15-0:");
console.log("");

for (i = 15; i > -1; i--){
    console.log(i)
};

console.log("");

//Make variable laps = 0; write a for loop that logs (“that’s another lap!”) and adds 1 to the laps variable. AFTER the loop, log laps.;
console.log("3) Laps:");
console.log("");

let laps = 0;
for (i = 1; i < 6; i++){
    console.log("That's another lap!");
    laps++
};

console.log("Total: " + laps + " laps");

console.log("");