import MyForm from './components/MyForm';
import './App.css';


function App() {
  return (
    <div className="App">
      <h2>Formulário</h2>
      <MyForm user={{name: 'Cesar', email: 'cesar@gmail.com', bio: 'Programador', role: 'Admin'}} />
      
    </div>
  );
}

export default App;
