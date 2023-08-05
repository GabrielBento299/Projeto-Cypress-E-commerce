Funcionalidade de Cadastro:

Como um novo usuário,
Quero me cadastrar no site,
Para poder realizar compras e que eu possa acessar os recursos exclusivos.

    Cenário: Deve cadastrar com sucesso
    Dado que estou na página de cadastro
    Quando eu preencho os campos obrigatórios com informações válidas
    Então o cadastro deve ser realizado com sucesso

    Cenário: Deve exibir uma mensagem de erro ao cadastrar um e-mail já cadastrado
    Dado que estou na página de cadastro
    Quando eu preencho o campo de e-mail com um e-mail já cadastrado
    E eu preencho os demais campos obrigatórios com informações válidas
    Então uma mensagem de erro deve ser exibida informando que o e-mail já está cadastrado

<----------------------------------------------------------------------------------------->

Funcionalidade de Login:

Como um cliente do E-commerce,
Quero fazer login (autenticação) no site,
Para que eu possa visualizar meu perfil e meus pedidos.

    Cenário: Deve fazer login com sucesso
    Dado que estou na página de login
    Quando eu preencho o campo de e-mail com um e-mail válido 
    E eu preencho o campo de senha com uma senha válida
    Então o login deve ser realizado com sucesso

    Cenário: Deve exibir uma mensagem de erro ao inserir um e-mail inválido
    Dado que estou na página de login
    Quando eu preencho o campo de e-mail com um e-mail inválido
    E eu preencho o campo de senha com uma senha válida
    Então uma mensagem de erro deve ser exibida informando que o e-mail é inválido

    Cenário: Deve exibir uma mensagem de erro ao inserir uma senha inválida
    Dado que estou na página de login
    Quando eu preencho o campo de e-mail com um e-mail válido cadastrado
    E eu preencho o campo de senha com uma senha inválida
    Então uma mensagem de erro deve ser exibida informando que a senha é inválida

    Cenário: Deve exibir uma mensagem de erro ao não preencher o campo de e-mail
    Dado que estou na página de login
    Quando eu deixo o campo de e-mail em branco
    E eu preencho o campo de senha com uma senha válida
    Então uma mensagem de erro deve ser exibida informando que o e-mail é obrigatório

    Cenário: Deve exibir uma mensagem de erro ao não preencher o campo de senha
    Dado que estou na página de login
    Quando eu preencho o campo de e-mail com um e-mail válido cadastrado
    E eu deixo o campo de senha em branco
    Então uma mensagem de erro deve ser exibida informando que a senha é obrigatória

<----------------------------------------------------------------------------------------->

Funcionalidade de Produto e Carrinho:

Como um cliente interessado em fazer compras,
Quero adicionar produtos ao carrinho e gerenciar suas quantidades,
Para que eu possa revisar os itens selecionados e com o processo de compra de forma conveniente.

    Cenário: Deve adicionar no carrinho um produto com sucesso
    Dado que estou na página de produto
    Quando eu clico no botão de adicionar ao carrinho
    Então o produto deve ser adicionado ao carrinho com sucesso

    Cenário: Deve adicionar no carrinho todos os produtos com sucesso
    Dado que estou na página de produtos
    Quando eu clico no botão de adicionar ao carrinho para todos os produtos disponíveis
    Então todos os produtos devem ser adicionados ao carrinho com sucesso

    Cenário: Deve aumentar a quantidade de produto ao aumentar
    Dado que estou na página do carrinho
    Quando eu aumento a quantidade de um produto
    Então a quantidade do produto deve ser aumentada corretamente

    Cenário: Deve diminuir a quantidade de produto ao diminuir
    Dado que estou na página do carrinho
    Quando eu diminuo a quantidade de um produto
    Então a quantidade do produto deve ser diminuída corretamente

    Cenário: Deve remover o produto no carrinho com sucesso
    Dado que estou na página do carrinho
    Quando eu removo um produto do carrinho
    Então o produto deve ser removido com sucesso

    Cenário: Deve somar os valores do produto ao aumentar a quantidade
    Dado que estou na página do carrinho
    Quando eu aumento a quantidade de um produto
    Então o valor total do carrinho deve ser atualizado corretamente

    Cenário: Deve diminuir os valores do produto diminuindo a quantidade
    Dado que estou na página do carrinho
    Quando eu diminuo a quantidade de um produto
    Então o valor total do carrinho deve ser atualizado corretamente

<----------------------------------------------------------------------------------------->

Funcionalidade de Busca:

Como um cliente,
Quero realizar pesquisas no site para encontrar rapidamente os itens que desejo,
Para que eu possa economizar tempo e encontrar exatamente o que estou procurando.

    Cenário: Deve exibir o produto pesquisado com sucesso
    Dado que estou na página inicial
    Quando eu pesquiso por um produto válido
    Então o produto pesquisado deve ser exibido corretamente

    Cenário: Deve exibir mensagem de erro ao pesquisar sem o nome do produto
    Dado que estou na página inicial
    Quando eu deixo o campo de pesquisa em branco
    Então uma mensagem de erro deve ser exibida informando que o nome do produto é obrigatório

    Cenário: Deve exibir mensagem de erro ao pesquisar um produto inexistente
    Dado que estou na página inicial
    Quando eu pesquiso por um produto inexistente
    Então uma mensagem de erro deve ser exibida informando que o produto não foi encontrado

