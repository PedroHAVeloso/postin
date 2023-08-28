# **Post** in, uma rede *Unimar*.

<hr />

<div align="center">
  <img src="public/back_logo.png" alt="Background" />
</div>

<div align="end">
  <small>
    Desenvolvido durante o <a href="https://oficial.unimar.br/eventos/bootcamp-jovem-programador/">Bootcamp Jovem Programador 2023</a>.
  </small>
</div>

<hr />

#

O **Post** in foi criado para a [*Unimar* (Universidade de Marília)](https://unimar.br/), uma rede interna e, ao desejável, externa, com o objetivo de ser simples de uso, agradável visualmente e atrativo aos públicos.

Baseado em papeis coloridos colocados em um mural, a base da rede vem embutida nessa ideia. Você cola seus posts, textos curtos e fundos chamativos, no mural da rede.
Todos poderão ver. Expresse suas emoções, sentimentos e opiniões.

# Diário do desenvolvedor.

Esse diário, escrito durante o desenvolvimento da ideia e do projeto no Bootcamp, descreve um pouco do processo de criação. Dia após dia.

Se trata de um texto mais pessoal, um plano de fundo do desenvolvimento, com a minha visão, se relaciona menos ao projeto e mais ao desenvolvedor.

<details>
  <summary><code>21/08/2023</code> - Início do desenvolvimento.</summary>
  
  ## Início do desenvolvimento.
  Com a introdução da temática do Bootcamp, sendo estabelecido como foco a criação de uma solução, qual de tema livre, para a Unimar utilizando React, estou começando a pensar em algum tipo de solução.

  Estou um pouco desconfiante, já que nunca programei nada em React, muito menos usar TS ou JS de alguma maneira extensiva.

  Achei interessante a ideia de criar uma rede social interna, talvez externa, na medida do desejável, para a universidade.

  Pensei em um nome, *Post in*, algo que remeta a "postar em", coisa do tipo. Também imagino algo interessante: que ela seja baseada em _post its_, acredito que não possa ser dito que ela é, já que isso é uma marca registrada, mas seria algo parecido.

  Você colar seus posts em um mural na rede, com textos curtos e cores que expressem uma emoção.

  Poderia ser usada pelo estudantes da Unimar? Talvez por fora, imagino algo desse modo.
</details>

<details>
  <summary><code>22/08/2023</code> - Ideia estabelecida.</summary>
  
  ## Ideia estabelecida.
  Cheguei a conclusão que minha ideia de ontem seria, realmente, interessante — pelo menos na minha visão.

  Comecei a desenvolver um pouco do design no Figma, apenas uma base sólida, não desejo criar tudo lá, pois pode demorar demais, quero logo começar a programar.

  Portanto, iniciei a programação de algumas telas e uma lógica.

  Estou usando TailwindCSS, não tinha tido contato com ele antes, mas achei muito útil, principalmente pelo curto tempo de desenvolvimento que tenho.

  Adicionei duas dependências no projeto, desejo que sejam as únicas:  
  - react-router-dom
  - react-responsive-masonry

  A primeira, para criar rotas, pesquisei e vi que é a melhor para isso.
  A segunda, para um grid masonry, como há pouco tempo para o projeto, não quero gastar tempo criando algum componente para isso, soma-se meu pouco conhecimento em TS/React, tentarei não arriscar.
</details>

<details>
  <summary><code>23/08/2023</code> - Criação da API.</summary>

  ## Criação da API.
  Revisando minha ideia, achei interessante não criar apenas um visual, mas também uma rede que seja funcional no momento da entrega. 
  
  Estou iniciando o desenvolvimento de uma API para ela, criei em PHP, linguagem que tenho mais conhecimento e que, ao mesmo tempo, julgo mais rápida para isso, além de ser mais fácil, mas minhas condições (nenhum dinheiro) de hospedar caso seja necessário, para testes, obviamente, em algo gratuito.

  Aplicando conceitos de arquitetura limpa nessa API, quero criar algo o mais limpo possível, ainda estou estudando sobre esse tema, mas desejo, ainda sim, desenvolver algo que você olhe e diga: — que código limpo!
  
  E espero conseguir.
</details>

<details>
  <summary><code>24/08/2023</code> - Design concreto.</summary>

  ## Design concreto.
  Cheguei em um momento onde tenho o design da ideia concreto, acredito que está sólido, seguindo um bom padrão.

  A tela de boas-vindas está concluída, responsiva e agradável.

  Ademais, a tela inicial também está bem evoluída, criei o componente de formulário para a criação de posts, os posts já estão sendo exibidos, mas, no momento, apenas vindo de uma lista aleatória gerada. Espero logo puxá-los de um backend.
</details>

<details>
  <summary><code>25/08/2023</code> - Componentes e mais telas.</summary>

  ## Componentes e mais telas.
  Componentizei algumas coisas, a navbar como exemplo.

  Também criei a tela de perfil (do usuário atual logado).

  Está tudo responsivo, pessoalmente, me orgulho um pouco disso, não um orgulho arrogante, mas de pura felicidade. Faz 4 dias que eu pouco estava mexendo em algo web usando HTML/TS/React/TailwindCSS, fiquei muito preso no Flutter ultimamente, mas estou pegando bem o jeito nisso, só não sei se seguindo as melhores práticas, mas estou tentando.

  Estou criando componentes para os icones em SVG, acredito ser algo interessante, pois me possibilita usar o Tailwind para customizá-los quando quiser.

  Hoje foi um dia menos produtivo que os outros, mas continuo firme.
</details>

<details>
  <summary><code>26/08/2023</code> - Menu de ações e README.md.</summary>

  ## Menu de ações e README.md.
  O título de hoje remete a poucas coisas, correto?
  Pois é, não consegui desenvolver quase nada hoje, tanto por um desânimo repentino, quanto por compromissos.

  Criei apenas um menu de ações na Navbar e fiz algumas alterações no README.md, ia incluir o diário do desenvolvedor nele, mas vou deixar para o final do projeto.

  Amanhã e nos próximos dias vou tentar me animar mais, quero continuar e concluir logo esse projeto, estou gostando da ideia e do desenvolvimento, acredito que terá alguma utilidade à universidade.

  Amanhã também desejo dar uns retoques na arquitetura do projeto, ao menos no código atual, limpar toda a baboseira que criei em alguns momentos, refleti e percebi alguns códigos sujos criados. Na questão arquitetura, darei meu máximo, pois ainda não entendi como posso aplicar alguns conceitos que conheço no React.
</details>

<details>
  <summary><code>27/08/2023</code> - Refatorações e Login.</summary>

  ## Refatorações e Login.
  Hoje foi um dia bem produtivo, refatorei completamente o código do site, refiz componentes, páginas etc.

  Deixei todas as tags que vi semânticas, o máximo possível. Os novos componentes são mais úteis e não apenas me atrapalham por causa de seus props — os que eu havia criado anteriormente, como ainda tinha menos conhecimento, estavam criando mais dor de cabeça que tudo.

  Também tentei "isolar" alguns estados denntro de componentes específicos, ainda não entendi totalmente o gereciamento de estado do React, mas achei interessante tentar isolar cada estado num componente e deixar todas as páginas limpas, sem nenhum estado global, faz sentido?

  Resumidamente, o dia se baseou nisso, agora o projeto está bem mais limpo, também adicionei documentação nos componentes e páginas, ficando mais fácil o entendimento.

  Após essa limpeza no código, comecei outra bagunça: a função de login.
  Como já tenho boa parte do visual pronto, estou me concentrando nas partes funcionais, a parte de login foi aparentemente concluída. 
  
  Você já consegue logar e agora só pode acessar as páginas internas (sem ser a de boas-vindas) estando logado.

  Porém, acredito que fiz muitas gambiarras para que a função de login faça seu papel (funcionar) — POGzão (Programação Orientada a Gambiarra) na veia, como diriam os bons programadores de PHP.

  Quando aprender mais sobre TypeScript, JavaScript, React etc., pretendo melhorar essa função, mas, no momento, é o que tive a capacidade de fazer.
</details>