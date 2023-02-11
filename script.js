/**
MenuHamburguer - Responsável por controlar a exibição do menu de navegação
@version 1.0.0
Função MenuHamburguer - Controla a exibição do menu de navegação

Obtém o elemento "myLinks" que representa o menu de navegação

Obtém o elemento da classe "icon" e seu elemento filho i que representa o ícone de hambúrguer

Verifica se o menu de navegação está sendo exibido, se sim, esconde e altera o ícone para o padrão

Se não, exibe o menu de navegação e altera o ícone para o X
*/
function MenuHamburguer() {
    var x = document.getElementById("myLinks");
    var icon = document.querySelector('.icon i');
    if (x.style.display === "block") {
    x.style.display = "none";
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
    } else {
    x.style.display = "block";
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
    }
    }
/**
Adiciona um evento de redimensionamento à janela
Verifica se o tamanho da janela é maior ou igual a 770px
Se sim, exibe o menu de navegação
Se não, esconde o menu de navegação
*/
    window.addEventListener("resize", function() {
    if (window.innerWidth >= 770) {
    document.getElementById("myLinks").style.display = "block";
    } else {
    document.getElementById("myLinks").style.display = "none";
    }
    });

    

    /* */
    function scrollToTop() {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
        }

        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.querySelector(".scrollToTop").style.display = "block";
            } else {
            document.querySelector(".scrollToTop").style.display = "none";
            }
            };