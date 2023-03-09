import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./components/Pages/Home/Home";
import Navbar from "./components/Headers&footer/Navbar";
import About from "./components/Pages/About";
import Tech from "./components/Pages/Tech";
import News from "./components/Pages/News";
import Contact from "./components/Pages/Contact";
import Vehicles from "./components/Pages/Vehicles";
import Footer from "./components/Headers&footer/Footer";



const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/tech",
        element: <Tech />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/vehicles",
        element: <Vehicles />,
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
