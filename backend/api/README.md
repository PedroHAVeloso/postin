# Postin API.

REST API criada para servir à rede Postin. Desenvolvida durante o Bootcamp Jovem Programador Unimar 2023, por [pedrohaveloso](https://www.github.com/pedrohaveloso).

A API foi desenvolvida em PHP, sem uso de frameworks ou bibliotecas complexas, com o objetivo de ser desenvolvida de maneira rápida para o Bootcamp.

Ainda sim, conta com bons níveis de separações de funções e respeito dos princípios SOLID, inversão de dependências etc., mesmo que falhos em alguns momentos, novamente, pelo curto tempo de desenvolvimento.

## Documentação simples.

`POST /user/login`

Inicia uma sessão de login para um usuário existente.

    {
      "email": string,
      "password: string
    }

---

`POST /user/register`

Cria uma nova conta de usuário.

    {
      "email": string,
      "password": string,
      "email": string
    }

---

`POST /post/create`

Cria um novo post na rede.

    { 
      "text": string,
      "color": string,
      "username": string
    }

---

`GET /post/get-all`

Obtém todos os posts da rede.

---

`POST /post/get-user`

Obtém todos os posts de um determiando usuário.

    {
      "username": string 
    }

---

`PUT /post/favorite`

Favorita um post.

    {
      "id": int
    }

---

`PUT /post/unfavorite`

Remove o favorito de um usuário de um post.

    {
      "id": int
    }

---