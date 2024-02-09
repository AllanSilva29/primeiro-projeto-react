import Button from './Button';

function Evento({ number }) {
  function meuEvento() {
    console.log(`Evento qualquer ativado no componente pai`);
  }

  function evento1() {
    console.log('Evento 1 ativado no componente filho');
  }

  function evento2() {
    console.log('Evento 2 ativado no componente filho');
  }

  return (
    <div>
      <p>Clique para disparar um evento:</p>
      <div>
        <Button event={evento1} text="Evento 1" />
      </div>
      <div>
        <Button event={evento2} text="Evento 2" />
      </div>
      <button onClick={meuEvento}>Evento qualquer</button>
    </div>
  );
}

export default Evento;
