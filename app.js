        let paragraph_option = document.querySelectorAll(".container_number p");
        let input_range = document.querySelector("#option");
        let screen_calculator_input = document.querySelector("#screen_calculator_input");
        let btn_body = document.querySelectorAll('.btn');

        // Function to handle paragraph clicks
        function clickOption(event) {
            if (event.target.textContent.trim() === "1") {
                input_range.value = 0;
            } else if (event.target.textContent.trim() === "2") {
                input_range.value = 1;
            } else {
                input_range.value = 2;
            }
        }

        paragraph_option.forEach(p => {
            p.addEventListener('click', clickOption);
        });

        // Function to handle button clicks for writing to screen
        function writeBtn(event) {
            let targetWrite = event.target.getAttribute('data-value');
            screen_calculator_input.value += targetWrite;
        }

        btn_body.forEach(btn => {
            if (!btn.classList.contains('del') && !btn.classList.contains('equal') && !btn.classList.contains('reset')) {
                btn.addEventListener('click', writeBtn);
            }
        }); 

        // Function to handle equals
        function equals() {
            try {
                screen_calculator_input.value = eval(screen_calculator_input.value);
            } catch (error) {
                screen_calculator_input.value = "Error";
            }
        }

        document.querySelector('.equal').addEventListener('click', equals);

        // Function to handle delete
        document.querySelector('.del').addEventListener('click', function() {
            const currentValue = screen_calculator_input.value;
            if (currentValue.length > 0) {
                screen_calculator_input.value = currentValue.slice(0, -1);
            }
        });

        // Function to handle reset
        document.querySelector('.reset').addEventListener('click', function() {
            screen_calculator_input.value = "";
        });