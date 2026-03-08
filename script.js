//Elements
let filtrarBtn = document.getElementById('filtrarMin');
let limiteBtn = document.getElementById('limite');
let input = document.getElementsByTagName('input')[0];

//Vars & Arrays
let produtos = [
    {
        nome: 'Arroz',
        preco: 25.90,
        quantidade: 15,
        categoria: 'Alimentos',
    },
    {
        nome: 'Feijão',
        preco: 12.50,
        quantidade: 8,
        categoria: 'Alimentos',
    },
    {
        nome: 'Sabonete',
        preco: 3.75,
        quantidade: 42,
        categoria: 'Higiene',
    },
    {
        nome: 'Shampoo',
        preco: 18.90,
        quantidade: 12,
        categoria: 'Higiene',
    },
    {
        nome: 'Camiseta',
        preco: 45.90,
        quantidade: 5,
        categoria: 'Vestuário',
    },
    {
        nome: 'Calça Jeans',
        preco: 89.90,
        quantidade: 3,
        categoria: 'Vestuário',
    },
    {
        nome: 'Café',
        preco: 15.90,
        quantidade: 0,
        categoria: 'Alimentos',
    },
    {
        nome: 'Pasta de Dente',
        preco: 8.90,
        quantidade: 23,
        categoria: 'Higiene',
    },
];

let limite = 0;
let quantidades = [];

//Event Listener
filtrarBtn.addEventListener('click', filtrarMinStock);
limiteBtn.addEventListener('click', definirLimite);

function filtrarMinStock(){
    console.log(limite);
}

function definirLimite(){
    if(input.value){
        limite = input.value;
    }
}