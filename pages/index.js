import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane,faUser, faCartShopping,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import image from 'next/image';
import images from '../public/oww.jpg'

export default function Home() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container">
    <a className="navbar-brand coch" href="#">
    <FontAwesomeIcon icon={faPaperPlane} className="fa-solid plan" /> E-Coaching
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <a className="nav-link active " aria-current="page" href="#">
          Home
        </a>
        <a className="nav-link active px-3" href="#">
          Services
        </a>
        <a className="nav-link active px-3" href="#">
          Popular Courses
        </a>
        <a className="nav-link active px-3" href="#">
          Top Selling Courses
        </a>
        <a className="nav-link active px-3" href="#">
          All Courses
        </a>
      </ul>
    </div>
    <form className="d-flex" role="search">
      {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
      <button className="border border-0 px-4">
      <FontAwesomeIcon icon={faCartShopping} className="fa-solid" />
      </button>
      <button className="btn btn-outline-success fs-5" type="submit">
      <FontAwesomeIcon icon={faUser} className="fa-regular" /> Sign / Register
      </button>
    </form>
  </div>
</nav>

<div class="hero container text-center ">
  <div class="row align-items-center">
    <div class="col">
      <h1 style={{ textAlign: 'left' }}>Take Your <span style={{ color: 'limegreen' }}>Dreams</span> To The Next Level!</h1>
      <h5 className='mt-4' style={{ textAlign: 'left' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has,</h5>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2 mt-4"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
          <button className="btn btn-outline-success mt-4" type="submit" >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
      </form>
    </div>
    <div class="col-4 oww">
    <img src="oww.jpg" width="550px" height="550px" alt="My Image" />
    </div>
    <div class="col-4 count">
      <div>
      <span ><h3 style={{ color: 'limegreen' }}>100</h3> Subject to choose from</span>
      <span></span>
      </div>

      <div className='mt-5'>
      <span><h3 style={{ color: 'limegreen' }}>120+</h3>Awsome Courses</span>
      <span></span>
      </div>

      <div className='mt-5'>
      <span><h3 style={{ color: 'limegreen' }}>120</h3> Professional Teacher</span>
      <span></span>
      </div>

    </div>
  </div>
</div>

      <div className='hero2 container'>
            <h1 className=""style={{ textAlign: 'center' }}>What Our Student Say About Us</h1>
      </div>

      <div>
        
      </div>
    </>

  )
}
