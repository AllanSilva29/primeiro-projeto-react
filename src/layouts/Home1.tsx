import HelloWorld from '../components/basicos/HelloWorld';
import Pessoa from '..//components/basicos/Pessoa';
import SayMyName from '../components/basicos/SayMyName';
import List from '../components/lista/List';

function Home() {
  type Pessoa = {
    nome: string;
    idade: number;
    foto: string;
    hobby: string;
  };

  const pessoa: Pessoa = {
    nome: 'Jurisberto',
    idade: 19,
    foto: 'https://picsum.photos/200',
    hobby: 'Comer cogumelos.',
  };

  const nome = 'Jucicreide';

  return (
    <div>
      <HelloWorld />
      <SayMyName name={nome + '?'} />
      <Pessoa
        foto={pessoa.foto}
        nome={pessoa.nome}
        idade={pessoa.idade}
        hobby={pessoa.hobby}
      />
      <List />
    </div>
  );
}

export default Home;
