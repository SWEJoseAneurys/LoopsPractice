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

//Make variable age. Make a loop from 0-100. In every loop check if i == age, if so log something, else say “age doesn’t match”.;
console.log("4) Age:");
console.log("");

let age = 18;
for (i = 1; i < 101; i++){
    if (i == age){
        console.log("We're the same age!")
    } else {
        console.log("We're not the same age.")
    }
};

console.log("");

//Write a loop that logs all even numbers from 0-700.;
console.log("5)Even #s Loop:");
console.log("");

let a = 0;

while (a < 700){
    a++;
    if (a % 2 === 0){
        console.log(a)
    }
};

console.log("");

//Write a loop that logs all odd numbers from 0-700.;
console.log("6)Odd #s Loop:");
console.log("");

let b = -1;

while (b < 698){
    b+=2;{
        console.log(b)
    }
};

console.log("");

//Write a loop with some “if else” statements. The loop should start at 1900 and go to 1949 and log when things were invented. 
//For example when i = 1902 the code should log “it is 1902 - the teddy bear is invented!”;
console.log("7) Years of Inventions!");
console.log("");

for (i = 1900; i < 1950; i++){
    if (i == 1900){
        console.log("It's " + i + " - the year the Zeppelin was invented!")
    } else if (i == 1902){
        console.log("It's " + i + " - the year the Teddy Bear was invented!")
    } else if (i == 1910){
        console.log("It's " + i + " - the year the Talking Motion Picture was invented!")
    } else if (i == 1913){
        console.log("It's " + i + " - the year the Bra was invented!")
    } else if (i == 1918){
        console.log("It's " + i + " - the year the Fortune Cookie was invented!")
    } else if (i == 1923){
        console.log("It's " + i + " - the year the Traffic Signal was invented!")
    } else if (i == 1935){
        console.log("It's " + i + " - the year the Radar was invented!")
    } else if (i == 1938){
        console.log("It's " + i + " - the year the Ballpoint Pen was invented!")
    } else if (i == 1943){
        console.log("It's " + i + " - the year the Slinky was invented!")
    } else {
        console.log(i)
    }
};

console.log("");