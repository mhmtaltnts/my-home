import React from 'react'
import Logo from '../../components/logo/Logo'
import Navbar from '../../components/navbar/Navbar'
import classes from "./header.module.scss"

const Header = () => {
  return (
    <header className={classes.hm__header}>
        <Logo/>
        <Navbar/>
    </header>
  )
}

export default Header