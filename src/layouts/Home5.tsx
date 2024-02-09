import { useState } from 'react';
import Saudacao from '../components/basicos/Saudacao';
import SeuNome from '../components/basicos/SeuNome';

function Home5() {
  const [nome, setNome] = useState();

  return (
    <div style={{ textAlign: '-webkit-center' }}>
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
    </div>
  );
}

export default Home5;
