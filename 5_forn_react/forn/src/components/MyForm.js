import './MyForm.css';
import { useState } from 'react';

function MyForm({user}) {
  // 6 - controlled inputs
  // 3 - gerenciamento de estado - dados
  const [nome, setNome] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState(user ? user.bio : '');
  const [role, setRole] = useState(user ? user.role : '');

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
    console.log('Bio: ', bio);
    console.log('Função: ', role);

    // 7 - limpar form depois do envio
    setNome('');
    setEmail('');
    setBio('');
    setRole('');
    
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
                onChange={handleName} 
                value={nome} />
            </div>
            {/* 2 - label envolvendo o input */}
            <label>
                <span>E-mail:</span>
                {/* 2 - Simplificando os states */}
                <input type='email' 
                name='email'
                placeholder='Digite seu e-mail'
                onChange={(e) => setEmail(e.target.value)}
                value={email} />
            </label>
            {/* 8 - Text area */}
            <label >
            <span>Bio:</span>
            <textarea
            name='Bio'
            placeholder='Mensagem'
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            />
            </label>
            {/* 4 - Select */}
            <label>
                <span>Funcão:</span>
                <select
                name='role'
                value={role}
                onChange={(e) => setRole(e.target.value)}
                >
                    <option value='user'>Usário</option>
                    <option value='editor'>Editor</option>
                    <option value='admin'>Administrador</option>
                </select>
            </label>
            <input type='submit' value='Enviar' />
        </form>
    </div>
  )
}

export default MyForm