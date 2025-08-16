let amigos=[];
let campoValor=document.getElementById('amigo');
let seccionListado = document.querySelector(".Listado-amigos");

function agregarAmigo(){



    if (campoValor.value==''){
        alert('Por favor ingresar nombre valido');
    }else 
        if(amigos.includes(campoValor.value)){
            alert('Verificar, nombre se encuentra en lista de amigos');
        }else{
            amigos.push((campoValor.value).toUpperCase());
            mostrarLista((campoValor.value).toUpperCase());
            console.log(amigos);

    }
}

function mostrarLista(nombre){

    let li = document.createElement("li");
    let lista = document.getElementById("listaAmigos");

    campoValor.value='';


    if (!document.querySelector(".Listado-amigos h2")) {
        let titulo = document.createElement("h2");
        titulo.textContent = "Amigos";
        seccionListado.appendChild(titulo);
    }

    li.textContent = nombre;
    lista.appendChild(li);

}


function sortearAmigo(){
let aleatorioAmigo=amigos[Math.floor(Math.random()*amigos.length)];

    if (amigos.length<2){
        alert('Falta ingresar, integrantes para sorteo de amigo secreto');
    }else{
        asignarTextoElemento('resultado',aleatorioAmigo);
    }
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML=texto;
    return;
}
