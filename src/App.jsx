import './App.css';
import SayMyName from './components/SayMyName.jsx';
import Pessoa from './components/Pessoa.jsx';
import Frase from './components/Frase.jsx';

function App() {
  const nome = "Gatinha"
  return (
    <div className="App">
      <Frase/>
      <Frase/>
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
