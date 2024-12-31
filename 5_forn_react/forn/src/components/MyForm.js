import './MyForm.css';
import { useState } from 'react';

function MyForm() {
  // 3 - gerenciamento de estado - dados
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setNome(e.target.value);
  }

  // console.log(nome);
  // console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviou o form');
    console.log('Nome: ', nome);
    console.log('Email: ', email);
    
  }
  return (
    <div>
      {/* 5 - Envio de form */}
        {/* 1 - Criação de um form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Nome:</label>
                <input type='text'
                name='name' 
                placeholder='Digite seu nome' 
                onChange={handleName} />
            </div>
            {/* 2 - label envolvendo o input */}
            <label>
                <span>E-mail:</span>
                {/* 2 - Simplificando os states */}
                <input type='email' 
                name='email'
                placeholder='Digite seu e-mail'
                onChange={(e) => setEmail(e.target.value)} />
            </label>
            <input type='submit' value='Enviar' />
        </form>
    </div>
  )
}

export default MyForm