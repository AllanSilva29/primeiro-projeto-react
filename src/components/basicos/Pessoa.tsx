import styles from './Pessoa.module.css';

function Pessoa({ foto, nome, idade, hobby }) {
  return (
    <div>
      <img src={foto} alt={nome} />
      <h2 className={styles.pessoaNome}>Nome: {nome}</h2>
      <p className={styles.pessoaIdade}>Idade: {idade}</p>
      <p className={styles.pessoaHobby}>Hobby: {hobby}</p>
    </div>
  );
}

export default Pessoa;
