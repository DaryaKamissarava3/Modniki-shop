import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import './navigation.css';

const Navbar = () => {
  const isAuth = useSelector(state => state.user.isAuth)

  return (
    <div className="container">
      <div className="navigation">
        {!isAuth && <div ><Link to="/login" className="nav-login">Sign in</Link></div>}
        {!isAuth && <div ><Link to="/registration" className="nav-registration">Registration</Link></div>}
      </div>
    </div>
  );
};

export default Navbar;