import React from 'react'
import {  NavLink } from 'react-router-dom'
import {login} from "../Components1/login"






export default function Header() {
  

  
  return (
    <>
    
    <nav class="navbar navbar-expand-sm navbar-dark bg-secondary">
      <div class="container-fluid">
      
    <a class="navbar-brand"> <NavLink to="/" className='road'><img src="./images/img5.jpg" class="rounded-circle " width={60}/> <a className='logo'>ROADStar</a> </NavLink> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
      <li class="nav-item">
      
        <NavLink to='/home' class="nav-link" className='pages'> <h5><img src="./images/img6.jpg" class="rounded-circle " width={40}/> <a className='logo'></a>Home &emsp; </h5> </NavLink>

        </li>
        
        
       
       <li>
        <a class="nav-item" className='pages'> <NavLink to='/product' className='pages navlink' > <h5><img src="./images/img7.webp" class="rounded-circle " width={40}/> <a className='logo'></a>Products &emsp;</h5>  </NavLink> </a>
    </li>
    
     </ul>
     <div className='buttons'>
      <a href='' className='btn btn-outline-danger'>
       <NavLink to='/login' className="loginn"><img src="./images/img8.webp" class="rounded-circle " width={60}/> <a className='logo'>login</a>
        Login</NavLink> </a>&emsp;
        
          <NavLink to="/cart" className="btn btn-outline-danger ms-2"><img src="./images/img9.jpg" class="rounded-circle " width={60}/> <a className='logo'>Cart</a>
        <a className="loginn" > Cart   </a> </NavLink>
      
      </div> 

        </div> 
        
    </div>
    </nav>
    <footer>
        <p>&copy; 2024 Your Website Name. All rights reserved. | <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a></p>
    </footer>
    {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">Navbar</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    
  </div>
  </nav> */}


   </>
  )
}




