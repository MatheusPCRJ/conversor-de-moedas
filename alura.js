// Conversor de Dolar para Reais
document.querySelector('#convertaDolar').addEventListener('click', function(event){
    event.preventDefault();

    let valorEmdolar = document.querySelector('#valorDoClienteEmDolar').value;
    let cotacaoDoDolar = 5.32;  

    let valorEmReal = valorEmdolar * cotacaoDoDolar;
        valorEmReal = valorEmReal.toFixed(2)

    document.querySelector('.valorConvertidoEmDolar').innerHTML = valorEmReal

})

// Conversor de Reais para Bitcoin
document.querySelector('#convertaCripto').addEventListener('click', function(event){
    event.preventDefault();

    let valorEmReais = document.querySelector('#valorDoClienteEmCripto').value;
    let bitcoin = 23000.00;

   
    let valorEmReal = valorEmReais / bitcoin;
        valorEmReal = valorEmReal.toFixed(8)

    document.querySelector('.valorConvertidoEmCripto').innerHTML = valorEmReal

})