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

Testes automatizados:
```
ng test
```