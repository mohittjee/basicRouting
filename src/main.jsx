import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useLoaderData,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import GlobalRoute from '../Layouts/GlobalRouteLayout';
import About from './pages/About';
import Help from '../Layouts/HelpLayout';
import FAQ from './pages/FAQ';
import Contactme, { contactAction } from './pages/contact';
import ErrorPage from './ErrorDisplay/GlobalError';
import Career, { CareerLoader } from './pages/Career';
import CareerDetail, { CareerDetailLoader } from './pages/CareerDetail';
import CareerLayout from '../Layouts/CareerLayout';
import Dashboard from './pages/Dashboard';
import CareerError from './ErrorDisplay/CareerError';


// const myrouter = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<GlobalRoute/>} >
//       <Route index element={<Home/>} />
//       <Route path='about' element={<About/>} />
//       <Route path='help' element={<Help/>}>
//         <Route path='faq' element={<FAQ/>} />
//         <Route path='contactme' element={<Contactme/>}/>
//       </Route>

//       <Route path='*' element={<ErrorPage/>}/>
//     </Route>
//   )
// );

const myrouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <GlobalRoute/>,
      children: [
        { index:true, element: <Dashboard /> },
        { path: '*', element: <ErrorPage />, errorElement: <ErrorPage/> },
        { path: 'about', element: <About /> },
        { path: 'home', element: <Home /> },
        { path: 'career', element: <CareerLayout />, errorElement:<CareerError/>,
          children:[
            {index:true, element: <Career/>, loader:CareerLoader},
            {path:':id', element: <CareerDetail/>, loader:CareerDetailLoader}
          ],
        },

        { path: 'help', element: <Help />,
          children: [
            { path: 'faq', element: <FAQ /> },
            { path: 'contactme', element: <Contactme />, action:contactAction },
          ],
        },
      ],
    },
  ]
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myrouter} />
  </React.StrictMode>,
)
