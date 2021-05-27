import React, { Component } from 'react';
import {Nav} from "react-bootstrap";
import './sideNav.css';
import Sanifly from './sanifly.png';

class SideNav extends Component {
    render() {
        return (
            <Nav className="col-md-2 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidenav-sticky"></div>
            <Nav.Item style = {{width : "14%", top : "100px", position:"fixed"}}>
                <Nav.Link href="/"><i class="fa fa-bath" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp; Washrooms</Nav.Link>
            </Nav.Item>
            <br></br>
            <Nav.Item style = {{width : "14%", top : "160px", position:"fixed"}}>
                <Nav.Link eventKey="link-1"><i class="fa fa-users" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp; Workers</Nav.Link>
            </Nav.Item>
            <Nav.Item style = {{width : "14%", top : "220px", position:"fixed"}}>
                <Nav.Link eventKey="link-2"><i class="fa fa-building" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp; Stocks</Nav.Link>
            </Nav.Item>
            {/* <center><img class="" src={Sanifly} style = {{width : "20%", bottom : "0px", position:"fixed"}}/></center> */}
            <img class="" src={Sanifly} style = {{width : "14%", bottom : "30px", position:"fixed"}}/>
            </Nav>
            
        )
    }
}
export default SideNav;