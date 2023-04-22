import React from 'react';
import MyCalendar from './Components/MyCalendar';
import Report from './Components/Report';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard';
import Content from './Components/Content';
import MainPage from './Components/MainPage';
import DefaultCalendar from './Components/Calendar';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
function App(){
  const router= createBrowserRouter([{
    path:"/",
    element:<MainPage/>,
    children:[
      {
        path:"/",
        element:<Content/>
      },
      {
        path:"/Calendar",
        element:<DefaultCalendar/>
      },
      {
        path:"/MyCalendar",
        element:<MyCalendar/>
      },
      {
        path:"/Dashboard",
        element:<Dashboard/>
      },
      {
        path:"/Report",
        element:<Report/>
      }
    ]
  }

  ])
  return (
    <div className='mainpage'>
      <RouterProvider router={router}/>
    </div>
      
  );
};

export default App;
