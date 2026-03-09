//Elements
let filtrarBtn = document.getElementById('filtrarMin');
let limiteBtn = document.getElementById('limite');
let promocaoBtn = document.getElementById('promocao');
let amountInput = document.getElementById('amountInput');
let priceInput = document.getElementById('priceInput');
let categoriaBtn = document.getElementById('categoriaBtn');
let categoriaList = document.getElementById('categoriaList');
let limparBtn = document.getElementById('limparBtn');
let limparLimiteBtn = document.getElementById('limparLimiteBtn');
//Elements - form
let produtosNome = document.getElementById('produtosNome');
let produtosPreco = document.getElementById('produtosPreco');
let produtosQuantidade = document.getElementById('produtosQuantidade');
let produtosCategoria = document.getElementById('produtosCategoria');
let atualizar = document.getElementById('atualizar');

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
limparBtn.addEventListener('click', limpar);
limparLimiteBtn.addEventListener('click', limparLimite);
atualizar.addEventListener('click', addProduto);

getItem();

//Functions
function filtrarMinStock(){
    limpar();
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
        let titulo = `Itens do Stock com quantidade menor que ${amountlimit}:`
        renderizarLista(titulo, quantidades);
        filtrarBtn.disabled = true;
        console.log('Quantidades:', quantidades);
        quantidades = [];
    }else{
        exibirTodosProdutos('quantidade');
    }
}

function filtrarpreco(){
    limpar();
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
        let titulo = `Itens do Stock com preço abaixo de R$ ${pricelimit}:`
        renderizarLista(titulo, precos);
        promocaoBtn.disabled = true;
        console.log('Preços:', precos);
        precos = [];
    }else{
        exibirTodosProdutos('preço');
    }
}

function ValorTotalPorCategoria(){
    limpar();
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
    categoriaList.innerHTML = '';
    h2 = document.createElement('h2');
    h2.textContent = 'Total por Categoria'
    categoriaList.appendChild(h2);
    for (const categoria in categorias) {
        item = document.createElement('p');
        item.textContent = `${categoria}: R$ ${categorias[categoria].toFixed(2)}`;
        categoriaList.appendChild(item);
    }
    categoriaBtn.disabled = true;
    categorias = {};
}

function exibirTodosProdutos(nome){
    let titulo = `Selecione um limite, listando todos os produtos sem limite de ${nome}:`
    renderizarLista(titulo, produtos);
}

function definirLimite(){
    if(amountInput.value){
        if(amountInput.value != amountlimit){
            filtrarBtn.disabled = false;
        }
        amountlimit = parseInt(amountInput.value);
    }
    if(priceInput.value){
        if(priceInput.value != pricelimit){
            promocaoBtn.disabled = false;
        }
        pricelimit = parseInt(priceInput.value);
    }
}

function limpar() {
    if (categoriaList.textContent) {
        categoriaList.innerHTML = '';
        categoriaBtn.disabled = false;
        filtrarBtn.disabled = false;
        promocaoBtn.disabled = false;
    }
}

function limparLimite() {
    limpar();
    amountlimit = 0;
    amountInput.value = '';
    pricelimit = 0;
    priceInput.value = '';  
}

function renderizarLista(titulo, array) {
    categoriaList.innerHTML = '';
    h2 = document.createElement('h2');
    h2.textContent = `${titulo}`
    categoriaList.appendChild(h2);
    array.forEach((value) => {
        item = document.createElement('p');
        item.textContent = `${value.nome} - R$ ${value.preco.toFixed(2)}, Qtd - ${value.quantidade}, Categoria: ${value.categoria}`;
        categoriaList.appendChild(item);
    });
}

function addProduto(){
    let nome = produtosNome.value;
    let preco = produtosPreco.value;
    let quantidade = produtosQuantidade.value;
    let categoria = produtosCategoria.value;
    console.log(nome, preco, quantidade, categoria);
        localStorage.clear();
        if(nome && preco && quantidade && categoria){
        preco = parseFloat(preco);
        quantidade = parseInt(quantidade);
        if (produtos.length >= 12) {
            localStorage.removeItem('Produtos');
            produtos = [];
        }
        produtos.push({
        nome: nome,
        preco: preco,
        quantidade: quantidade,
        categoria: categoria
        });
        localStorage.setItem('Produtos', JSON.stringify(produtos));
    }
}

function getItem(){
    let produtosSalvos = localStorage.getItem('Produtos');
    if (produtosSalvos) {
        produtos = JSON.parse(produtosSalvos);
    }
}