import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import LoginPage  from './pages/LoginPage';
import CreateProjectPage from './pages/CreateProjectPage';
import EditProjectPage from './pages/EditProjectPage';
import PledgePage from './pages/PledgePage';

// import './App.css'


const HeaderLayout = () => {
  return (
    <div>
    <Nav />
    <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/project/:id',
        element: <ProjectPage />
      },
      { path: '/login',
        element: <LoginPage />
      },
      { path: '/createproject',
        element: <CreateProjectPage />
      },
      { path: '/editproject/:id',
        element: <EditProjectPage />
      },
      { path: '/project/:id/pledges',
        element: <PledgePage />

      }

  
      
    ]
  }

])
function App() {

  return <RouterProvider router={router}></RouterProvider>
  
}
export default App
