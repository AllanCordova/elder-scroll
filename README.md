# 🎮 Projeto RPG em TypeScript

Este é um projeto de jogo **RPG em linha de comando**, desenvolvido em **TypeScript** com **Programação Orientada a Objetos** e arquitetura **MVC (Model-View-Controller)**. O objetivo é proporcionar uma estrutura sólida e escalável para jogos de RPG simples.

## 📁 Estrutura do Projeto

O projeto está dividido conforme o padrão **MVC**:

### 🔷 Model

Contém as classes responsáveis pela lógica do jogo:

- `Persona`: Classe base para personagens.
- `Player`: Herda de `Persona`, representa o jogador.
- `Enemy`: Herda de `Persona`, representa os inimigos.
- `Battle`: Gerencia as batalhas entre jogadores e inimigos.

### 🔶 View

Responsável pela interface com o usuário (via console):

- `ViewBattle`: Interface de exibição das batalhas.
- `ViewMenu`: Exibe menus principais e de navegação.
- `ViewPerson`: Usa o Cntrol, para permitir a criação dinâmica de perssonagems.
- `ViewConsole`: Controla as interações via terminal.

### 🟩 Controller

Gerencia o fluxo do jogo e liga os modelos às views:

- `BattleController`: Controla a lógica das batalhas.
- `MenuController`: Controla a navegação pelos menus.
- `PersonaController`: Gerencia os personagens.

## 🚀 Tecnologias Utilizadas

- **TypeScript**
- **Node.js**
- **Programação Orientada a Objetos (POO)**
- **MVC**

## ▶️ Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/AllanCordova/elder-scroll.git
2. Instale as dependências:
     ```bash
     npm install
3. Compile o TypeScript:
     ```bash
     tsc
4. Execute o Jogo:
     ```bash
     node dist/index.js

