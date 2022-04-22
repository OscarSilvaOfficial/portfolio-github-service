# Portfolio Github Service

Esse repositório é responsável por consultar todos os `Repositórios` do meu perfil
no Github e retornar os dados formatados.

# Entidades

## GithubRepository
| property | type | description
| ------ | ------ | ------ |
| name | `String` | Nome do repositório
| path | `String` | Caminho completo ex: /:user/:repo - Propriedade correspondente = full_name
| visibility | `Enum(public, private)` | Propriedade correspondente = private = Boolean
| description | `String` | Descrição do repositório
| commits | `Array<GithubCommit>` | Lista de commits do repositório

## GithubCommit
| property | type | description
| ------ | ------ | ------ |
| sha | `String` | Hash do commit
| author | `String` | Propriedade commit.author.name
| date | `Date` | Propriedade commit.author.date
| message | `String` | Mensagem descritiva do commit
| link | `String` | Propriedade commit.url - Link de acesso para o commit
