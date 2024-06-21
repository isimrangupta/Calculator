let input = document.querySelector('.inputbox');
let buttons = document.querySelectorAll('button');

let string = "";

let arr = Array.from(buttons);
arr.forEach(btn =>{
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string)
            input.value = string;
        } 
        else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == "DEL"){
            string = string.slice(0, -1)
            input.value = string;
        }
        else {
            string = string + e.target.innerHTML;
            input.value = string;
        }
    })
})
