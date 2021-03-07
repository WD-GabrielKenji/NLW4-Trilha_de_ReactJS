<p align="center" id="introducao">
   <img src="./public/logo-full.svg" alt="Move It" width="300"/>
</p>

<p align="center">
 <a href="#introducao">Introdução</a> •
 <a href="#projeto">Projeto</a> •
 <a href="#tecnologias">Tecnologias Utilizadas</a> • 
 <a href="#execucao">Como Executar</a> • 
 <a href="#documentacao">Documentação</a> • 
 <a href="#licenca">Licença</a> •
 <a href="#autor">Autor</a> •
 <a href="#contato">Contato</a> 
</p>

--------------------------- 

<br>

# <Strong> Obrigado por visualizar este repositório </Strong> <img src="https://user-images.githubusercontent.com/1303154/88677602-1635ba80-d120-11ea-84d8-d263ba5fc3c0.gif" width="28px" alt="hi">

<p align="justify"> Primeiramente, olá me chamo Gabriel Kenji Poli Ozaki, sou um estudante de Ciência da Computação e estou querendo atuar na área de Desenvolvimento Web. </p>

<p align="justify"> Para uma descrição melhor sobre minha pessoa, acesse o README em meu perfil do GITHUB. Nele contém minha história, tecnologias nas quais já programei e ambições pessoais. </p>

## :computer: <strong id="projeto"> Projeto </strong>

<p align="justify"> Esse projeto se baseia na técnica de pomodoro, onde a técnica consiste na utilização de um cronometro para dividir o tempo em períodos de 25 minutos de produção, que são separados por breves intervalos, mas o que difere esta aplicação sobre a técnica original, é que trocamos os intervalos e no lugar substituímos por desafios aleatórias que beneficiam a saúde do usuário. </p>

## :rocket: <Strong id="tecnologias"> Tecnologias Utilizadas </Strong>

<p align="justify"> Este projeto foi desenvolvido utilizando as seguintes tecnologias: </p>

