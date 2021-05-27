import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card card-signin flex-row my-5">
              <div class="card-img-left d-none d-md-flex">

              </div>
              <div class="card-body">
                <h5 class="card-title text-center">Login</h5>
                <form class="form-signin">
                  
                 

                  <hr />
                  <div class="form-label-group pt-2" >
                     <label for="inputUserame">Username</label> 
                    <input type="text" id="inputUserame" class="form-control"  required autofocus />
                    
                  </div>

                  <div class="form-label-group pt-2 pb-4">
                     <label for="inputPassword">Password</label> 
                    <input type="password" id="inputPassword" class="form-control"  required />
                    
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                  <button class="btn btn-lg btn-primary btn-block  " type="submit">Login</button>
                  
                  <br></br>
                  
                  <a class="d-block text-center mt-2 " style={{color: '#262626', fontSize: '13px'}} href="/login">Forgot Password</a>
                 
                 
                 
                 
                  <hr class="my-4" />

                 
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Login;