  const mostrarTabuada = document.getElementById('btn-tabuada');
  
  mostrarTabuada.addEventListener('click', () => {
    let numeroDaTabuada = Number(document.getElementById('numero-tabuada').value);

    let graficoTabuada = document.querySelector('#tabuada')
    graficoTabuada.innerHTML = ''

    for(let n = 0; n <= 10; n++){
      
      let resultado = numeroDaTabuada * n
      let option = document.createElement('option')
      
      option.text = `${numeroDaTabuada} x ${n} = ${resultado}`  
      graficoTabuada.appendChild(option);

      if (n < 10) {
        graficoTabuada.appendChild(document.createElement('br'));
      }
    }
   
  });
  