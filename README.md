# 🏦 Cardify - Automação de Testes

[![Cypress](https://img.shields.io/badge/Cypress-14.5.3-green.svg)](https://www.cypress.io/)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-purple.svg)](https://vitejs.dev/)

## 📋 Sobre o Projeto

O **Cardify** é uma aplicação web moderna para gerenciamento de cartões de crédito, desenvolvida com React e Vite. Este projeto inclui uma suíte completa de testes automatizados usando Cypress para garantir a qualidade e confiabilidade da aplicação.

### 🎯 Funcionalidades Principais

- **Cadastro de Cartões**: Interface intuitiva para adicionar novos cartões
- **Validação em Tempo Real**: Validação de dados do cartão conforme o usuário digita
- **Preview do Cartão**: Visualização em tempo real do cartão sendo cadastrado
- **Suporte a Múltiplos Bancos**: Integração com bancos digitais populares (Nubank, Inter, Neon, C6 Bank, Will Bank)
- **Interface Responsiva**: Design moderno e adaptável para diferentes dispositivos
- **Segurança**: Validação de dados e criptografia para proteção das informações

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca JavaScript para interfaces
- **Vite 5.4.2** - Build tool e dev server
- **Tailwind CSS 3.4.1** - Framework CSS utilitário
- **Lucide React 0.344.0** - Ícones modernos
- **Axios 1.10.0** - Cliente HTTP para requisições

### Testes
- **Cypress 14.5.3** - Framework de testes E2E e Component
- **ESLint 9.9.1** - Linter para JavaScript/React

## 📁 Estrutura do Projeto

```
cardify-dev/
├── cypress/                    # Configurações do Cypress
│   ├── fixtures/              # Dados de teste
│   └── support/               # Comandos customizados
├── src/
│   ├── components/            # Componentes React
│   │   ├── CardPreview.jsx   # Preview do cartão
│   │   ├── Footer.jsx        # Rodapé da aplicação
│   │   └── Header.jsx        # Cabeçalho da aplicação
│   ├── pages/                # Páginas da aplicação
│   │   ├── AddCard.jsx       # Página de cadastro de cartão
│   │   ├── AddCard.cy.jsx    # Testes da página AddCard
│   │   ├── Landing.jsx       # Página inicial
│   │   └── Upgrade.jsx       # Página de upgrade
│   ├── services/             # Serviços de API
│   │   └── cardService.js    # Serviço para operações de cartão
│   ├── utils/                # Utilitários
│   │   ├── bankColors.js     # Cores dos bancos
│   │   ├── cardValidation.js # Validações de cartão
│   │   └── index.js          # Utilitários gerais
│   └── assets/               # Recursos estáticos
│       ├── brands/           # Logos dos bancos
│       └── chip.svg          # Ícone do chip
├── cypress.config.js         # Configuração do Cypress
├── package.json              # Dependências e scripts
└── README.md                 # Este arquivo
```

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd cardify-dev
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute a aplicação em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abra o Cypress para executar os testes**
   ```bash
   npm run cy:open
   ```

## 🧪 Testes Automatizados

### Tipos de Testes

O projeto utiliza **Cypress** para automação de testes, incluindo:

- **Testes de Componente**: Testes isolados de componentes React
- **Testes E2E**: Testes end-to-end simulando interações do usuário
- **Testes de API**: Interceptação e mock de requisições HTTP

### Cenários de Teste Implementados

#### 📝 Página AddCard (`AddCard.cy.jsx`)

1. **Validação de Campos Obrigatórios**
   - Testa se os erros são exibidos quando campos não são preenchidos
   - Valida mensagens de erro específicas para cada campo

2. **Cadastro de Cartão com Sucesso**
   - Preenche formulário com dados válidos
   - Intercepta requisição POST para API
   - Verifica mensagem de sucesso

3. **Validações de Negócio**
   - Nome do titular com menos de 2 caracteres
   - Data de expiração inválida ou vencida
   - CVV com menos de 3 dígitos

### Comandos Customizados do Cypress

```javascript
// Preenche formulário de cartão
cy.fillCardForm(card)

// Submete formulário
cy.submitCardForm()

// Verifica alerta de erro
cy.alertErrorHaveText(expectedText)
```

### Executando os Testes

```bash
# Abrir Cypress em modo interativo
npm run cy:open

# Executar testes de componente
npm run cy:component

# Executar teste específico
npx cypress run --spec "src/pages/AddCard.cy.jsx"
```

## 🔧 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run preview` | Visualiza build de produção |
| `npm run lint` | Executa linter ESLint |
| `npm run cy:open` | Abre Cypress em modo interativo |
| `npm run cy:component` | Executa testes de componente |

---

**Curso desenvolvido com pelo** [Papito](https://www.udemy.com/course/testando-componentes-com-cypress)