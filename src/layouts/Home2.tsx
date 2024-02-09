import Evento from '../components/eventos/Evento';
import Form from '../components/forms/Form';

function Home2() {
  return (
    <div style={{ textAlign: '-webkit-center' }}>
      <h1>Testando Eventos</h1>
      <Evento number="1" />
      <Form />
    </div>
  );
}

export default Home2;
