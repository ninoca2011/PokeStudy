function mostrarPagina(id, botao) {

const paginas = document.querySelectorAll(".pagina");

paginas.forEach(function(pagina) {
pagina.classList.remove("ativa");
});


document.getElementById(id).classList.add("ativa");


const botoes = document.querySelectorAll("nav button");

botoes.forEach(function(item) {
item.classList.remove("active");
});


botao.classList.add("active");
}
