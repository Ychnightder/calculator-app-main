let paragraph_option = document.querySelectorAll(".container_number p")
let input_range = document.querySelector("#option")

function clickOption(event){
    if (event.target.textContent.trim() === "1"){
        input_range.value = 0
    }else if (event.target.textContent.trim() === "2"){
        input_range.value = 1
    }
    else{
        input_range.value = 2
    }
}
paragraph_option.forEach(p => {
    p.addEventListener('click',clickOption)
})

let screen_calculator_input = document.querySelector("#screen_calculator_input");


function validateNumbersOnly(event){
    const keypress = event.key 
    if(/\d/.test(keypress)){
        return true
    }else{
        event.preventDefault()
        return false
    }
}
screen_calculator_input.addEventListener('keypress',validateNumbersOnly)

let btn_body = document.querySelectorAll('.btn')

function writeBtncontinute(event) {
    const targetWrite =  event.target.getAttribute('data-value');
    screen_calculator_input.value += targetWrite;
 }
 
 btn_body.forEach(btn => {
     btn.addEventListener('click', writeBtncontinute);
 });

 let supp = document.querySelector('.del')
 supp.addEventListener('click', function suppr() {
    const currentValue =   screen_calculator_input.value 
    if (currentValue.length > 0) {
        const newValue = currentValue.slice(0, -1);
        screen_calculator_input.value = newValue;
    }
 })
 let reset = document.querySelector('.reset')
 reset.addEventListener('click', function resetAll(){
    screen_calculator_input.value = "";
 })

 