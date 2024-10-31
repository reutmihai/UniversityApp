import { Suspense } from 'react';
import Sidebar from './common/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <main className="flexbox">
      <Sidebar />
      <section className="container">
        <Suspense>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
}

export default SharedLayout