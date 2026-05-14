# Futstack - E-commerce de Artigos Esportivos

Um e-commerce completo e moderno focado em artigos esportivos, inspirado em grandes players do mercado como a Centauro. O objetivo é proporcionar uma experiência de compra rápida, intuitiva e focada na jornada do esportista.

## 🎯 Visão Geral do Projeto

A plataforma "Futstack" visa ser um destino único para compra de calçados, roupas, acessórios e equipamentos esportivos. O diferencial competitivo será a excelente experiência do usuário (UX), busca inteligente, facilidade no checkout e design responsivo (Mobile First).

## 🚀 Stack Tecnológica Atual

- **Frontend:** React + Vite
- **Estilização:** CSS Vanilla / Tailwind CSS (a definir)
- **Gerenciamento de Estado:** Redux Toolkit ou Zustand
- **Roteamento:** React Router DOM
- **Integração de APIs:** Axios ou React Query

*(Nota: O backend e banco de dados deverão ser definidos de acordo com a arquitetura escolhida, ex: Node.js/NestJS + PostgreSQL).*

## ✨ Funcionalidades Principais (Core Features)

### 1. Catálogo e Descoberta de Produtos
- **Navegação Multicanal:** Categorização por Esporte (Futebol, Corrida, Basquete), Gênero, Marca e Tipo de Produto.
- **Filtros Avançados:** Filtragem lateral dinâmica por Tamanho, Cor, Faixa de Preço, Marca e Avaliações.
- **Busca Inteligente:** Barra de busca com *autocomplete*, sugestão de termos e tolerância a erros de digitação.
- **Página de Produto (PDP):** Galeria de imagens, seletor de variações (cor/tamanho), guia de tamanhos, produtos relacionados ("Quem viu, viu também") e avaliações de clientes.

### 2. Carrinho e Checkout
- **Carrinho Lateral (Mini-cart):** Visualização rápida dos itens sem sair da página atual.
- **Cálculo de Frete:** Estimativa de frete direto na página do produto e no carrinho.
- **Checkout Transparente:** Processo de compra em página única (Single Page Checkout) para maior taxa de conversão.
- **Múltiplos Meios de Pagamento:** Cartão de crédito, Pix e boleto.

### 3. Área do Cliente (Minha Conta)
- **Autenticação:** Login via e-mail/senha e Social Login (Google, Facebook).
- **Meus Pedidos:** Histórico de compras, status e rastreamento de entrega.
- **Lista de Desejos (Wishlist):** Opção para favoritar produtos para compras futuras.
- **Meus Dados:** Gerenciamento de endereços e cartões salvos.

## 📱 Estrutura de Páginas

1. **Home:** Banners promocionais rotativos, categorias em destaque, vitrines de "Lançamentos" e "Mais Vendidos".
2. **Página de Categoria/Busca (PLP - Product Listing Page):** Grid de produtos com barra de filtros e ordenação (Preço, Relevância).
3. **Página de Produto (PDP - Product Details Page):** Detalhes completos e botão de Call-to-Action (Comprar).
4. **Carrinho de Compras:** Resumo do pedido.
5. **Checkout:** Identificação, Endereço, Pagamento e Confirmação.
6. **Institucional:** Sobre nós, Política de Trocas, Dúvidas Frequentes (FAQ), Atendimento.

## ⚙️ Requisitos Não-Funcionais

- **Responsividade (Mobile First):** A maior parte do tráfego será via mobile, logo a interface deve ser impecável em smartphones.
- **Performance (SEO & Core Web Vitals):** Imagens otimizadas (WebP), Lazy Loading, e renderização rápida para indexação orgânica no Google.
- **Acessibilidade:** Conformidade básica com diretrizes de acessibilidade para garantir que todos possam comprar.

## 🔌 Integrações Futuras (Roadmap Backend)

Para o pleno funcionamento do padrão "Centauro", o sistema precisará integrar com:
- **Gateway de Pagamento:** Stripe, Mercado Pago ou Pagar.me.
- **Logística e Frete:** Correios, Melhor Envio ou APIs de transportadoras.
- **ERP / Estoque:** Sincronização em tempo real para evitar venda de produtos sem estoque.
- **CRM / Marketing:** Ferramentas para envio de e-mails de carrinho abandonado e promoções.

---

## 🛠️ Como rodar o projeto localmente

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse no navegador: `http://localhost:5173`
