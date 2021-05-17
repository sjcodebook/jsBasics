import React, { useState } from 'react'

import Login from './components/Login'

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false)

  return (
    <div>
      <Login isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
      {isLoggedIn && (
        <>
          <h2>some secure content</h2>
          <button onClick={() => setisLoggedIn(false)}>Logout</button>
        </>
      )}
    </div>
  )
}

export default App
