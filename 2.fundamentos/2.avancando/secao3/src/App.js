import './App.css';
import City from './assets/city.jpg';

function App() {
  return (
    <div className="App">
      <h1>Avançando no React</h1>
      {/** Imagem em Public */}
      <div>
        <img src='/img1.jpg' alt='Paisagem'/>
      </div>
      {/** Imagem em asset */}
      <div>
        <img src={City} alt='Cidade'/>
      </div>
    </div>
  );
}

export default App;