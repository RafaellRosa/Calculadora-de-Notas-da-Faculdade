









function calcular() {
  let input1 = (document.querySelector('.primeiraNota').value);
  let input2 = (document.querySelector('.segundaNota').value);
  let input3 = (document.querySelector('.terceiraNota').value);
  let input4 = (document.querySelector('.quartaNota').value);
  
  let simulado = document.querySelector('.selector');
  let simulado1 = simulado.value;

  let calculo = ((input1 * 2) + (input2 * 2) + (input3 * 2) + (input4 * 4)) / 10;

  if (simulado1 == 'Sim') {
    calculo = ((input1 * 2) + (input2 * 2) + (input3 * 2) + (input4 * 4) + 0.50) / 10;

  }
  
  

  document.querySelector('.media').innerHTML = `Sua média é: ${calculo}`

  if (calculo >= 7) {
    document.querySelector('.resultado').innerHTML = 'Parabéns, você está na média(7)!';
  } else {
    document.querySelector('.resultado').innerHTML = 'Parabéns, você NÃO está na média!';
  }

  
}