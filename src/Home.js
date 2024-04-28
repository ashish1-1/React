import React from 'react'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        {/* <h1>
            Hello This Is Home Router
        </h1> */}
    </div>
  )
}

export default Home
