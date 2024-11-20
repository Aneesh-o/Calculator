function display(Num) {
    textSpace.value += Num
}
function result(){
    textSpace.value = eval(textSpace.value)
}
// slice can remove last eleemnt in a string
function remove(){
    textSpace.value = textSpace.value.slice(0,-1)
}
function zero(){
    textSpace.value = " "
}
function calculation(operator){
    const textSpace = document.getElementById('textSpace'); 
    const currentValue = textSpace.value; 
    if (!['+', '-', '*', '/'].includes(currentValue.slice(-1))) { textSpace.value += operator; } 
}