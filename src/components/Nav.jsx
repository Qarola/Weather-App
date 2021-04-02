import React from 'react';
import Logo from '../images/sun-and-clouds.png';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-primary">
    <div className="container-fluid">
      <Link to='/'> 
        <span className="navbar-brand">
          <img id="logo" src={Logo} width="80" height="35" className="d-inline-block align-top" alt="" />
         Weather App
        </span>
      </Link>

        <SearchBar  onSearch={onSearch} />
        </div>
    </nav>
  );
};
export default Nav; 