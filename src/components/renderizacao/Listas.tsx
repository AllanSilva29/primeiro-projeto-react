function Listas({ itens }) {
  return (
    <>
      <h3>Lista de coisas boas:</h3>
      {itens.length > 0 ? (
        itens.map((item: any, index: number) => <p key={index}>{item}</p>)
      ) : (
        <p>Não há itens</p>
      )}
    </>
  );
}

export default Listas;
