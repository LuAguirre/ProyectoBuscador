
const marca = document.getElementById('marca');
const year = document.getElementById('year');
const minimo = document.getElementById('minimo');
const maximo = document.getElementById('maximo');
const puertas = document.getElementById('puertas');
const transmision = document.getElementById('transmision');
const color = document.getElementById('color');

const years = document.createElement('option');
const max = new Date().getFullYear();
const min = max - 10;


for(let i = max; i >  min; i--) {
    const option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.getElementById('year').appendChild(option);
}

const datosBusqueda = {
    marca : '',
    year: '',
    minimo : '',
    maximo: '',
    puertas: '',
    transmision:'',
    color:''
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
});

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;


    filtrarAuto();
});

year.addEventListener('change', e => {
    datosBusqueda.year = (e.target.value);
 
    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = (e.target.value);

    filtrarAuto();
});


maximo.addEventListener('change', e => {
    datosBusqueda.maximo = Number(e.target.value);

    filtrarAuto();
});


puertas.addEventListener('change', e => {
    datosBusqueda.puertas = Number(e.target.value);
  
    filtrarAuto();
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value
    filtrarAuto();
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value
    filtrarAuto();
});

function limpiarHTML() {
    const contenedor = document.getElementById('resultado');


    while(contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

function mostrarAutos(autos){
    limpiarHTML();


    const contenedor = document.getElementById('resultado');

    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
            <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}</p>
        `;
        contenedor.appendChild(autoHTML);
    })
}
function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No hay Resultados'));
    document.getElementById('resultado').appendChild(noResultado);
}

const filtrarAuto = function() {
   const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

   if(resultado.length){
        mostrarAutos(resultado);
   } else {
       noResultado();
   }
}


const filtrarMarca = function(auto) {
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    } 
    return auto;
}
const filtrarYear = function(auto) {
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }
    return auto;
}

const filtrarMinimo = function(auto) {
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}
const filtrarMaximo = function(auto) {
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}
const filtrarPuertas = function(auto) {
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}

const filtrarTransmision = function(auto) {
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    } 
    return auto;
}

const filtrarColor = function(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    } 
    return  auto;
}