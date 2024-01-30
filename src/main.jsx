import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Meals from './Components/Meals/Meals';
import MealDetails from './Components/MealDetails/MealDetails';
import Category from './Components/Categoris/Category/Category';
import Food from './Components/Categoris/Food/Food';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element:<About></About>,
      },
      {
        path:'/meals',
        element: <Meals></Meals>,
      
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish'),
        
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path:'/categories',
        element:<Category></Category>,
        loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
      },
      {
        path: '/meals/:mealId',
        element: <MealDetails></MealDetails>,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`)

      },
      {
        path: '/categories/:catergoryId',
        element: <Food></Food>,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.catergoryId} `)
      }
    ]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
