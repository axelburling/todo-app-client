const API_URL = "http://localhost:4242";

export const getTodos = () => fetch(API_URL).then((res) => res.json());

export const createTodos = (todo) =>
  fetch(`${API_URL}/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });

export const updateTodo = (todo, id) =>
  fetch(`${API_URL}/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });

export const getTodo = (id) =>
  fetch(`${API_URL}/${id}`).then((res) => res.json());
