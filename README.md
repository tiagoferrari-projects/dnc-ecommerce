# Projeto Ecommerce utilizando React.js com React Router DOM + Vite

Este é um modelo de projeto React.js que utiliza o React Router DOM e o Vite como um gerador de build rápido. O React Router DOM é uma biblioteca de roteamento para React, enquanto o Vite é uma ferramenta de desenvolvimento rápida e otimizada.

## Pré-requisitos

Certifique-se de ter o Node.js instalado em seu sistema antes de prosseguir. O Node.js vem com o npm (Node Package Manager), que será usado para instalar as dependências do projeto.


## Instalação

Instale my-project com npm

```bash
  npm install my-project
  cd my-project
```

## Como começar

1. Clone este repositório para o seu computador ou faça o download do arquivo ZIP.
2. Abra o terminal ou prompt de comando e navegue até o diretório do projeto.
3. Execute o seguinte comando para instalar as dependências do projeto:

```shell
npm install
```

4. Após a conclusão da instalação das dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:

```shell
npm run dev
```

5. O servidor de desenvolvimento será iniciado e você poderá acessar seu projeto em seu navegador no endereço `http://localhost:3000`.

## Estrutura do projeto

Aqui está a estrutura básica de diretórios do projeto:

```
.
├── src
│   ├── components
│   │   ├── Home.js
│   │   └── About.js
│   ├── pages
│   │   ├── NotFound.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── index.css
├── public
│   ├── index.html
│   └── ...
├── ...
└── README.md
```

- O diretório `src` contém os arquivos JavaScript do projeto.
- O diretório `src/components` é onde você pode criar e armazenar seus componentes reutilizáveis.
- O diretório `src/pages` é onde você pode criar e armazenar as páginas do seu aplicativo.
- O arquivo `src/App.js` é o ponto de entrada principal do aplicativo.
- O arquivo `src/index.js` é o arquivo de inicialização do React.
- O arquivo `src/index.css` é onde você pode adicionar estilos globais para o seu aplicativo.
- O diretório `public` contém o arquivo `index.html` e outros arquivos estáticos.

## Adicionando rotas com React Router DOM

Para adicionar rotas ao seu aplicativo React com o React Router DOM, você pode seguir estes passos:

1. Instale o React Router DOM executando o seguinte comando:

```shell
npm install react-router-dom
```

2. Em seu arquivo `App.js`, importe os componentes necessários do React Router DOM:

```javascript
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
```

3. Dentro do componente `App`, envolva todo o conteúdo com o componente `Router` para definir o escopo das rotas:

```javascript
function App() {
  return (
    <Router>
      {/* Seu conteúdo aqui */}
    </Router>
  );
}
```

4. Em seguida, use o componente `Switch` para renderizar rotas exclusivas. Cada rota é definida por meio do componente `Route`:

```javascript
function App()

 {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
```

5. Crie os componentes `Home`, `About` e `NotFound` (ou outros nomes de sua escolha) e importe-os no arquivo `App.js`.

Agora você pode adicionar mais rotas e componentes conforme necessário para criar seu aplicativo React.js com rotas usando o React Router DOM.

## Adicionando Sass ao projeto

Adicione o Sass usando o npm:
Execute o seguinte comando no terminal:

```
npm add -D sass
```

Isso instalará o pacote do Sass e suas dependências no diretório do seu projeto. O Sass será adicionado como uma dependência no arquivo `package.json`.

Utilize o Sass:
Após a instalação bem-sucedida, você pode usar o Sass em seu projeto. Geralmente, os arquivos Sass têm a extensão `.scss`. Crie um arquivo `.scss` e escreva seu código Sass nele.

## Autores

- [Tiago Ferrari](https://github.com/tiagoferrari-projects/).

## Contribuição

Sinta-se à vontade para contribuir para este projeto, abrindo problemas (issues) ou enviando pull requests.