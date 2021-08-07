# Conteinerizando uma aplicação Node.js
A intenção deste projeto é demonstrar uma alternativa simples, rápida e bem organizada, que podemos adotar para criar aplicações (desde as mais simples) ainda com uma proposta de arquitetura limpa. A ideia central é **_conteinerizar_** um aplicativo Node.js para desenvolvimento com o Docker Compose... só isso! 

Novamente; trata-se de uma aplicação simples para cadastro de notícias. Mesmo assim, faremos uso de boas práticas de desenvolvimento.

> A requisição será disparada contra o Nginx, que fará papel de proxy reverso; este dispara a API que está conectada ao MongoDb. E todo esse processo está configurado num arquivo de manifesto (**docker-compose.yaml**) que está na raiz da solução.

### 🔥 Para baixar:

```js
https://github.com/fabioborges-ti/api-ts-compose.git
```

### 💻 Tecnologias
Principais tecnologias envolvidas no projeto:
- Typescript
- Node.js
- MongoDb
- Nginx
- Docker
	- Dockerfile
	- docker-compose.yaml

### 📋 Pré-requisitos
Antes de começar, você vai precisar ter instalado as seguintes ferramentas: [Git]([https://git-scm.com](https://git-scm.com/)), [Node.js]([https://nodejs.org/en/](https://nodejs.org/en/)) e o [Docker]([https://docs.docker.com/desktop/](https://docs.docker.com/desktop/)). Além disto, sugiro que você também utilize um bom editor de código, como o [VSCode]([https://code.visualstudio.com/]  (https://code.visualstudio.com/)). Este vai te oferecer _muitas_ extensões que farão toda diferença.

### 📦 Dependências do projeto
Agora você deve abrir seu terminal, na pasta da solução e executar os seguintes comandos: 

```bash
$ cd ./api/
```
```bash
$ npm install
```

E aguarde o download dos pacotes ☕

Se tudo correu bem, você vai notar que surgirá uma pasta  (**node_modules**) na solução e você não deve remover. Trata-se da pasta de trabalho do Node.js e será fundamental para seguirmos a diante. Beleza? 👌 

`Só que ainda tem uma coisa!!` 

O Node.js não entende _nada_ de  **TypeScript**. Dessa forma, precisamos _"transpilar"_ esse código para **Javascript** e para isso você deve usar mais um comando:

```bash
$ npm run compile
```

E mais uma pasta será adicionada a solução (**_.dist_**) com toda solução convertida para **_Javascript_** e seu conteúdo será usado na criação dos _containers_. 

### 📣 Ah... Importante!

Não podemos esquecer de falar do banco de dados, né? Observe o arquivo **db.ts** na pasta **_/src/config_**; trata-se do arquivo de chamada ao banco. 

> Na verdade está fazendo muito além do que devia! 🤦‍♂️

> Seu único papel seria estabelecer conexão ao banco de dados e ponto final, entretanto (_para servir como demo_) também está fazendo uma carga inicial de dados (_mas é opcional_). 

> Até incentivo (_num segundo momento_) que você remova essa carga, para não ferir nenhum princípio básico do **SOLID**. 

Agora vamos ao valor da variável **DB_URL**.

```js
private DB_URL = mongodb://mongo-db/notes-db;
```

**mongo-db**: trata-se de um serviço nomeado no arquivo (**_docker-compose.yaml_**) que está localizado na pasta raiz da solução. Caso queira alterar seu valor, sem problemas, mas não esqueça de mudar também o nome do serviço no **_compose_** para não haver problemas na hora de gerar o container.

**notes-db**: esse será o nome do banco de dados no _MongoDb_ que será gerado automaticamente. Você pode alterar a vontade, porque não vai impactar em nada.

### ⚙️ Recursos da API
Como você pode ver é _**bemmm**_ básica!!!

>  Action			| Endpoint
>  :---				| :---    
>  _**Home**_ 		| http://localhost:8080/
>  _**Get**_		| http://localhost:8080/api/v1/news
>  _**GetById**_	| http://localhost:8080/api/v1/news/:id
>  _**Post**_		| http://localhost:8080/api/v1/news/
>  _**Put**_		| http://localhost:8080/api/v1/news/:id
>  _**Delete**_		| http://localhost:8080/api/v1/news/:id

### 📃 Payload de criação
Guarde isso com você que logo será útil 📌

```js
{
	"hat": "String",
	"title": "String",
	"text": "String",
	"author": "String",
	"img": "String",
	"link": "String",
	"active": Boolean
}
```

### 🤞 Vamos testar?
Agora que você já tem tudo... chegou a hora de testar. Novamente, abra seu terminal na pasta **_raiz_** da solução, digite o comando abaixo e aguarde o fim do processo ☕

```bash
$ docker compose up -d 
```
O **_Docker_** vai baixar do seu repositório https://hub.docker.com todas as imagens mencionadas no arquivo do _compose_ (**_yaml_**). Depois, inicia a geração da imagem e por fim a geração do container. Em poucos instantes nosso container estará de pé 😲

Quando esse processo encerrar, você pode conferir usando o comando abaixo:

```bash
$ docker ps  
```
Atente para os seguintes containers:

```bash
api-ts-compose_nginx
api-ts-compose_api
mongo:5.0.1
```

Se estes foram listados, sucesso! 🤗 Já podemos fazer nossa primeira chamada da API. Abra seu navegador preferido e digite a URL abaixo:

```bash
http://localhost:8080
```

### 🍺 Funcionou?? Parabéns! 

Se sim, show !!! Atingimos nosso objetivo!!!

### 📚 Para mais informações:

Sugiro que você não deixe de abrir o arquivo do _**compose**_. Isso será muito útil para seu entendimento de composição de container. É um roteiro que será seguido pelo Docker para criação de seus containers. 

> Por exemplo, são nos arquivos de manifesto (**yaml**) que você configura serviços, redes, imagens, volumes, portas, links, enfim, tudo... e uma série de configurações e possibilidades. Tudo para tornar suas imagens cada vez mais robustas, mais leves e seguras. 

**Vale muito investir um tempo no estudo desse sujeito!** 

Se você não conhece muito sobre este processo e quer mais detalhes, consulte em: https://docs.docker.com/compose/

E bom estudos! 🚀
