import React from 'react';
import Bootstrap from 'bootstrap';
import styles from './styles.css';
// import styles2 from './styles';

const navStyle = {
    color: 'white',
    backgroundColor: '#B55332',
};

const textStyle = {
  color: 'white'
}


const NavBar = () => {
    return (
      // <div id="page-content-wrapper">
      <div style={{width:'100%'}}>
        <nav className="navbar navbar-expand-lg navbar-light" style={navStyle}>
        <div className="container-fluid">
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" style={textStyle} aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" style={textStyle} aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" style={textStyle} aria-current="page" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" style={textStyle} aria-current="page" href="#">More</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      </div>

      // <div>
      // <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      //   <button class="btn btn-primary" id="menu-toggle">Toggle Menu</button>

      //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      //     <span class="navbar-toggler-icon"></span>
      //   </button>

      //   <div class="collapse navbar-collapse" id="navbarSupportedContent">
      //     <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
      //       <li class="nav-item active">
      //         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link" href="#">Link</a>
      //       </li>
      //       <li class="nav-item dropdown">
      //         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      //           Dropdown
      //         </a>
      //         <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
      //           <a class="dropdown-item" href="#">Action</a>
      //           <a class="dropdown-item" href="#">Another action</a>
      //           <div class="dropdown-divider"></div>
      //           <a class="dropdown-item" href="#">Something else here</a>
      //         </div>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>
      // </div>

    )
};

export default NavBar;