import Listas from '../components/renderizacao/Listas';

function Home4() {
  const lista = ['React', 'Vue', 'Angular']

  return (
    <div style={{ textAlign: '-webkit-center' }}>
      <h1>Renderização de Listas</h1>
      <Listas itens={lista}/>
      <Listas itens={[]}/>
    </div>
  );
}

export default Home4;
