import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider} from "react-router-dom"
import Layout from './Layout.jsx'
import AllUsers from './component/allUser/AllUsers.jsx'
import MapView from './component/mapView/MapView.jsx'
import SingleUserMap from './component/singleUserMap/SingleUserMap.jsx'
import Login from './component/authpages/Login.jsx'

const myRouter=createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout/>}>
      <Route path='' element={<AllUsers/>}/>
      <Route path='/map' element={<MapView/>}></Route>
      <Route path='/singleUserMap' element={<SingleUserMap/>} />
    </Route>
    <Route path='/login' element={<Login/>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={myRouter}>

    </RouterProvider>
  </StrictMode>,
)
