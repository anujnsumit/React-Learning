import {createRoot} from 'react-dom/client';
import "../index.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import { Outlet } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Testimonial from './components/Testimonial';
import Profile from './components/Profile';

const AppLayout=()=>{
    return(
        <div className="app-container">
         <Header/>
          <Outlet/>
         <Footer/>
        </div>
    )
}

const router = createBrowserRouter([
    {
      path: "/",
      element:<AppLayout/>,
      errorElement: <ErrorPage />,
    children:[
        {
            index:true,
            element:<Body/>
        },
        {
            path:"about",
            element:<About/>
        },
        {
            path:"contact",
            element:<Contact/>
        },
        {
            path:"testimonial",
            element:<Testimonial/>  
        },
        {
            path:"profile",
            element:<Profile/>
        }
    ]
    }]);


const root=createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router}/>)




