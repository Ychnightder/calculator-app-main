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