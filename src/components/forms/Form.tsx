import { useState } from 'react';
import styles from './Form.module.css';

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();

    console.log(`Usuário "${name}" cadastrado.`);
    console.log(`Senha: ${password}`);
  }

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.Form}>
      <h1>Meu Cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="pass">Senha: </label>
          <input
            type="password"
            id="pass"
            name="pass"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
