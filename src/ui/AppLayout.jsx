
import { Outlet } from 'react-router-dom';

function AppLayout() {


  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <h1>hi</h1>

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <h1>hello</h1>
    </div>
  );
}

export default AppLayout;
