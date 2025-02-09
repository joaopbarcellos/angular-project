# Angular Project

# Relatório do projeto

## Passos

1 - Estudar o framework Angular.

2 - Começar a produção dos componentes principais.

3 - Estilização dos componentes.

4 - Criando e integrando o sistema de autorização junto ao backend.

5 - Criando o container Docker com Dockerfile.


## Funcionalidades implementadas

- Cadastrar usuários
- Login
- Listar usuários.


## Como rodar

Construa a imagem docker:
```
docker build --no-cache -t angular-project .
```

Rode a imagem docker:
```
docker run -p 4200:4200 angular-project
```

## Testes automatizados
Para rodar os testes:
```
ng test
```

### Documentação dos testes

#### TitleComponent:
- Caso 1: Testando se o componente é criado corretamente.
- Caso 2: Testando se o título é renderizado corretamente.
- Caso 3: Testando se o título é atualizado dinamicamente.

#### FieldComponent:
- Caso 1: Testando se o componente é criado corretamente.
- Caso 2: Testando se o rótulo (label) é renderizado corretamente.
- Caso 3: Testando se o valor do campo de entrada é atualizado quando um evento de input ocorre.

#### ButtonComponent:
- Caso 1: Testando se o componente é criado corretamente.
- Caso 2: Testando se a mensagem do botão é exibida corretamente.
- Caso 3: Testando se o método onSubmit é chamado ao clicar no botão.

#### FormComponent:
- Caso 1: Testando se o componente é criado corretamente.
- Caso 2: Testando se os campos de entrada são renderizados corretamente.
- Caso 3: Testando se o botão de envio é renderizado corretamente.
- Caso 4: Testando se o método submit é chamado quando o botão é clicado.

#### TableComponent:
- Caso 1: Testando se o componente é criado corretamente.
- Caso 2: Testando se os cabeçalhos da tabela são renderizados corretamente.
- Caso 3: Testando se as linhas da tabela são renderizadas corretamente.

#### ListService:
- Caso 1: Testando se o componente é criado corretamente.

#### LoginService:
- Caso 1: Testando se o componente é criado corretamente.

#### SignupService:
- Caso 1: Testando se o componente é criado corretamente.

#### ListComponent: 
- Caso 1: Testando se o componente é criado corretamente.

#### LoginComponent:
- Caso 1: Testando se o componente é criado corretamente.

#### SignupComponent:
- Caso 1: Testando se o componente é criado corretamente.

#### AppComponent:
- Caso 1: Testando se o componente é criado corretamente.
