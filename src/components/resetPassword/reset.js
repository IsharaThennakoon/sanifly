import React, { Component } from 'react';
import './reset.css';

class Reset extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card card-signin flex-row my-5">
              <div class="card-img1-left d-none d-md-flex">

              </div>
              <div class="card-body">
                <h5 class="card-title">Reset Password</h5>
                <p> Reset password and stay in toush with SaniFly</p>
                <form class="form-signin">
                  
                 

                  <hr />
                  <div class="form-label-group pt-2" >
                     <label for="inputPassword">Enter New Password</label> 
                    <input type="text" id="inputPassword" class="form-control"  required autofocus />
                    
                  </div>

                  <div class="form-label-group pt-2 pb-4">
                     <label for="inputNewPassword">Retype New Password</label> 
                    <input type="password" id="inputNewPassword" class="form-control"  required />
                    
                  </div>
                  

                  <button class="btn btn-lg btn-primary btn-block  " type="submit">Change Password</button>
                  
                  <br></br>
                  
                  
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
export default Reset;