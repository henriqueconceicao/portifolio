const butao = document.getElementById('butao')
const h1 = document.querySelector('#texto')
const frase = "Ola, Meu nome é Henrique Conceição, eu sou Desenvolvedor";
const h2 = document.querySelector('#texto2')
const frase2 = "Meus Projetos";
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

function digitar(h2,frase2,intervalo){
    const char = frase2.split("").reverse();
    const typer = setInterval(() => {
        if(!char.length){
            return h2.innerHTML;
        }
        const next = char.pop();
        h2.innerHTML += next

    }, intervalo);
}

digitar(h2,frase2,intervalo);


const abrir = document.querySelector('#contato');
const fechar = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

const toggleModal = () =>{
    [modal,fade].forEach((el) => el.classList.toggle("hide"));
    
};

[abrir,fechar,fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});




