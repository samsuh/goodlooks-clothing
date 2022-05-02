import React from 'react'
import '../../components/directory-item/directory-item.component'
import Directory from '../../components/directory/directory.component'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Outlet />
      <Directory />
    </div>
  )
}

export default Home
