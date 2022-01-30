const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

sendMarsTemperature = () => {
    setTimeout(() => {
        const temperature = getMarsTemperature();
        return console.log(`Mars temperature is ${temperature} degree Celsius`)
    }, 1000);
}; // imprime "Mars temperature is: 20 degree Celsius", por exemplo

sendMarsTemperature();