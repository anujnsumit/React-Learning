import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import PageNotFound from "./components/PageNotFound";

const Applayout = () => (
    <div className="app">
        <Header />
        <Outlet />
    </div>
)

const root = createRoot(document.getElementById("root"));

const ReactLazyComp=(Component)=>props=>(
   <Suspense fallback={<div>Loading...</div>}>
        <Component {...props}/>
    </Suspense>)


const BodyComp=ReactLazyComp(lazy(()=>import("./components/Body")));
const AboutComp=ReactLazyComp(lazy(()=>import("./components/About")));
const ContactComp=ReactLazyComp(lazy(()=>import("./components/Contact")));
const RestaurantDetailComp=ReactLazyComp(lazy(()=>import("./components/RestaurantDetails")));

const route = createBrowserRouter([
    {
        path: "/",
        element: < Applayout/>,
        errorElement:<PageNotFound/>,
        children: [
            {
                path: "/",
                element:<BodyComp/>
            },
            {
                path: "/about",
                element: <AboutComp />
            },
            {
                path: "/contact",
                element: <ContactComp />
            },
            {
                path: "/resturant-details/:resId",
                element: <RestaurantDetailComp />
            }
        ]
    }
])

root.render(<RouterProvider router={route} />);