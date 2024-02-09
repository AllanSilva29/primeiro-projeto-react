import { Link } from 'react-router-dom';

function Navbar(): JSX.Element {
  type RouteInfo = {
    link: string;
    name: string;
  };

  const routes: RouteInfo[] = [
    { link: '/', name: 'Home' },
    { link: '/empresa', name: 'Empresa' },
    { link: '/contatos', name: 'Contatos' },
  ];

  const navbar: JSX.Element[] = routes.map(({ link, name }) => (
    <ul>
      <Link to={link}>{name}</Link>
    </ul>
  ));

  return <>{navbar}</>;
}

export default Navbar;
