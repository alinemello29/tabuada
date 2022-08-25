let value = document.querySelector('div.container input');
let multiplicationTable = document.querySelector('div.container div.tabuada');
const  calculate = document.querySelector('div.container button');


calculate.addEventListener('click', () =>{
    if(Number (value.value )< 1 || Number (value.value) > 12){
        multiplicationTable.innerHTML = 'Insira um valor no intervalo de 1 a 12'

    }else{
            for(i = 1; i <= 12; i++){
                let calc = String (i ) + ' x ' + value.value + ' = ' + i * Number(value.value)

                let result = document.createElement('p')
                result.innerText = calc

                multiplicationTable.appendChild(result)
            }

    
    }
})
