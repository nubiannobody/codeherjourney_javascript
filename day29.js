/* Have you come across nested loops in JavaScript?
What will the following code print to the console? */

let amberTechStack = ['JavaScript', 'React', 'Python', 'CSS'];
let jessieTechStack = ['Python', 'Django', 'React'];
let mutualTechStack = [];

for (let i = 0; i < amberTechStack.length; i++) {
    for (let j = 0; j < jessieTechStack.length; j++) {
        if(amberTechStack[i] === jessieTechStack[j]) {
            mutualTechStack.push(amberTechStack[i]);
        }
    }
}

console.log(mutualTechStack);