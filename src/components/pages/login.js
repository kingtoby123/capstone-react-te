  
import React from 'react'

import SignupForm from '../forms/signupForm'
import Cookies from 'js-cookie'

export default function signup(props) {
    // if(Cookies.get("username")){
    //     props.history.push("/drills")
    // }
    return (
        <div className="signup-wrapper">
            <SignupForm changeRoute={props.history.push} handleSetUser ={props.handleSetUser}/>
            <p>Already have an account?</p>
            <button onClick={() => props.history.push("/loginForm")}>Login</button>
        </div>
    )
}