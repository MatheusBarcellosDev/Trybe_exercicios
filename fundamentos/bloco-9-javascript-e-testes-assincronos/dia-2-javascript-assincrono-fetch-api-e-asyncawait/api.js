const urlCripto = `https://api.coincap.io/v2/assets`



const costructor = ({id, symbol, priceUsd}) => {
    return `<p> ${id} (${symbol}): ${Number.parseFloat(priceUsd).toFixed(2)}</p>`
};

const setToArray = (data) => {
    const criptoContainer = document.getElementById('criptoContainer');
    const array = data.filter(cripto => cripto.rank < 11).map(cripto => costructor(cripto));
    return array.forEach(cripto => criptoContainer.innerHTML += cripto);
}


const fetchJoke = () => {
    const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    };
  
    fetch(urlCripto, myObject)
      .then(response => response.json())
      .then(data => setToArray(data.data))
      .then(data => console.log(data))
      
  };

  setTimeout(() => console.log(numeroAleatorio()), 3000);
  
  window.onload = () => fetchJoke();