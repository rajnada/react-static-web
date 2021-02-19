import React from "react";
import {
  Button,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import searchIcon from "../../Assets/logo/search@1X.png";
import headerLogo from "../../Assets/logo/Vector Smart Object@1X.png";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import menu1 from "../../Assets/icons/tshirt.png";
import menu2 from "../../Assets/icons/electronics.png";
import menu3 from "../../Assets/icons/shooes.png";
import menu4 from "../../Assets/icons/watches.png";
import menu5 from "../../Assets/icons/wedding-ring@1X.png";
import menu6 from "../../Assets/icons/beauty.png";
import menu7 from "../../Assets/icons/pajamas@1X.png";
import menu8 from "../../Assets/icons/football.png";
import menu9 from "../../Assets/icons/leaves.png";
import menu10 from "../../Assets/icons/camera.png";
import menu11 from "../../Assets/icons/music.png";
import Home from "../Home";

const Header = () => {
  return (
    <>
      <section className="header-container">
        <div className="header-body">
          <div className="header-logo">
            <img src={headerLogo} alt="headerLogo" />
            <h3>Crafty</h3>
          </div>
          <div className="header-searchbar">
            <InputGroup className="input-searchgroup">
              <InputGroup.Prepend className="input-search-text">
                <InputGroup.Text id="basic-addon3">
                  Select a category
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="basic-url"
                placeholder="Search Your Products..."
                aria-describedby="basic-addon3"
                className="form-control"
              ></FormControl>
              <Button className="searchbtn">
                <img src={searchIcon} alt="search-btn" />
              </Button>
            </InputGroup>
          </div>
          <div className="account-sec">
            <button>
              <MdAccountCircle className="header-icons" />
              <label htmlFor="">my account:</label>
            </button>

            <button>
              <AiOutlineHeart className="header-icons" />
              <label htmlFor="">your Wishlist: </label>
            </button>
            <button>
              <AiOutlineShoppingCart className="header-icons" />
              <label htmlFor="">your Cart:</label>
            </button>
          </div>
        </div>
      </section>

      <Menu />
    </>
  );
};

export default Header;

export const Menu = () => {
  return (
    <>
      <div className="navbar-container">
        <Navbar
          collapseOnSelect
          expand="lg"
          className="navbar-header"
          variant="dark"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto menu-navbar">
              <NavDropdown
                title="SHOP BY CATEGORY"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  <img src={menu1} alt="Clothing" />
                  Clothing
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  <img src={menu2} alt="Electronics" />
                  Electronics
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  <img src={menu3} alt="Shoes" />
                  Shoes
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <img src={menu4} alt="Watches" />
                  Watches
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <img src={menu5} alt="Jewelery" />
                  Jewelery
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <img src={menu6} alt="Health and Beauty" />
                  Health and Beauty
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <img src={menu7} alt="Kids and Babies" />
                  Kids and Babies
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <img src={menu8} alt="Sports" />
                  Sports
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <img src={menu9} alt="Home and Garden" />
                  Home and Garden
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <img src={menu10} alt="Camera & Photography" />
                  Camera & Photography
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <img src={menu11} alt="Musical Instruments" />
                  Musical Instruments
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#features">HOME</Nav.Link>
              <Nav.Link href="#pricing1">CLOTHING</Nav.Link>
              <Nav.Link href="#pricing2">ELECTRONICS</Nav.Link>
              <Nav.Link href="#pricing3">HOT HEALTHY & BEAUTY</Nav.Link>
              <Nav.Link href="#pricing4">NEW WATCHES</Nav.Link>
              <Nav.Link href="#pricing5">JEWELLERY</Nav.Link>
              <Nav.Link href="#pricing6">SHOP KIDS & GIRLS</Nav.Link>
              <Nav.Link href="#pricing7">PAGES</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Home />
      </div>
    </>
  );
};
