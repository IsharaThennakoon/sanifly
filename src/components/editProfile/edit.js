import React, { Component } from 'react';
import './edit.css';
import User from "./user.png";

class Edit extends Component {
  
  render() {

    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-3"></div>
          
          <div class="col-lg-6  mx-auto">
            <div class="card card-signin flex-row my-5 card-edit">
              <div class=" d-none d-md-flex">

              </div>
              <div class="card-body" >
                <h5 class="card-title text-center">Edit Profile</h5>
                <form class="form-signin">

                  <div class="image-upload" style={{textAlign:"center"}}>
                    <label for="file-input">
                      <img src={User} alt="image" style={{ borderRadius: "50%", width: '100px' }} />
                    </label>

                    <input id="file-input" type="file" />
                  </div>


                  <div class="form-label-group pt-2">
                    <label for="inputFirstName">First Name</label>
                    <input type="text" id="inputFirstName" class="form-control" required autofocus />

                  </div>

                  <div class="form-label-group pt-2 pb-4">
                    <label for="inputLastName">Last Name</label>
                    <input type="text" id="inputLastName" class="form-control" required />

                  </div>

                  <div class="form-label-group pt-2 pb-6">
                    <label for="inputEmail">Email Address</label>
                    <input type="text" id="inputEmail" class="form-control" required />

                  </div>

                  <div class="form-label-group pt-2 pb-8">
                    <label for="inputPhone">Phone Number</label>
                    <input type="text" id="inputPhone" class="form-control" required />

                  </div>
                  <br></br>
                  <button class="btn btn-lg btn-primary btn-block  " type="submit"> Save Changes</button>

                  <br></br>



                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-3"></div>

        </div>
      </div>
    )
  }
}
export default Edit;