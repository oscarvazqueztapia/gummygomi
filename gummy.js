const p = document.getElementById("parrafo")
const p2 = document.getElementById("parrafo2")


p.innerText = "Esto es un texto simple"
p2.innerHTML = "<h2>Esto es inserción de <code>html</code></h2>"
<p id="parrafo"></p>

<p id="parrafo2"></p>

const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const sumar = document.getElementById('sumar');
let resultado = document.getElementById('resultado');

sumar.addEventListener('click', () => {
  let v1 = parseInt(value1.value)
  let v2 = parseInt(value2.value)
  
  console.log(v1+v2)
  
  resultado.value = v1 + v2;
});
<input id="value1">
<input id="value2">
<button id="sumar">Sumar</button>
<input id="resultado" value=""></input>
