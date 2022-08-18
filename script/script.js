const butao = document.getElementById('butao')
const h1 = document.querySelector('#texto')
const frase = "Ola, Meu nome é Henrique Conceição, eu sou Desenvolvedor";
const intervalo = 200

function clicar(event){
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}
butao.addEventListener('click',clicar)
butao.addEventListener('touchstart',clicar)

function digitacao(h1,frase,intervalo){
    const char = frase.split("").reverse();
    const typer = setInterval(() => {
        if(!char.length){
            return h1.innerHTML;
        }
        const next = char.pop();
        h1.innerHTML += next

    }, intervalo);
}
digitacao(h1,frase,intervalo);


