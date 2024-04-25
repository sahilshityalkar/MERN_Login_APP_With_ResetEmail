import React from 'react'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'

// improt all component
import PageNotFound from './components/PageNotFound'
import Password from './components/Password.js'
import Profile from './components/Profile.js'
import Recovery from './components/Recovery.js'
import Register from './components/Register.js'
import Reset from './components/Reset.js'
import UserName from './components/UserName.js'

export default function App() {

  // crete routers
  const router = createBrowserRouter([
    {
      path:'/',
      element:<div>Root router</div>
    },
    {
      path:'/register',
      element:<Register>Register router</Register>
    },
    {
      path:'/pagenotfound',
      element:<PageNotFound>page not found</PageNotFound>
    },
    {
      path:'/recovery',
      element:<Recovery>Recovery router</Recovery>
    },
    {
      path:'/profile',
      element:<Profile>profile router</Profile>
    },
    {
      path:'/password',
      element:<Password>Register router</Password>
    },
    {
      path:'/reset',
      element:<Reset>Register router</Reset>
    },
    {
      path:'/userName',
      element:<UserName>Register router</UserName>
    },
  ])
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
