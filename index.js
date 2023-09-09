// Import stylesheets
import './style.css';
let lista = [
  [12, 23, 34, 456, 68, 68],
  [29, 85, 67, 67, 98, 89],
];

let diagonalPrincipal = [];


function getDiagonalPrincipal() {
  for(let i = 0; i< lista.length; i++) {
    diagonalPrincipal.push(lista[i][i]);
  }
}

/**
 * Función para mostrar resultado
 * @return {void}
 */
 function setAlert() {
  let alert = document.getElementById('alert');
  alert.removeAttribute('hidden');
  alert.innerHTML = `
  <div class="text-break">
    <p>Lista original: [${lista[0].toLocaleString()}], [${lista[1].toLocaleString()}]</p>
    <p>Diagonal principal: ${diagonalPrincipal.toString()}</p>
  </div>
  `;
}


function onInit() {
  getDiagonalPrincipal();
  setAlert();
}

onInit();