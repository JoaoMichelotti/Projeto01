var navbar = document.getElementById("navbar");
var secao = document.getElementById("secao");

window.addEventListener("scroll", function() {
    var posicao = secao.getBoundingClientRect();

    if(posicao.top < 0) {
        navbar.classList.add("navbar-scroll");
    }
    else {
        navbar.classList.remove("navbar-scroll");
    }
})

function removeClasseSeNecessario() {
    var elemento = document.getElementById('header'); 
    var larguraTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    if (larguraTela <= 992) { // Substitua 768 pelo tamanho desejado
        elemento.classList.remove('col-md-6'); // Substitua 'sua-classe' pelo nome da classe que deseja remover
    } else {
        elemento.classList.add('col-md-6'); // Adicione a classe de volta se a largura da tela for maior que 768 pixels
    }
}

window.onload = removeClasseSeNecessario;

window.onresize = removeClasseSeNecessario;


