import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="https://github.com/awaisqurashi/react-router-demo">reactApp</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="main">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="">Services</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="products" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Products
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/main/products/car">Car Products</Link></li>
              <li><Link className="dropdown-item" to="/main/products/bike">Bike Products</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item" to="/main/products/plan">Plan Products</Link></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="https://github.com/awaisqurashi/react-router-demo" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <Link className="btn btn-outline-success" to="/">Logout</Link>
        </form>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar