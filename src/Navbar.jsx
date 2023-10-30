import React from 'react';
import { Navbar,  Nav } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navabar.css';


const NavComponent = () => {
    return (
      
    <div className=' col-sm fixed-top'>
        <Navbar collapseOnSelect expand="sm" className='sticky-top  bg-white' style={{height : '90px'}}>

       
        <Navbar.Brand href="">
        <img src="./logo-adroll.svg" alt="" width="100" height="100"/>

           </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto " >
          <NavDropdown title="Why Adroll?"  >
          <i class="fi fi-rr-angle-small-down"></i>
              <NavDropdown.Item href="#action/3.1">Managed Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Case Studies</NavDropdown.Item>
              {/*<NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
    </NavDropdown.Item>*/}
    </NavDropdown>

           


            
           
            <NavDropdown title="Marketing Platform" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Platform</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Retargeting Ads</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Brand Awareness Ads</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Marketing Channels</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Connected Channels</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Audience & Segmentation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Marketing Channels</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Connected Channels</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Email  Marketing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Marketing Automation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Reporting & Insights</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title=" ecommerce" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Shopify</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Shopify plus</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">wooCommerce</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Wix</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">BigCommerce</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Magento</NavDropdown.Item>
              
            </NavDropdown>

            <Nav.Link href="#pricing">Pricing</Nav.Link>

            <NavDropdown title="Resources" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">AdRoll Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
              <img src='holiday-marketing-hero.webp'></img>
            </NavDropdown>


          </Nav>
          <Nav>
            <Nav.Link href="#deets"><u>Log in</u></Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
        <button type="button" className="but">GET STARTED</button>
    </Navbar>
    </div>
           
    )
    
}

export default NavComponent;