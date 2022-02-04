import React, { useState } from 'react';
import { IconLogoMobile, LogoP, Menu, MenuItem, MenuItemLink, NavBarContainer, NavBarWrapper } from './Navbar.elements';
import Logo from '../../Images/Logo_Pasteleria_T.png';
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-router-dom';

function NavBar() {

    const [click, setClick] = useState(false);

    function changeClick(){
      setClick(!click);
      console.log(click);
    }

  return (

    <>

      <NavBarContainer>
        
        <NavBarWrapper>

          <LogoP>
            <img src={Logo} alt="logo" width={100} height={100} />
            
          </LogoP>

          <IconLogoMobile onClick={() => changeClick()}>
            
            {
              click ? <FaTimes size={"1.5em"}/> : <FaBars size={"2em"} />
            }
          
          
          </IconLogoMobile>

          <Menu click={click}>
            <MenuItem onClick={() => changeClick()}>
              <MenuItemLink>About</MenuItemLink>
            </MenuItem>
<Link to="/home">
            <MenuItem onClick={() => changeClick()}>
              <MenuItemLink>Products</MenuItemLink>
            </MenuItem>
</Link>
            <MenuItem onClick={() => changeClick()}>
              <MenuItemLink>Contact</MenuItemLink>
            </MenuItem>

            <MenuItem onClick={() => changeClick()}>
              <MenuItemLink>Shopping Cart</MenuItemLink>
            </MenuItem>
<Link to="/login"> 
            <MenuItem onClick={() => changeClick()}>
              <MenuItemLink>Login</MenuItemLink>
            </MenuItem>
</Link>            
          </Menu>
         
        </NavBarWrapper>
      </NavBarContainer>
        
    </>
  )
}

export default NavBar;
