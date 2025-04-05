📝 API To-Do List - Decola Tech
Este é um projeto de API RESTful para gerenciamento de tarefas (to-do list), desenvolvido como parte da trilha de aprendizado do Decola Tech. A aplicação permite criar, visualizar, atualizar e deletar tarefas por meio de requisições HTTP.

🌐 Deploy no Replit
Acesse o projeto hospedado no Replit:
🔗 API To-Do List - Replit

🛠️ Nota: Optei por desenvolver o projeto no Replit devido a limitações na minha máquina local, que não estava conseguindo rodar projetos Java/Spring corretamente no momento. O Replit foi uma ótima alternativa para manter a produtividade e garantir a entrega do desafio.

⚙️ Tecnologias Utilizadas
Java

Spring Boot

Maven

Spring Web

Spring Data JPA

H2 Database (ou outro DB, dependendo da config)

Replit (ambiente de desenvolvimento online)

🚀 Como Executar o Projeto
▶️ No Replit
Acesse o link do projeto no Replit.

Clique em Run para iniciar a aplicação.

A API estará disponível no endereço https://<projeto>.repl.co.

💻 Localmente (Opcional)
Clone o repositório:

bash
Copiar
Editar
git clone https://replit.com/@naiaradev/API-to-do-list-decola-tech
Abra em sua IDE favorita (IntelliJ, VS Code etc.).

Certifique-se de que o Java e o Maven estão instalados.

Execute com:

bash
Copiar
Editar
./mvnw spring-boot:run
📌 Endpoints Disponíveis
Método	Endpoint	Descrição
GET	/tasks	Lista todas as tarefas
GET	/tasks/{id}	Retorna uma tarefa específica
POST	/tasks	Cria uma nova tarefa
PUT	/tasks/{id}	Atualiza uma tarefa existente
DELETE	/tasks/{id}	Deleta uma tarefa pelo ID
📂 Estrutura do Projeto
css
Copiar
Editar
📦 src
 ┣ 📂 main
 ┃ ┣ 📂 java
 ┃ ┃ ┗ 📂 com.example.todolist
 ┃ ┃ ┃ ┣ 📄 controller
 ┃ ┃ ┃ ┣ 📄 model
 ┃ ┃ ┃ ┣ 📄 repository
 ┃ ┃ ┃ ┗ 📄 service
 ┃ ┣ 📂 resources
 ┃ ┃ ┗ 📄 application.properties
🛠 Funcionalidades
✅ Adicionar novas tarefas

📋 Listar tarefas existentes

✏️ Atualizar informações de uma tarefa

🗑 Excluir tarefas

💡 Aprendizados
Este projeto foi desenvolvido com o objetivo de consolidar conhecimentos em:

Criação de APIs REST com Spring Boot

Integração com banco de dados via Spring Data JPA

Boas práticas de organização de código em camadas

Uso do Replit como ambiente de desenvolvimento e deploy simples

🙋‍♀️ Autora
Desenvolvido por @naiaradev como parte do Decola Tech 🚀.
