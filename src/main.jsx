import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import {ChakraProvider, theme} from "@chakra-ui/react"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home.jsx'
import Exchanges from './components/Exchanges.jsx'
import CoinDetails from './components/CoinDetails.jsx'
import Coins from './components/Coins.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/coins',
        element:<Coins/>
      },
      {
        path:'/coins/:id',
        element:<CoinDetails/>
      },
      {
        path:'/exchanges',
        element:<Exchanges/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>,
)

