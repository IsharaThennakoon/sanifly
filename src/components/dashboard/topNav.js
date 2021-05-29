import React, { Component } from 'react';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
// import MenuItem from '@material-ui/core/MenuItem';
import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import "./topNav.css";

class TopNav extends Component {
   

    render() {
        return (
            <Navbar className="bg-light justify-content-between navbar-right" fixed="top"  >
            <nav class="navbar navbar-expand-sm navbar-light bg-light text-right " >
            {/* <Form inline> */}
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                aria-expanded={false}
                aria-haspopup={true}
                as={Nav.Link}
                data-toggle="dropdown"
                id="navbarDropdownMenuLink"
                variant="default"
                className="m-0"
                size="lg"
               
              >
                <span ><i className="fa fa-user-circle  fa-2x" ></i></span>
              </Dropdown.Toggle>
                <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
                    {/* <Dropdown.Item href="#pablo" >  Action   </Dropdown.Item>       */}
                    <Dropdown.Item href="#/action-1"><i className="fa fa-user fa-fw"></i>&nbsp;&nbsp;Edit Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><i className="fa fa-sign-out fa-fw"></i> &nbsp;Logout</Dropdown.Item> 
                
                   
                    
                </Dropdown.Menu>
                </Dropdown>

             {/* <DropdownButton id="dropdown-basic-button" title="My Account" alignright size="sm">   */}
             {/* <Dropdown.Menu id="dropdown-basic-button" title={<span><i className="fa fa-user fa-fw"></i></span>} alignright size="sm">   

                <Dropdown.Item href="#/action-1"><i className="fa fa-user fa-fw"></i>&nbsp;&nbsp;Edit Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2"><i className="fa fa-sign-out fa-fw"></i> &nbsp;Logout</Dropdown.Item> */}
                
            {/* </Dropdown.Menu>  */}
            {/* </DropdownButton>  */}
            
            {/* </Form> */}

             </nav> 
             </Navbar>
          
             );
    }
}
export default TopNav;