### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
you can use axios, or fetch

- What is a Promise?
an object that represents the evential completion of an async operation

- What are the differences between an async function and a regular function?
an async function allows for the ability to perform async actions inside of it - allows you to use await

- What is the difference between Node.js and Express.js?
express is a library built on top of node js, node is just a js environment with libraries that allows you to write js on the backend

- What is the error-first callback pattern?
try and catch

- What is middleware?
middleware are functions that run in between the request and the reponse

- What does the `next` function do?
the next function runs the next available matching route - either an error handler or another matching route

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
you are returning the variables which take time to load because they are aynchronous - you should turn them into json after they load using .then functions


```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
