import React, { useContext, useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import { useWindowSize } from "@react-hook/window-size"
import ColorContext from '../../context/ColorContext'
import classes from "./navbar.module.scss"
import { FaBars, FaRegWindowClose } from 'react-icons/fa';

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

const List = () => {
  return (
    <ul className={classes.nav__list}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  )

}
const Menu = ({ setToggle }) => {
  return (
    <div className={classes.menu}>
      <button className={classes.nav_close_button} onClick={() => setToggle(prev => prev = "close")} >X</button>
      <List />
    </div>
  )
}

const Navbar = () => {
  /* const {colorMode, setColorMode} = useContext(ColorContext) */
  const [width, height] = useWindowSize();
  const [toggle, setToggle] = useState("close")

  
  console.log(width)

  return (
    <div>
      {(width <= 900 && toggle === "close") && <button className={classes.nav_open_button} onClick={() => setToggle(prev => prev = "open")} >O</button>}
      {(width <= 900 && toggle === "open") && <Menu setToggle={setToggle} />}
      { width > 900 && <List />}
      

      {/* <button className={classes.color_mode} onClick={() => colorMode ==="dark" ? setColorMode("light") : setColorMode("dark")}>Color Mode</button> */}
    </div>
  )
}

export default Navbar