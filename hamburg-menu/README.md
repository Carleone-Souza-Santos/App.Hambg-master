FatFry 🍟

Bem-vindo ao FatFry, uma aplicação para gerenciar pedidos de alimentos e bebidas de forma simples e intuitiva! Este projeto foi desenvolvido com o objetivo de oferecer uma experiência amigável para usuários e donos de negócios, permitindo o gerenciamento eficiente de produtos e carrinho de compras.

🚀 Funcionalidades
Catálogo de Produtos: Exibe uma lista de produtos (bebidas e alimentos) com informações como nome, descrição, preço e imagem.
Filtro de Produtos: Opção de filtrar itens por tipo (bebidas ou veganos).
Carrinho de Compras: Gerencie os itens adicionados ao carrinho com opções de adicionar, remover e visualizar o total.
Modal de Pagamento: Processo de checkout com seleção de método de pagamento.
Animações: Carrinho com animação de piscar quando itens são adicionados.
Interface Responsiva: Projetada para oferecer uma experiência otimizada em dispositivos móveis e desktops.

🛠️ Tecnologias Utilizadas

Frontend:
React.js
Material-UI (Componentes e estilização)
Styled Components

Backend:
Integração simulada com backend (pode ser estendida para APIs reais).
Outras:
JavaScript ES6+

Estrutura de pastas modularizada para organização de componentes.
📦 Instalação e Execução
Siga os passos abaixo para executar o projeto localmente:

Pré-requisitos
Node.js instalado.
Gerenciador de pacotes npm ou yarn.

Passos
Clone o repositório:
bash
Copiar código
git clone https://github.com/seu-usuario/fatfry.git
cd fatfry

Instale as dependências:
bash
Copiar código
npm install

# ou

yarn install
Inicie o servidor de desenvolvimento:
bash
Copiar código
npm start

# ou

yarn start
Abra o navegador e acesse: http://localhost:3000.

📖 Estrutura do Projeto

bash

src/
├── components/
│ ├── App.js # Componente principal
│ ├── Cart.js # Carrinho de compras
│ ├── Checkout.js # Modal de pagamento
│ ├── MiniModal.js # Modal de opções adicionais
│ ├── ProductList.js # Lista de produtos
│ └── MenuDrawer.js # Filtro lateral
├── data/
│ └── Data.js # Dados dos produtos
├── styles/
│ └── GlobalStyles.js # Estilos globais
├── assets/
│ └── ImgRefreshment/ # Imagens de produtos
└── index.js

🎯 Objetivo
Este projeto foi criado com o objetivo de:

Aprender e aplicar conceitos de React.js e Material-UI.
Desenvolver uma aplicação funcional com boas práticas de programação.
Proporcionar uma base para futuros projetos de e-commerce.

🤝 Como Contribuir

Faça um fork do repositório.
Crie uma branch para sua feature (git checkout -b feature/nome-da-feature).
Faça commit das suas alterações (git commit -m 'Adicionei a feature X').
Envie para a branch principal (git push origin feature/nome-da-feature).
Abra um Pull Request.
