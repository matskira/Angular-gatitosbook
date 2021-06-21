<h1 align="center">Gatitos Book</h1>
<p align="center">
<img src="https://img.shields.io/badge/maked%20by-matskira-red">
<img src="https://img.shields.io/badge/angular-11.0.0-informational">
<img src="https://img.shields.io/badge/Node-14.17.0-informational">
</p>


<h2 align="center">
    <a href="https://angular.io/docs"><img src=".\readme_assets\img\angular_logo.svg"></a>
</h2>









## Introdução ao projeto

O projeto gatitosbooks é um sistema básico de rede social de fotos focado no animal doméstico gato, onde os usuários poderão compartilhar suas fotos preferidas dos bixanos, curtir e comentar as mesmas. 



<img src=".\readme_assets\img\site_1.png">



Sua construção foi utilizada para aprender o funcionamento do framework Angular, dessa forma utilizamos diversos conceitos, ferramentas, padrões e mais para conseguir desenvolver o site. Além disso aplicamos como back-end uma API NodeJS, onde se responsabilizará de cuidar dos usuários cadastrados, imagens cadastradas, padrões de comportamento e etc.



## Funcionalidades

A rede social criada ainda está crua, ainda não foi criado a interação entre usuários, apenas a visão de um usuário logando e acessando as imagens disponibilizadas no perfil.

Vamos abordar elas:



**Login**

<img src=".\readme_assets\img\site_2.png">

Nesta tela o usuário informará seu login e senha, lembrando que atualmente essa funcionalidade está integrada a uma API NodeJS, que é utilizada como nosso back-end. Além de estar validando os campos inseridos pelo usuário.



**Cadastro de usuário novo**

<img src=".\readme_assets\img\site_#.png">

Aqui o usuário poderá se cadastrar em nosso site, com validação presente em todos os campos (e-mail válido, nome, usuário e senha), inclusive uma assíncrona, no campo de usuário iremos validar para verificar se já existe um usuário presente com esses caracteres. 



**Tela principal**

<img src=".\readme_assets\img\site_4.png">



Após o login, o usuário irá ver as fotos ligadas ao seu perfil, além disso pode ver o número de curtidas e comentários presentes em cada foto e acesso ao nosso menu.



**Detalhes da foto**

<img src=".\readme_assets\img\site_5.png">

Ao clicar em uma imagem o usuário irá ver os detalhes da imagem, com os comentários presentes de quem comentou e inclusive pode publicar um novo comentário. Também ao clicar no ícone de lixeira em cima, ele pode deletar esta imagem.



**Publicação de nova foto**

<img src=".\readme_assets\img\site_6.png">


<img src=".\readme_assets\img\site_7.png">


<img src=".\readme_assets\img\site_8.png">



Essa funcionalidade permite que o usuário publique uma nova imagem, também contando com a funcionalidade de preview, então ele conseguirá ver como ficará a imagem antes da publicação.





## O que eu aprendi



Tenho o costume de anotar as ferramentas que aprendi ao longo da criação de um projeto de aprendizado, aqui vai a lista:

- Técnica Lazy Loading;
- Utilização do angular/cli;
- Interação com uma api back-end, através do HttpClient;
- Injeção de dependências;
- Template Driven (ngModel);
- Receber parâmetros com o @Input;
- Validações síncronas, assíncronas e customizáveis;
- Formulários Reativos;
- Router Link;
- Operadores básicos da biblioteca RXJS;
- Utilização do JTW (Json Web Token);
- Uso do subject;
- Diretiva ngContent;
- HttpsHeaders;
- ActivatedRoute;
- Interceptor;
- mapTo e catchError;
- Resolver;
- Envio de fotos para o back-end.





## Como instalar o sistema



1. Instalar em sua máquina local a versão do NodeJS e Angular que foi marcada no ínicio do documento;

2. Extrair nosso back-end Node em uma pasta

   1. <img src=".\readme_assets\img\instal_1.png">

   

3. Iniciar nossa API, através da pasta que extraímos utilizar os comandos:

   1. `npm install`
   2. `npm start`

   

4. Após isso já concluimos a etapa do back-end, vamos agora instalar o sistema Angular, entrando na pasta do projeto, colocamos o seguinte comando no terminal:

   1. `npm install`

   2. `ng serve --open`

      

5. Acessar o ambiente local de desenvolvimento.









