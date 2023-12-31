import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Header from './compnent/header/Header';
import Navbar from './compnent/navbar/Navbar';
import Shop from './pages/shop/Shop';
import Footer from './compnent/footer/Footer';

function App() {
  const Layout= ()=>{
    return (
      <div style={{height:'100vh'}}>
        <Header/>
        <Navbar/>
        <div style={{display:'flex'}}>
          {/* <Leftbar/> */}
          <Outlet/>
          {/* <Rightbar/> */}
        </div>

        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>,
        },
        {
          path:'/shop',
          element:<Shop/>,
        },
    ]
    },
    
  ]);
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
