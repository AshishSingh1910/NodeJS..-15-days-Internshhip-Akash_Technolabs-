function greet(name , callback){
    console.log('Hi'+ ' '+ name);
    callback();
}
//callback function
function callme(){
    console.log('I am callback function');
}
//parsing function as a argument
greet('Ashish',callme);