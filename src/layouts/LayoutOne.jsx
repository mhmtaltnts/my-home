import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../containers/Footer'
import Header from '../containers/header/Header'

const LayoutOne = () => {
  return (
    <section className='layout-one'>
        <Header/>
        <Outlet/>
        <Footer/>
    </section>
  )
}

export default LayoutOne