import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane,faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
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

    </>

  )
}
