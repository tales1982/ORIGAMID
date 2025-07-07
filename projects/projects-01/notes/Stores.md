# Redux Básico

Store

## Adicionar o Redux

Podemos instalar via NPM, caso estejamos usando com webpack/similar, ou diretamenta via link do script.

```js
npm install redux
```

[Copiar]()

Ou baixe o arquivo direto

[https://redux.js.org/introduction/installation](https://redux.js.org/introduction/installation)

```html
<script src="./redux.min.js"></script>
```

[Copiar]()

## Store

Primeiro iniciamos a nossa `store` com `Redux.createStore()`. A store dá acesso ao estado global e permite despacharmos ações que modificam o mesmo.

É essencial passarmos uma função como primeiro argumento do `createStore`, essa função é chamada de `reducer`. O `reducer` é a função responsável por retornar o estado atual da store.

```js
function reducer() {
  return {
    nome: 'André',
    id: 199,
  };
}

const store = Redux.createStore(reducer);
```

[Copiar]()

## getState

O método `getState()` retorna o estado atual da `store`.

```js
function reducer() {
  return {
    nome: 'André',
    id: 199,
  };
}

const store = Redux.createStore(reducer);
const state = store.getState();
console.log(state.nome); // André
```

[Copiar]()

## Reducer

A função de reducer recebe dois argumentos principais, o primeiro sendo o estado atual `state` e o segundo uma ação `action` que será utilizado para identificarmos as ações despachadas pela store.

```js
function reducer(state = 10, action) {
  return state;
}

const store = Redux.createStore(reducer);
const state = store.getState();
console.log(state); // 10
```

[Copiar]()

```js
// O estado inicial também pode ser passado direto no createStore
const store = Redux.createStore(reducer, 10);
```
