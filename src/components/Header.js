import React from 'react';
import PropTypes from 'prop-types';
//this is a functional component in react js
 const  Header = (props) =>{
   const Styles ={
    color:'#000000;'
   }
   const{branding}=props;
  return (
  <nav className="navbar navbar-dark navbar-expand-sm bg-primary mb-3 py-0">
<div className="container">
<a href="/" className="navbar-brand">{branding}</a>
</div>
<ul className="navbar-nav mr-auto">
  <li className="navbar-item">
  <a href="/" className="navbar-link" styles={Styles}>Home</a>
  </li>
</ul>
  </nav>
  )
};

Header.defaultProps = {
branding:'My App'
};

// eslint-disable-next-line react/no-typos
Header.propTypes = {
  branding: PropTypes.string.isRequired
}


export default Header;
