function Saudacao({ nome }) {
  function gerarSaudacao(algumNome: string) {
    return `Olá ${algumNome}!!`;
  }

  return <>{nome ? <p>{gerarSaudacao(nome)}</p> : <p>?</p>}</>;
}

export default Saudacao;
