const botao = document.getElementsByName('botao');
    
function clicouMenu() {
    const nave = document.getElementById('nave');
    nave.classList.toggle('active');

    const l1 = document.getElementById('l1');
    l1.classList.toggle('rotate-x');
    const l2 = document.getElementById('l2');
    l2.classList.toggle('rotate-x');
    const l3 = document.getElementById('l3');
    l3.classList.toggle('rotate-y');
}