import { FC } from 'react';
import Home1 from './layouts/Home1';
import Home2 from './layouts/Home2';
import Home3 from './layouts/Home3';
import Home4 from './layouts/Home4';
import Home5 from './layouts/Home5';
import Home6 from './layouts/Home6';
import TsTest from './layouts/TsTest';

import './style.css';

export const App: FC<{ name: string; email: string }> = ({ name, email }) => {
  return (
    <>
      {/* <Home1 /> */}
      {/* <Home2 /> */}
      {/* <Home3 /> */}
      {/* <Home4 /> */}
      {/* <Home5 /> */}
      <Home6 />
      {/* <TsTest /> */}
    </>
  );
};
