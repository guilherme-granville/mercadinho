// Função para mostrar os produtos do setor
function mostrarProdutos(setorId) {
    // Esconde todos os produtos
    const produtosDiv = document.getElementById('produtos');
    produtosDiv.style.display = 'block'; // Torna visível a seção de produtos

    let produtosHTML = `<h3>Produtos do ${setorId}</h3>`; // Título dinâmico baseado no setor

    // Simulação de produtos para cada setor
    const produtos = [
        {
            setor1: [
                { nome: 'Produto A', descricao: 'Descrição A', img: 'https://via.placeholder.com/200' },
                { nome: 'Produto B', descricao: 'Descrição B', img: 'https://via.placeholder.com/200' },
                { nome: 'Produto C', descricao: 'Descrição C', img: 'https://via.placeholder.com/200' }
            ],
            setor2: [
                { nome: 'Produto D', descricao: 'Descrição D', img: 'https://via.placeholder.com/200' },
                { nome: 'Produto E', descricao: 'Descrição E', img: 'https://via.placeholder.com/200' },
                { nome: 'Produto F', descricao: 'Descrição F', img: 'https://via.placeholder.com/200' }
            ],
            setor3: [
                { nome: 'Produto G', descricao: 'Descrição G', img: 'https://via.placeholder.com/200' },
                { nome: 'Produto H', descricao: 'Descrição H', img: 'https://via.placeholder.com/200' },
                { nome: 'Produto I', descricao: 'Descrição I', img: 'https://via.placeholder.com/200' }
            ],
            setor4: [
                { nome: 'Produto J', descricao: 'Descrição J', img: 'https://via.placeholder.com/200' },
                { nome: 'Produto K', descricao: 'Descrição K', img: 'https://via.placeholder.com/200' },
                { nome: 'Produto L', descricao: 'Descrição L', img: 'https://via.placeholder.com/200' }
            ],
            setor5: [
                { nome: 'Produto M', descricao: 'Descrição M', img: 'https://via.placeholder.com/200' },
                { nome: 'Produto N', descricao: 'Descrição N', img: 'https://via.placeholder.com/200' },
                { nome: 'Produto O', descricao: 'Descrição O', img: 'https://via.placeholder.com/200' }
            ],
            setor6: [
                { nome: 'Produto P', descricao: 'Descrição P', img: 'https://via.placeholder.com/200' },
                { nome: 'Produto Q', descricao: 'Descrição Q', img: 'https://via.placeholder.com/200' },
                { nome: 'Produto R', descricao: 'Descrição R', img: 'https://via.placeholder.com/200' }
            ]
        }
    ];

    // Adicionando os produtos ao HTML
    produtos[setorId].forEach(produto => {
        produtosHTML += `
            <div class="produto">
                <img src="${produto.img}" alt="${produto.nome}">
                <h4>${produto.nome}</h4>
                <p>${produto.descricao}</p>
            </div>
        `;
    });

    produtosDiv.innerHTML = produtosHTML;
}
