# Bookmark Manager

Gerenciador de favoritos ([Raindrop](https://raindrop.io/) clone).

## Pré-requisitos

- Node.js 16+.
- Criar o projeto com qualquer biblioteca/frameworks de sua preferência.
- Utilizar o "bom e velho" CSS e JS (mostre suas habilidades! Nada de componentes prontos 😉).

## Passos

- Criar a interface baseada no [protótipo do Figma](https://www.figma.com/file/fJ43ch89xzrAcCl5aN16JT/Bookmark-Manager).
- Utilizar o endpoint `/api/extract` para obter os metadados das URLs.
- Utilizar [json-server](https://github.com/typicode/json-server) para salvar os favoritos.

```
Observações:

- Consulte o código na pasta "src" para exemplo de uso dos endpoints (execute "npm start").
- O JSON server obedece os padrões REST. Verifique a documentação para exemplos de uso.
```

## Sugestões

- Utilize animações CSS;
- Utilize alguma metodologia de organização de CSS ([BEM](http://getbem.com/), [SMACSS](http://smacss.com/), [SuitCSS](http://suitcss.github.io/), etc — Seja consistente!);
- Procure deixar os componentes ou funções reutilizáveis (evite acoplamento);
- Se possível, faça _code splitting_ 🔥;
- Se possível, crie teste unitários 🤩;
- Em caso de dúvida, verifique como funciona o [Raindrop](https://raindrop.io/).

## O que será avaliado

- Aplicativo rodando 😝
- Responsividade;
- Fidelidade ao protótipo;
- Domínio de CSS e JS;
- Estrutura do código (padrões, estrutura de pastas, etc);
- Uso de boas práticas (legibilidade, código limpo, etc);
- Funcionalidades adicionais são bem-vindas (use sua criatividade).

## Resultado esperado

![Empty state](./docs/empty_state.png)
-- _Empty State_

![Menu hover](./docs/menu_hover.png)
-- _Menu hover_

![Menu active](./docs/menu_active.png)
-- _Menu active_

![Menu actions](./docs/menu_actions.png)
-- _Menu actions_

![Add/Edit group](./docs/add_edit_group.png)
-- _Add/Edit group_

![Add URL](./docs/add_url.png)
-- _Add URL_
