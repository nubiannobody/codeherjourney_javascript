// What will the following code print to the console?

let sayHello = 'Hi there';
const sayGoodbye = 'Goodbye';

const speakSpanish = () => {
    sayHello = 'Hola!'; 
    sayGoodbye = 'Adios';
    console.log(sayHello); // Hola!
    console.log(sayGoodbye); // error can't rename const
};

speakSpanish();