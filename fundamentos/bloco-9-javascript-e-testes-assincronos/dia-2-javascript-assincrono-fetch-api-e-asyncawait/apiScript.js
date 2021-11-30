const API_URL = 'https://icanhazdadjoke.com/';

const mostrarPiada = (obj) => {
  const piada = document.getElementById('jokeContainer');
  piada.innerHTML = obj.joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => mostrarPiada(data))
    .then(data => console.log(data));
};

window.onload = () => fetchJoke();