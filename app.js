// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];



function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }else{
        amigos.push(nombreAmigo);
        alert(`Se agrego el amigo ${nombreAmigo} a la lista.`);
        document.getElementById("amigo").value = "";
    }
    console.log(amigos);
    mostrarAmigos();
}

function mostrarAmigos() {
    let listAmigos = document.getElementById("listaAmigos");
    listAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
    // amigos.forEach(function(amigo) otra forma de recorrer el array
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listAmigos.appendChild(li);
    };
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }else{
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        document.getElementById("resultado").innerHTML = `<li>${amigoSorteado}</li>`;
    }
}
