import { useState } from 'react';

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e: any) {
    e.preventDefault();
    setUserEmail(email);
    console.log(userEmail);
  }

  function limparEmail(e: any) {
    setUserEmail('');
  }

  return (
    <div>
      <h2>Cadastre seu email: </h2>
      <form>
        <input
          type="text"
          placeholder="Digite seu email"
          style={{ marginRight: '10px' }}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <button onClick={enviarEmail}>Enviar email</button>
        <br />
        <br />
        {userEmail && (
          <div>
            O email do usuário é: {userEmail}
            <br />
            <button onClick={limparEmail}> Limpar Email</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Condicional;
