<h1>Projeto Cypress E-Commerce</h1>

#### Site ultilizado para os testes: http://www.automationpractice.pl/index.php

## funcionalidade de Cadastro
![registration cy js](https://github.com/GabrielBento299/Projeto-Cypress-E-commerce/assets/86307663/d7e928f8-bc5c-413e-9cb3-e5e16a25d2e3)

- Deve cadastar com sucesso
- Deve exibir uma mensagem de erro ao cadastrar um e-mail já cadastrado
  
## funcionalidade de Login
![login cy js](https://github.com/GabrielBento299/Projeto-Cypress-E-commerce/assets/86307663/7ccbe12b-3b2f-4fb8-92fb-2fbadc8f7924)

- Deve fazer login com sucesso
- Deve exibir uma mensagem de erro ao inserir um email inválido
- Deve exibir uma mensagem de erro ao inserir uma senha inválida
- Deve exibir uma mensagem de erro ao não preencher o campo de e-mail
- Deve exibir uma mensagem de erro ao não preencher o campo senha

## funcionalidade de Produto e Carrinho
![product cy js](https://github.com/GabrielBento299/Projeto-Cypress-E-commerce/assets/86307663/c38b44ad-baed-41a0-b02f-e669eb8c2b36)

- Deve adicionar no carrinho um produto com sucesso
- Deve adicionar no carrinho todos produtos com sucesso
- Deve aumentar a quantidade de produto ao aumentar
- Deve diminuir a quantidade de produto ao diminuir
- Deve remover o produto no carrinho com sucesso
- Deve somar os valores do produto ao aumentar a quantidade
- Deve diminuir os valores do produto diminuindo a quantidade

## funcionalidade de Busca
![search cy js](https://github.com/GabrielBento299/Projeto-Cypress-E-commerce/assets/86307663/15ea9478-4d3c-43bd-b6f3-3980c8407db1)

- Deve exibir o produto pesquisado com sucesso
- Deve exibir mensagem de erro ao pesquisar sem o nome do produto
- Deve exibir mensagem de erro ao pesquisar um produto inexistente
  
![Captura de tela 2023-07-26 144549](https://github.com/GabrielBento299/Projeto-Cypress-E-commerce/assets/86307663/d1e466c4-42d3-494c-b199-7a9413d7846c)

## Pré-requisitos:
- [NodeJS](https://nodejs.org/en/download/ "NodeJS")

## Ferramentas utilizadas:
- [VSCode](https://code.visualstudio.com/ "VSCode")
- [Cypress](https://www.npmjs.com/package/cypress "Cypress")
#####

## Tutorial, Instalação e execução

### Executar este projeto em sua maquina

* Em um terminal, dentro da pasta do projeto, execute o seguinte comando:

**Instalar as dependências:**  
```
npm install
```

### Utilizando o cypress

* Em um terminal execute o comando abaixo para abrir o cypress:
```
npx cypress open 
```

* Para executar os testes diretamente use:
```
npx cypress run 
```
