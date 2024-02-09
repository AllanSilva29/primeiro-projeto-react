import Item from './Item';

function List() {
  const piadas: string[] = [
    `O engenheiro olhou para o espelho. O que aconteceu?
    O engenheiro civil`,
    `Qual é o desastre natural que os cães mais odeiam?
    Fura-cão`,
    `O que a lâmpada falou quando a ligaram?
    “Tô ligada”`,
  ];

  return (
    <>
      <h1>Sua lista, piadista</h1>
      <ul>
        <Item piada={piadas[0]} autor="Estudante delinquente, 2016" />
        <Item piada={piadas[1]} autor="Doutor Pet, 2020" />
        <Item piada={piadas[2]} autor="Eletricista desempregado, 2024" />
        <Item piada={1234} autor="Eletricista desempregado, 2024" />
        <Item piada="..." />
      </ul>
    </>
  );
}

export default List;
