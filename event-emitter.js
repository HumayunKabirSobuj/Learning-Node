
const EventEmitter = require('node:events');
const myEmitter = new EventEmitter();

//listener

myEmitter.on('birthday', ()=> {
    console.log('Happy Birthday to You..');
});

myEmitter.on('birthday', (gift)=> {
    console.log(`I will sent a ${gift}..`);
});
//emit

myEmitter.emit('birthday','watch');