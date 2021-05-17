import React from 'react'

const Login = (props) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h1>Logged In</h1>
      ) : (
        <button onClick={() => props.setisLoggedIn(true)}>click to login</button>
      )}
    </div>
  )
}

export default Login
