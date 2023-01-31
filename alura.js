document.querySelector('#convertaDolar').addEventListener('click', function(event){
    event.preventDefault();

    let valorEmdolar = document.querySelector('#valorDoClienteEmDolar').value;
    let cotacaoDoDolar = 5.32;  

    let valorEmReal = valorEmdolar * cotacaoDoDolar;
        valorEmReal = valorEmReal.toFixed(2)

    document.querySelector('.valorConvertidoEmDolar').innerHTML = valorEmReal

})

document.querySelector('#convertaCripto').addEventListener('click', function(event){
    event.preventDefault();

    let valorEmdolar = document.querySelector('#valorDoClienteEmCripto').value;
    let cotacaoDoDolar = 23157.80;

    let valorEmReal = valorEmdolar * cotacaoDoDolar;
        valorEmReal = valorEmReal.toFixed(2)

    document.querySelector('.valorConvertidoEmCripto').innerHTML = valorEmReal

})

