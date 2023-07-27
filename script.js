let string = "";

let buttons = document.querySelectorAll('#calculatorButtons');

Array.from(buttons).forEach((a) => {

    a.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('.screen').value = string;
        }

        else if (e.target.innerHTML == 'C') {
            string = ""
            document.querySelector('.screen').value = string;
        }
        // else if () {

        // }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('.screen').value = string;
        }

    })
})