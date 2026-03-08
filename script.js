//Elements
let filtrarBtn = document.getElementById('filtrarMin');
let limiteBtn = document.getElementById('limite');
let promocaoBtn = document.getElementById('promocao');
let amountInput = document.getElementById('amountInput');
let priceInput = document.getElementById('priceInput');
let categoriaBtn = document.getElementById('categoriaBtn');

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

let amountlimit = 0;
let pricelimit = 0;
let quantidades = [];
let precos = [];
let categorias = {};

//Event Listener
filtrarBtn.addEventListener('click', filtrarMinStock);
limiteBtn.addEventListener('click', definirLimite);
promocaoBtn.addEventListener('click', filtrarpreco);
categoriaBtn.addEventListener('click', ValorTotalPorCategoria);

//Functions
function filtrarMinStock(){
    if(amountlimit > 0){
        produtos.forEach((value) => {
            let nome = Object.values(value)[0];
            let preco = Object.values(value)[1];
            let quantidade = Object.values(value)[2];
            let categoria = Object.values(value)[3];
            if(quantidade < amountlimit){
                quantidades.push({
                    nome: nome,
                    preco: preco,
                    quantidade: quantidade,
                    categoria: categoria
                });
            }
        });
        console.log('Quantidades:', quantidades);
        quantidades = [];
    }else{
        console.log('Produtos:', produtos);
    }
}

function filtrarpreco(){
    if(pricelimit > 0){
        produtos.forEach((value) => {
            let nome = Object.values(value)[0];
            let preco = Object.values(value)[1];
            let quantidade = Object.values(value)[2];
            let categoria = Object.values(value)[3];
            if(preco < pricelimit){
                precos.push({
                    nome: nome,
                    preco: preco,
                    quantidade: quantidade,
                    categoria: categoria
                });
            }
        });
        console.log('Preços:', precos);
        precos = [];
    }else{
        console.log('Produtos:', produtos);
    }
}

function ValorTotalPorCategoria(){
        produtos.forEach((value) => {
            let preco = Object.values(value)[1];
            let quantidade = Object.values(value)[2];
            let categoria = Object.values(value)[3];
            let valorTotal = preco * quantidade;
            if (categorias[categoria]) {
                categorias[categoria] += valorTotal;
            }else{
                categorias[categoria] = valorTotal;
            }
        });
        console.log('Categorias:', categorias);
        categorias = {};
}

function definirLimite(){
    if(amountInput.value){
        amountlimit = parseInt(amountInput.value);
    }
    if(priceInput.value){
        pricelimit = parseInt(priceInput.value);
    }
}