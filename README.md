<h2 align="left">Project Blogs API</h2>
Este repositório contém uma API RESTful para gerenciamento de blogs. A API permite que os usuários realizem operações CRUD (criar, ler, atualizar e deletar) em posts e categorias de blog.

<h3 align="left">Tecnologias Utilizadas</h3>
As tecnologias utilizadas para a construção desta API incluem:

<li>Node.js (v14.17.0)</li>
<li>Express (v4.17.1)</li>
<li>Sequelize (v6.6.5)</li>
<li>MySQL (v8.0.27)</li>

<h3 align="left">Instalação</h3>
Para executar a API localmente, siga as instruções abaixo:
<ol>
<li>Certifique-se de ter o Node.js e o MySQL instalados em sua máquina.</li>
<li>Clone este repositório em sua máquina local usando o comando git clone https://github.com/viitormalves/blogs-api.git.</li>
<li>Navegue até o diretório do projeto usando o comando cd blogs-api.</li>
<li>Instale as dependências do projeto usando o comando npm install.</li>
<li>Renomeie o arquivo .env.example para .env e configure as variáveis de ambiente para a conexão com o banco de dados MySQL e a porta de escuta do servidor.</li>
<li>Execute o comando npm start para iniciar o servidor.</li>
</ol>

<h3 align="left">Autenticação JWT</h3>
<li>Esta API utiliza JWT para autenticação de usuários. Para criar um token JWT, é necessário enviar uma requisição POST para http://localhost:3000/login com um corpo contendo as seguintes informações:</li>
<br>
json - { "email": "seu-email", "password": "sua-senha" }
<br>
<br>
<br>
<li>Se as credenciais estiverem corretas, a API retornará um token JWT no formato:</li>
<br>
json - { "token": "seu-token-jwt" }
<br>
<br>
<br>

<li>Para acessar as rotas que requerem autenticação, basta adicionar o header Authorization com o valor do token.</li>

<h3 align="left">Uso</h3>
Após a instalação, você pode interagir com a API usando uma ferramenta de teste de API, como o ThunderClient, Postman ou o Insomnia.

A API possui as seguintes rotas:

<li>/categories: rota para listar todas as categorias de blog cadastradas no banco de dados e para criar uma nova categoria.</li>
<li>/categories/:id: rota para atualizar ou deletar uma categoria específica.</li>
<li>/posts: rota para listar todos os posts de blog cadastrados no banco de dados e para criar um novo post.</li>
<li>/posts/:id: rota para atualizar ou deletar um post específico.</li>
<li>As rotas da API requerem autenticação do usuário para executar operações de criação, atualização e exclusão. Para autenticar um usuário, envie uma requisição POST para a rota /user com as credenciais de criação de usuário válidas. Será retornado um token de autenticação.</li>

