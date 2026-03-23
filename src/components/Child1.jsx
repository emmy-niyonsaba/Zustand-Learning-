import React from 'react'
import Child2 from './Child2'

function Child1({ user }) {
    // console.log(user)
  return (
    <div>
        <Child2 user={user} />
    </div>
  )
}

export default Child1
