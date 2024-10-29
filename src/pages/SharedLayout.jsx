import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
      <main className="flexbox">
        <Sidebar />
        <section className="container">
            <Outlet />
        </section>
      </main>
  );
}

export default SharedLayout