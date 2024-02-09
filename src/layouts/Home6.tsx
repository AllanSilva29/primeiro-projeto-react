import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Home from '../pages/Home';
import Empresa from '../pages/Empresa';
import Contatos from '../pages/Contatos';

function Home6() {
  const routes = [
    {
      name: 'Home',
      link: '/',
      component: <Home />,
    },
    {
      name: 'Empresa',
      link: '/empresa',
      component: <Empresa />,
    },
    {
      name: 'Contatos',
      link: '/contatos',
      component: <Contatos />,
    },
  ];

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {routes.map(({ link, component }) => (
            <Route path={link} element={component} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default Home6;
