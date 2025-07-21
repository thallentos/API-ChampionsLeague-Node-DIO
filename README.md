# API Champions League

Esta é uma API de futebol desenvolvida em Node.js com Express.js. Ela fornece informações sobre jogadores e clubes de futebol da Champions League com a possibilidade de criar, ler, atualizar e deletar jogadores, e listar os clubes.

## Instalação

Para instalar as dependências do projeto, execute o comando abaixo:

```bash
npm install
```

## Inicialização

Para iniciar a API, execute o comando abaixo:

```bash
npm start:dev
```

Caso queira usar o modo Watch para não precisar reiniciar o servidor a cada alteração, execute o comando abaixo:

```bash
npm start:watch
```

## Rotas

A API tem as seguintes rotas:

* **GET /players**: Retorna uma lista de jogadores.
* **POST /players**: Cria um novo jogador.
* **GET /players/:id**: Retorna um jogador específico.
* **PATCH /players/:id**: Atualiza um jogador específico.
* **DELETE /players/:id**: Deleta um jogador específico.
* **GET /clubs**: Retorna uma lista de clubes.

## Modelos de Dados

A API utiliza os seguintes modelos de dados:

* **PlayerModel**: Representa um jogador de futebol.
	+ id: número
	+ name: string
	+ club: string
	+ nationality: string
	+ position: string
	+ statistics: StatisticsModel
* **ClubModel**: Representa um clube de futebol.
	+ id: número
	+ name: string
* **StatisticsModel**: Representa as estatísticas de um jogador.
	+ Overall: número
	+ Pace: número
	+ Shooting: número
	+ Passing: número
	+ Dribbling: número
	+ Defending: número
	+ Physical: número

## Escolha da porta

A API utiliza a porta que for escolhida no arquivo `.env`. Caso queira mudar a porta, basta alterar o valor da variável `PORT` nesse arquivo. Os exemplos abaixo de como se usa a API foram usados como exemplo a porta 3000, mas fique a vontade para escolher a que for melhor para você.

## Testando a API

Para testar a API, você pode usar qualquer ferramenta de teste de API que preferir. Eu pessoalmente uso o Thunder Client, uma extensão do Visual Studio Code que permite criar e enviar requisições HTTP de forma fácil e rápida.

Aqui estão alguns exemplos de como você pode testar a API usando o Thunder Client:

### GET /players

* Método: GET
* URL: `http://localhost:3000/players`
* Resposta: Uma lista de jogadores em formato JSON

### POST /players

* Método: POST
* URL: `http://localhost:3000/players`
* Corpo da requisição: Um objeto JSON com os dados do jogador seguindo o modo de criação
* Resposta: O jogador criado em formato JSON

### GET /players/:id

* Método: GET
* URL: `http://localhost:3000/players/1`
* Resposta: O jogador com o ID especificado em formato JSON

### PATCH /players/:id

* Método: PATCH
* URL: `http://localhost:3000/players/1`
* Corpo da requisição: Um objeto JSON com os dados atualizados do jogador seguindo o modo de atualização
* Resposta: O jogador atualizado em formato JSON

### DELETE /players/:id

* Método: DELETE
* URL: `http://localhost:3000/players/1`
* Resposta: Uma mensagem de confirmação de que o jogador foi excluído

### GET /clubs

* Método: GET
* URL: `http://localhost:3000/clubs`
* Resposta: Uma lista de clubes em formato JSON

## Observação
Lembre-se de que você pode usar qualquer outra ferramenta de teste de API que preferir, como Postman, cURL, etc. Eu 

## Licença
Este projeto está licenciado sob a [Minha License](LICENSE.md).