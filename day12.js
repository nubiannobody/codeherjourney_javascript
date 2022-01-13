/* Have you seen short circuit evaluation in JavaScript?
What will the following code print to the console? */

let codeEditor = 'VS code';

let choseCodeEditor = codeEditor || 'Web Storm';

console.log(`I usually use ${choseCodeEditor} when developing.`); // VS ode
