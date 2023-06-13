import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Header from './compnent/header/Header';

function App() {
  const Layout= ()=>{
    return (
      <div >
        <Header/>
        {/* <Navbar/> */}
        <div style={{display:'flex'}}>
          {/* <Leftbar/> */}
          <Outlet/>
          {/* <Rightbar/> */}
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>
    },
    
  ]);
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
