import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function NavBar() {
  const showarrow = useRef()
  useEffect(() => {
    addEventListener("scroll" , () => {
      if(scrollY > 100){
        showarrow.current.style.opacity = "1"
      }else{
        showarrow.current.style.opacity = "0"
      }
    })
  },[])
  const GoUp = () => {
    scrollTo({top:0 , behavior:"smooth"})
  }
  const state = useSelector (state => state.Cart)
  return (
    <>
    <Navbar expand="lg" bg='danger' className='fixed-top'>
      <Container>
        <Link to={"/"} className='navbar-brand text-light logo'>E-Commerce</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Link to={"/"} className='nav-link text-light'>Home</Link>
            <Link to={"/Shop"} className='nav-link text-light'>Shop</Link>
            <div className='position-relative d-flex justify-content-center'>
            <Link to={"/Cart"} className='nav-link text-light'><FontAwesomeIcon icon={faShoppingBag}/></Link>
            <div className='number'>{state.length}</div> 
            </div> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div ref={showarrow} className='arrow position-fixed' onClick={GoUp}>
    <FontAwesomeIcon icon={faArrowUp} />
    </div>
    <Outlet/>
    </>
  );
}

export default NavBar;