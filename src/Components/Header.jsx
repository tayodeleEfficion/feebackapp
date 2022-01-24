import React from 'react';
import PropTypes from 'prop-types'
function Header({text}) {
  return (
  <header>
      <div className="container">
      <h1>{text}</h1>
      </div>
    
  </header>
  )
}

export default Header;
 Header.defaultProps = {
     text:"FeedBack UI"
 }

 Header.propoTypes={
 text:PropTypes.string.required
 }
