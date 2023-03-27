import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Home from './components/Pages/Home/Home';

import About from './components/Pages/About';
import Tech from './components/Pages/Tech';
import News from './components/Pages/News';
import Contact from './components/Pages/Contact';
import Vehicles from './components/Pages/Vehicles';
import Footer from './components/Headers&footer/Footer';
import E1 from './components/Pages/Vehicles/E1';
import Eiv7 from './components/Pages/Vehicles/Eiv7';
import Eiv12 from './components/Pages/Vehicles/Eiv12';
import Iev from './components/Pages/Vehicles/Iev';
import Metrocity from './components/Pages/Vehicles/Metrocity';
import Metrodecker from './components/Pages/Vehicles/Metrodecker';
import ModelRanges from './components/Pages/Vehicles/ModelRanges';
import Solo from './components/Pages/Vehicles/Solo';
import Eiv22 from './components/Pages/Vehicles/Eiv22';
import Nav from './components/Headers&footer/Nav';

const Layout = () => {
  return (
    <div className='app'>

      <Nav />
      <div className='top-0'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/tech',
        element: <Tech />,
      },
      {
        path: '/news',
        element: <News />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/vehicles',
        element: <Vehicles />,
      },
      {
        path: '/e1',
        element: <E1 />,
      },
      {
        path: '/eiv7',
        element: <Eiv7 />,
      },
      {
        path: '/eiv12',
        element: <Eiv12 />,
      },
      {
        path: '/eiv22',
        element: <Eiv22 />,
      },
      {
        path: '/iev',
        element: <Iev />,
      },
      {
        path: '/metrocity',
        element: <Metrocity />,
      },
      {
        path: '/metrodecker',
        element: <Metrodecker />,
      },
      {
        path: '/modelrange',
        element: <ModelRanges />,
      },
      {
        path: '/solo',
        element: <Solo />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
