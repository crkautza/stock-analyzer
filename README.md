# Stock Analyzer

Sistema de análise de estoque desenvolvido em JavaScript puro, HTML e CSS. O projeto permite filtrar produtos por quantidade e preço, calcular valor total por categoria e adicionar novos itens ao estoque.

## Funcionalidades

- **Filtro por quantidade** – exibe produtos com estoque abaixo do limite definido
- **Filtro por preço** – exibe produtos com valor abaixo do limite definido
- **Valor total por categoria** – calcula e agrupa o valor total (preço × quantidade) de cada categoria
- **Adicionar produtos** – formulário para incluir novos itens ao estoque
- **Limpar textos** – remove os resultados exibidos na tela
- **Limpar limites** – reseta os valores dos inputs de limite
- **Persistência com localStorage** – os dados adicionados permanecem mesmo após recarregar a página

## Tecnologias utilizadas

- HTML5
- CSS3 (layout otimizado para desktop)
- JavaScript (puro, sem frameworks)

## Como usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/crkautza/stock-analyzer.git
   ```
2. Abra o arquivo `index.html` no navegador.
3. Utilize os botões e inputs para filtrar e analisar o estoque.
4. Adicione novos produtos pelo formulário na coluna direita.
5. Os filtros por quantidade e preço dependem dos limites definidos nos inputs correspondentes.

## Estrutura do projeto

```
stock-analyzer/
├── index.html          # Página principal
├── style.css           # Estilos do projeto
├── script.js           # Lógica da aplicação
└── README.md           # Documentação
```

## Exemplo de uso

1. Defina um limite de quantidade (ex: 10) e clique em **Filtrar Stock por quantidade** – serão listados produtos com estoque abaixo de 10.
2. Defina um limite de preço (ex: 20) e clique em **Filtrar Stock por Preço** – serão listados produtos com valor abaixo de 20.
3. Clique em **Valor Total por Categoria** para visualizar a soma total de cada categoria.
4. Preencha o formulário e clique em **Atualizar** para adicionar um novo produto.

## Observações

Este projeto teve como foco principal a lógica JavaScript, manipulação de dados e persistência com localStorage. A interface é otimizada para desktop, não sendo responsiva para dispositivos móveis.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**GitHub:** [github.com/crkautza](https://github.com/crkautza)  
**LinkedIn:** [linkedin.com/in/crkautza](https://www.linkedin.com/in/crkautza)