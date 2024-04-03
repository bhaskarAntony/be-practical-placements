import React from 'react'
import './header.css'

function Header() {
  return (
    <header className='bg-dark'>
    
    <nav className="navbar navbar-expand-lg navbar-dark  p-3">
    <div className="container-fluid">
      <a className="navbar-brand" href="#home"><img src="https://res.cloudinary.com/dfogisedz/image/upload/v1696400519/webinar/wuxjubwtp8csymfqv28t.png" alt="" /> </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className=" collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto ">
          <li className="nav-item">
            <a className="nav-link mx-2 active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="#register">Enroll</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link mx-2" href='https://be-practical.com'>Courses</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="https://be-practical.com/about-us-2/">about us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="https://be-practical.com/contact-us/">Contact us</a>
          </li>
          <li className="nav-item dropdown">
            <a className=" mx-2 btn btn-light px-3 py-2 " href="#register">
              Register Now
            </a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    </header>
  )
}

export default Header
