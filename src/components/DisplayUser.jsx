
// import React from 'react'
import Child1 from './Child1'
function DisplayUser({ user, setUser }) {
    // console.log(user)
  return (
    <div>
      <Child1 user={user} />
    </div>
  )
}

export default DisplayUser
