import "./App.css";

const Task = (value) => {
  return <li>{value}</li>;
};
const talks = [
  "Estudar",
  "Limpar a casa",
  "Levar o cachorro para passear",
  "Estudar React",
  "Lavar o carro"
];

function App() {
  return (
    <ul>
      {talks.map((talk) => Task(talk))}
    </ul>
  );
}

export default App;
