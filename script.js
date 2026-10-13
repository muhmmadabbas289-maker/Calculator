const dispalay = document.getElementById("display");

function appendToDisplay(input){
    dispalay.value += input;
}
function clearDisplay(){
    dispalay.value = ""; 
}
function calculate(){
    dispalay.value =eval(dispalay.value);
}
function calculate(){
    try{
        dispalay.value = eval(dispalay.value);
    }
    catch(error){
        dispalay.value = "Error";
    }
}