import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';
import Title from './components/Title';

function App() {
  const n = 15;
  const[name] = useState("Flavio");

  const redTitle = false;

  return (
    <div className="App">
      {/** CSS GLOBAL */}
      <h1>React com css</h1>
      {/** CSS COMPONENTE */}
      <MyComponent/>
      <p>Este paragrafo é do App.js</p>
      {/** INLINE CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red"}}>
        Este elemento foi estilizado de forma inline
        </p>
        {/** CSS INLINE DINÂMICO */}
        <h2 style={n < 10 ? ({color: "purple"}): ({color: "pink"})}>CSS dinâmico</h2>
        <h2 style={n > 10 ? ({color: "purple"}): ({color: "pink"})}>CSS dinâmico</h2>
        <h2 style={name === "Flavio" ? ({color: "green", backgroundColor: "#000"}): null}>Teste de nome</h2>
        {/** CLASSE DINÂMICA */}
        <h2 className={redTitle ? "title1" : "title2"}>
            Este título vai ter classe dinâmica
        </h2>
        {/** CSS MODULES */}
        <Title />
        
    </div>
  );
}

export default App;
