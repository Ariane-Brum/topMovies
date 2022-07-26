# TopMovies.

Catálogo de filmes, utilizando a API [**The Movie DB**](https://developers.themoviedb.org/3/getting-started/introduction) .

# Sumário

- [Descrição](#descricao)
- [Funcionalidades](#funcionalidades)
- [Tecnologias utilizadas](#tecnologias)
- [Instruções para rodar o projeto](#instrucoes)
- [Organização e estruturação do projeto](#organizacao)
- [Desenvolvimento](#desenvolvimento)
- [Resultado](#resultado)

# Descrição do Projeto <a name="descricao"></a>

Este projeto foi desenvolvido com o intuito de praticar Typescript + Reactjs e TailwindCss.

# Funcionalidades <a name="funcionalidades"></a>

- [x] **Estado global**: O resultado da API deve ser armazenado em um estado global. (Pode ser utilizado Redux, Context, Vuex ou tecnologia equivalente do framework utilizado)
- [x] **Limitar requisições**: Limitar cada requisição da página em 20 resultados para não sobrecarregar a API.
- [x] **Botão Mais Detalhes**: botão Mais Detalhes para abrir uma página com as informações do filme.
- [x] **Buscador**: Configurar o buscador para poder filtrar por nome do filme.
- [x] **Layout responsivo**

# Tecnologias Utilizadas <a name="tecnologias"></a>

- [**React**](https://pt-br.reactjs.org/)
- [**TypeScript**](https://www.typescriptlang.org/)
- [**React Hooks**](https://pt-br.reactjs.org/docs/hooks-intro.html)
- [**React Router Dom**](https://www.npmjs.com/package/react-router-dom)
- [**Tailwindcss**](https://tailwindcss.com/)
- [**Phosphor Icons**](https://phosphoricons.com/)
- [**Axios**](https://axios-http.com/docs/intro)
- [**Date-fns**](https://date-fns.org/)

# Instruções para rodar o projeto <a name="instrucoes"></a>

### Será necessário ter instalado na sua máquina:

```
Git
React
Node v6.0.0^
```

- Clone o repositório com o comando **git clone**:

```
git clone ------
```

- Entre no diretório que acabou de ser criado:

```
cd top-movies
```

- Para o projeto funcionar na sua máquina, será necessário instalar suas dependências, para isso, utilize o comando **npm install**:

```
npm install
```

- Pronto, agora o projeto está pronto para ser rodado localmente, utilizando o comando **npm start**:

```
npm run dev
```

# Organização e estruturação do projeto <a name="organizacao"></a>

O projeto está organizado e estruturado da seguinte forma:

```
      ├── README.md
      ├── index.html
      ├── src
      |     ├── components
      |     |       ├── helpers
      |     |       |     ├── Head.tsx
      |     |       |     ├── Loading.tsx
      |     |       ├── Button.tsx
      |     |       ├── Card.tsx
      |     |       ├── Container.tsx
      |     |       ├── Footer.tsx
      |     |       ├── Header.tsx
      |     |       ├── MovieInfo.tsx
      |     ├── contexts
      |     |       ├── MovieContext.tsx
      |     ├── Hooks
      |     |       ├── useMovies.ts
      |     ├── interfaces
      |     |       ├── MoviesProps.ts
      |     ├── pages
      |     |       ├── Home.tsx
      |     |       ├── Movie.tsx
      |     |       ├── Search.tsx
      |     ├── public
      |     |       ├── favicon.svg
      |     ├── utils
      |     |       ├── api.ts
      |     |       ├── formatCurrency.ts
      |     |       ├── formatHours.ts
      |     |       ├── index.ts
      |     ├── App.tsx
      |     ├── index.tsx
```

# Desenvolvimento <a name="desenvolvimento" ></a>

## Fetch

Para realizar o fetch no banco de dados da API, foi utilizado o client HTTP [**Axios**](https://axios-http.com/docs/intro).

## Estilização

Para realizar a estilização, foi utilizado o framework [**Tailwindcss**](https://tailwindcss.com/).

## Icones

Os ícones utilizados foram os da biblioteca [**Phosphor Icons**](https://phosphoricons.com/)

# Resultado <a name="resultado"></a>

## Página Home com a Lista de filmes

![Home](https://user-images.githubusercontent.com/64805032/180656016-4accec20-6337-40c8-b53a-8ba1722efcac.png)

## Página Movie

![Página Movie](https://user-images.githubusercontent.com/64805032/181104545-518b4e9e-7dc9-4029-b54b-98a9acfa852e.png)

## Página Search

![Página Search](https://user-images.githubusercontent.com/64805032/181104866-40fb88ad-6ac4-4cc1-bbb3-fa9cc0cf5e8d.png)

## 🦄 Autor<br>

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Ariane-Brum">
         <img src="https://avatars.githubusercontent.com/u/64805032?v=4" width="100px;" alt="Foto de Ariane Brum no GitHub"/><br>
        <sub>
          <b>Ariane Brum</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
