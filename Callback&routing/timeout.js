function greet (){
    console.log('its getting to late');
}
function wait(time){
    console.log('i will wait for ' +time+ ' miliseconds');
}
setTimeout(greet,2000);
wait(2000);