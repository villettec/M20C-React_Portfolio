import React from 'react'
import Navigation from './Navigation'

const Sidebar = (props) => {
  return (
    <div>
        <Navigation setCurrentPage={props.setCurrentPage}/>
    </div>
  )
}

export default Sidebar