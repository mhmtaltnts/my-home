import React, {useState} from 'react'
import classes from "./sign.scss"

const UpIn = () => {
    return (
        <div className={classes.upin}>
            <button className={classes.login}>Log In</button>
            <div class={classes.vl}></div>
            <button className={classes.signup}>Sign Up</button>
        </div>
    )
}

const Sign = () => {
    const [user] = useState("")
  return (
    <div>
        {!user && <UpIn />}
       {user &&  <button>Log Out</button>}
    </div>
  )
}

export default Sign