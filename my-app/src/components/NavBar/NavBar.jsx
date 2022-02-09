import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconLogoMobile, LogoP, Menu, MenuItem, MenuItemLink, NavBarContainer, NavBarWrapper, Select } from './Navbar.elements';
import Logo from '../../Images/Logo_Pasteleria_T.png';
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-router-dom';
import "./NavBar.css";
import { filterByCategories } from '../../redux/Actions';

function NavBar() {

  const dispatch = useDispatch();

  const categories = useSelector(state => state.categories)

  const [click, setClick] = useState(false);

  function changeClick(){
    setClick(!click);
    console.log(click);
  }

  function handleFilterCategories(e) {
    dispatch(filterByCategories(e.target.value));

  }

  return (

    <div className='navbar-container'>

      <NavBarContainer>
        
        <NavBarWrapper>

          <Link to='/'>
            <LogoP>
              <img src={Logo} alt="logo" width={100} height={100} />
              
            </LogoP>
          </Link>

          <IconLogoMobile onClick={() => changeClick()}>
            
            {
              click ? <FaTimes size={"1.5em"}/> : <FaBars size={"2em"} />
            }
          
          
          </IconLogoMobile>

          <Menu click={click}>

          <Link to="/about">
            <MenuItem onClick={() => changeClick()}>
              <MenuItemLink>About us</MenuItemLink>
            </MenuItem>
          </Link>

          {/* <Link to="/categories"> */}
            <MenuItem onChange={handleFilterCategories}>
              <label>Products</label>
              <Select>
                <option disabled>Select an option:</option>
                <option hidden>Select an option</option>
                <option value="All">All</option>
                {categories && categories.length > 0 ? categories.map(mp => (
                  <option key={mp} value={mp} >{mp}</option>
                  )) : null}
              </Select>
            </MenuItem>
          {/* </Link> */}

          <Link to="/contact">
            <MenuItem onClick={() => changeClick()}>
              <MenuItemLink>Contact</MenuItemLink>
            </MenuItem>
          </Link>

          <Link to="/cart">
            <MenuItem onClick={() => changeClick()}>  
              <MenuItemLink>Shopping Cart</MenuItemLink>
            </MenuItem>
          </Link>
          

          <Link to="/login"> 
            <MenuItem onClick={() => changeClick()}>
              <MenuItemLink>Login</MenuItemLink>
            </MenuItem>
          </Link>            
          </Menu>
         
        </NavBarWrapper>
      </NavBarContainer>
        
    </div>
  )
}

export default NavBar;
