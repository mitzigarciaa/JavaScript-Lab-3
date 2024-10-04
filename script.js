//step 1
let colors = ["pink", "blue", "red", "yellow", "purple"];

console.log(colors," - This is the color array");


//step 2
let colors = ["pink", "blue", "red", "yellow", "purple"];

console.log(colors.at(0))
console.log(colors.at(2))
console.log(colors.at(-1))


//step 3
let colors = ["pink", "blue", "red", "yellow", "purple"];
console.log(colors.length); 


//step 4
//pop()
let colors = ["pink", "blue", "red", "yellow", "purple"];
let lastColors = colors.pop();
console.log(lastColors);
console.log(colors);

//push()
let colors = ["pink", "blue", "red", "yellow", "purple"];
colors.push("green");
console.log(colors);

//unshift()
let colors = ["pink", "blue", "red", "yellow", "purple"];
colors.unshift("orange")
console.log(colors)

//splice()
let colors = ["pink", "blue", "red", "yellow", "purple"];
colors.splice(2,1,"cyan")
console.log(colors)


//step 5
//loop
let colors = ["pink", "blue", "red", "yellow", "purple"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}


//step 6
let colors = ["pink", "blue", "red", "yellow", "purple"];

const [firstColors, secondColors, ...restColors] = colors;

console.log(firstColors);
console.log(secondColors);
console.log(restColors);