import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    // <nav className={props.darkMode ? "navbar navbar-expand-lg navbar-dark bg-dark" : "navbar navbar-expand-lg navbar-light bg-light"}>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode.mode} bg-${props.mode.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="about">About</a>
            </li> */}
          </ul>
          <div className={`form-check form-switch text-${props.darkMode? 'light' : 'dark'}`} >
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.showMode} value = {props.darkMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Dark Mode</label>
          </div>
          {/* <form className="d-flex mx-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-primary" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  )
}
