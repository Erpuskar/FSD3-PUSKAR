const EventEmitter = require('events');
const myEmitter = new EventEmitter();
//.on() is listeners for the events
//.emit() is used to trigger the events 
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome to Node.js EventEmitter.`);
    });
    myEmitter.on('exit', () => {
    console.log('Exiting the application. Goodbye!');
    
    });
    // Emit the 'greet' event
    myEmitter.emit('greet', '2nd year student');
    
    // Emit the 'exit' event
    myEmitter.emit('exit');