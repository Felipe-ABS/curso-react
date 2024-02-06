import './App.css';
import SayMyName from './components/SayMyName.jsx';
import Pessoa from './components/Pessoa.jsx';

function App() {
  const nome = "Gatinha"
  return (
    <div className="App">
      <SayMyName nome="Felipe"/>
      <SayMyName nome="Jamili"/>
      <SayMyName nome={nome}/>
      <Pessoa
        nome="Felipe"
        idade="24"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
