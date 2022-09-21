# Livraria fictícia 

Descrição: Possuo uma livraria fictícia e nela eu tenho total autonômia para colocar os livros que forem da minha vontade até mesmo aqueles que não existem! Portanto eu coloco na prateleira, retiro da prateleira, eu altero as informações do livro, e até mesmo jogo fora aqueles livros que não me agradam. Este projeto é um C.R.U.D, utilizo nele o modelo API REST, recursos e métodos HTTP, como porta padrão utilizo http://localhost:3000, utilizamos o framework Express para facilitar a comunicação com nosso servidor local, e o mongoose para fazer conexão com nosso banco de dados NoSQL (MongoDb), e arquitetura conhecida como MVC.

modo de utilizar: O banco de dados está conectado com meu cluster do MongoDb, para alterá-lo você deve ir até "./src/config/dbconnect.js" e em "mongoose" colocar como parâmetro o seu cluster com senha, os recursos HTTP's padrão são: `/livros/:id` ou `autores/:id`, mas você pode alterá-los em `./src/routes/...` logo após alterar o seu novo banco de dados ou os recursos caso seja de sua preferência, no terminal você utiliza o script "dev", no caso `npm run dev` em seu terminal e a conexão estará estabelecida com uma mensagem de sucesso no seu console. a partir disso utilize o postman com métodos HTTP para manipular o banco de dados a seu bel prazer.  

ferramentas: Node@16.14.0, Nodemon, Express e Mongoose.

# vizualização esperada dos dados

![Postman MÉTODO GET](https://user-images.githubusercontent.com/109245191/191558282-c5ef9543-3e9e-4cf7-a022-041b88779701.PNG)

Para críticas/elogios ou novas ideias, meu contato é: danilomsp6@gmail.com
