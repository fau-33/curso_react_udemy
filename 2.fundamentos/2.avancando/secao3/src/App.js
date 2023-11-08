import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {
  // const name = "Joaquim";
  const [userName] = useState("Maria");

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
      <ManageData />
      <ListRender />
      <ConditionalRender/>
      <ShowUserName name={userName} />
    </div>
  );
}

export default App;
