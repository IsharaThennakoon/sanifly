import React,{Component} from 'react';
import "./landingPage.css";
import Sanifly from "./sanifly.png";
// import { useHistory } from 'react-router-dom';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
// import { withRouter } from "react-router";

class LandingPage extends Component{
    
    viewLogin = function() {
        // const { history } = this.props;
        // history.push("/login");
        window.location.href="/login";
      };
    render(){
        return(
            <div className = "container" style={{textAlign : "center",left:"0",right:"0"}}>
                
                <h1 className="mt-5 pt-5" style={{fontSize:"50px",marginBottom:"0px"}}>Welcome to</h1>
                <img src={Sanifly} width="600px" height="150px "style={{maxWidth:"600px",marginTop:"0px"}} alt="N/A"></img>
                <div style={{position:"fixed", bottom : "0",left:"0",right:"0",textAlign : "center" }}>
                    <button type="button" className="btn btn-secondary mb-3" onClick={this.viewLogin}>Login to SaniFly</button>
                    <p>Having problems with identifying the right time to clean? Not any more with us!</p>
                    <a href="tel:+94112545684">
                        <p style={{color:"white",fontSize:"20px"}}><i className="fa fa-phone" style={{fontSize:"22px",color:"white"}}></i> Call Us +94 567 3249</p>
                    </a>
                </div>

            </div>
        )
    }
}
export default LandingPage;