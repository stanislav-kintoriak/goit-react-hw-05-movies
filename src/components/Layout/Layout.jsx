import HeaderSpace from '../Header/Header';

import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <HeaderSpace />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
