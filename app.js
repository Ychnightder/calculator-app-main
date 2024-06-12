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

 const operations = {
    add: (a, b) => a + b,
    mul: (a, b) => a * b,
    sub: (a, b) => a - b,
    div: (a,b) => a / b,
 }


 function equals() {
    let a = null;
    let b = null;
    
    function buttonClick(event) {
        const targetValue = parseInt(event.target.getAttribute('data-value'), 10);
        if (a === null) {
            a = targetValue;
        } else if (b === null) {
            b = targetValue;
        }
        // Mise à jour de l'affichage
        screen_calculator_input.value = `a: ${a}, b: ${b}`;
    }
    
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('click', buttonClick);
    });

    // Déclaration de la variable pour stocker le résultat
    let result = 0;

    // Récupération de l'opérateur à partir de l'input
    const operator = screen_calculator_input.value.split(" ")[1];

    // Vérification de l'opérateur et exécution de l'opération correspondante
    if (operator === "+") {
        result = operations.add(a, b);
    } else if (operator === "-") {
        result = operations.sub(a, b);
    } else if (operator === "x") {
        result = operations.mul(a, b);
    } else if (operator === "/") {
        if (b !== 0) {
            result = operations.div(a, b);
        } else {
            result = "Erreur: Division par zéro";
        }
    }

    // Affichage du résultat dans l'input
    screen_calculator_input.value = result;
}

 let equal = document.querySelector('.equal').addEventListener('click', equals)