import React,{Component} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import TopNav from './topNav';
import SideNav from './sideNav';

class Dashboard extends Component{
    render(){
        return(
            <Container fluid>

                <Row>
                    <Col xs={12} sm={2} lg={0} id="sidenav-wrapper">      
                       <SideNav /> 
                    </Col>
                    <Col  xs={12} id="page-content-wrapper">
                        <div class="row mr-0 pr-0">
                            
                            <div class="col-md-12 mr-0 pr-0" >
                                <TopNav/>
                            </div>
                        </div>
                    </Col> 
                </Row>

            </Container>
        )
    }
}
export default Dashboard;