[![React Badge](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)](https://reactjs.org/)  [![Nodejs Badge](https://img.shields.io/badge/-Nodejs-3C873A?style=for-the-badge&labelColor=black&logo=node.js&logoColor=3C873A)](https://nodejs.org/pt-br/)  [![Javascript Badge](https://img.shields.io/badge/-Javascript-F0DB4F?style=for-the-badge&labelColor=black&logo=javascript&logoColor=F0DB4F)](https://www.javascript.com/)

## :runner: <strong id="execucao"> Como executar o projeto </strong>

[![NPM Badge](https://img.shields.io/badge/npm-6.14.11-brightgreen)](https://nodejs.org/en/download/) [![Yarn Badge](https://img.shields.io/badge/yarn-1.22.5-brightgreen)](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

```bash
# Fazer o clone do Repositorio.
>> Git Clone: https://github.com/WD-GabrielKenji/NLW4-Trilha_de_ReactJS.git
```

```bash
#Instalar as dependencias do yarn: 
>> yarn install

#Iniciar o servidor yarn dev
>> yarn dev
```
<pre>
Basta acessar <a href="http://localhost:3000" rel="nofollow"><code>localhost:3000</code></a> no seu Browser e usufruir da aplicação
</pre>


## :book: <strong id="documentacao"> Detalhes aprofundados sobre o projeto </strong>

<details>
<summary>
  Documentação com os detalhes do projeto
</summary>

<br>

<p align="justify"> Esta aplicação foi desenvolvida, através de um <strong>evento online</strong> feito pela <strong>Rocketseat</strong>, chamado de <strong> NLW (Next Level Week)</strong>. A quarta edição do NLW na <strong>trilha de React</strong>, desenvolvemos a aplicação que teve como nome inicial, chamado de <strong>“move.it"</strong>. Ideia desse projeto se baseia na técnica de pomodoro criado por Francesco Cirillo no final dos anos 1980, onde a técnica consiste na    <strong>utilização de um cronometro para dividir o trabalho em períodos de 25 minutos de produção, separados por breves intervalos, mas o diferencial sobre essa técnica é que em nossa aplicação trocamos os intervalos e no lugar substituímos por desafios aleatórias que beneficiam a saúde do usuário.</strong> </p>

<p align="justify"> Nela utilizamos o <strong>contexto de desenvolvimento de uma API REST</strong>, permitindo com que nossa aplicação tenha acessos a <strong>múltiplos clientes distintos</strong>, que possam utilizar, tanto dispositivos desktops, como dispositivos mobiles no mesmo servidor, onde devolve um response no formato JSON, de uma maneira que os dois compreendam para realizar a transformação da interface até a visualização do usuário. Utilizamos a <strong>biblioteca React</strong>, para além de ajudar o browser nas criações da interface, <strong>deixarmos a aplicação mais fluida ou flexível para consumir o HTML, CSS e JS</strong>, e como <strong>ambiente de desenvolvimento</strong> usamos o <strong>Node.js</strong> para construir a aplicação utilizando React. </p>

<p align="justify"> <strong>Adicionamos o TS (TypeScript) sobre o JS (JavaScript)</strong> para darmos uma tipagem estática, onde o que for atribuído a tipagem definida, necessita obrigatoriamente ser seguido ao formato descrito. <strong>Gerando assim, um alto desenvolvimento, pois não precisamos fazer testes de validações nas funções ou qualquer outra funcionabilidade tipada presente nos códigos, resultando em uma checagem estática de tipos (checagem durante o desenvolvimento da aplicação).</strong> </p>

<p align="justify"> <strong>Dividimos a aplicação em componentes</strong> para deixa-la mais legível, na forma do reaproveitamento de código, onde no React tudo é feito através de componentes. Também utilizamos para escrever trechos em HTML dentro do JS, através de uma função. </p>

<p align="justify"> <strong>Ferramentas utilizadas para auxiliar as instalações dos pacotes</strong> dentro do Node.js foram o <strong>yarn</strong> e <strong>npm</strong>. </p>

<p align="justify"> <strong>Inicialmente dentro da aplicação</strong>, foi instalado o <strong>pacote create-react-app</strong>, que gera a facilitação para a criação de projetos React, onde o browser não consegue compreender a linguagem mais recente do JS moderno, e <strong>adicionando este pacote com suas configurações, podemos converter os códigos para uma maneira que o browser consiga compreende-los</strong>.  </p>

<p align="justify"> <strong>Quando se cria uma aplicação utilizando o “create-react-app”, estamos utilizando uma aplicação com o conceito SPA (Single Page Application)</strong>, que consiste em uma aplicação de uma única página, onde a troca de rotas ocasiona na troca do conteúdo, mas não da página ao todo. <strong>O porem da utilização deste conceito</strong>, é que sites que precisam ser indexados nos motores de busca <strong>apresentam o problema de SEO (Search Engine Optimization), gerando assim problemas com a otimização com os motores de busca ou buscadores, pois alguns deles estão com o JavaScript desabilitado e outros não esperam o tempo da interface ser construída</strong>. No que ocasiona, em não conseguirem coletar informações das aplicações, onde o JS é base tudo da aplicação (principalmente para projetos que utiliza a biblioteca React) ou onde o tempo de espera é atingido. </p>

<p align="justify"> <strong>Para resolvermos esse problema com o conceito SPA na otimização com os motores de busca</strong>, migramos nosso projeto para utilizarmos o conceito SSR (Server Side Rendering)</strong>, irei deixar o link do novo repositório sobre o mesmo projeto, porém, utilizando o conceito SSR como base e com os novos detalhes incrementados: </p>

<a href="https://github.com/WD-GabrielKenji/NLW4-TrilhaDeReact"> Acesse aqui o link do outro Repositório </a>

</details>

## :closed_book: <strong id="licenca"> Licença </strong>

Esse projeto esta sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

## :boy: <strong id="autor"> Autor </strong>

<a href="https://github.com/WD-GabrielKenji">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/77596710?s=400&u=70de2ffcac45b9e0db00c828fe785d4a76ac3f65&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Gabriel Kenji Poli Ozaki</b></sub></a> <a href="https://github.com/WD-GabrielKenji" title="Perfil Github"> :star2: 
</a>


Feito com ❤️ por Gabriel Kenji 👋🏽

### :mailbox_with_mail: <strong id="contato"> Redes Sociais para Contato: </strong>

<p> Entre em contato, atraves desta redes sociais: </p>

[![Linkedin Badge](https://img.shields.io/badge/-Gabriel_Kenji_Poli_Ozaki-0e76a8?style=flat&labelColor=0e76a8&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wdkenji/)  [![Mail Badge](https://img.shields.io/badge/-@biel.kenjii-C63381?style=flat&labelColor=C63381&logo=instagram&logoColor=white)](https://www.instagram.com/biel.kenjii/)  [![Mail Badge](https://img.shields.io/badge/-g.kenjiJS-c0392b?style=flat&labelColor=c0392b&logo=gmail&logoColor=white)](mailto:g.kenjiJS@gmail.com)

[![GitHub followers](https://img.shields.io/github/followers/WD-GabrielKenji.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/WD-GabrielKenji)
