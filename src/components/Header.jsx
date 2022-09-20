import React from 'react'
import Navigation from './Navigation'

const Header = (props) => {
  return (
    <div>
        <Navigation setCurrentPage={props.setCurrentPage}/>
    </div>
  )
}

export default Header