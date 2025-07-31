// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];



function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    console.log(amigos);
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }else{
        amigos.push(nombreAmigo);
        alert(`Se agrego el amigo ${nombreAmigo} a la lista.`);
        document.getElementById("amigo").value = "";
    }
}