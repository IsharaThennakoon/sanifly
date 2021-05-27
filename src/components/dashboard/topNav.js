import React, { Component } from 'react';

class TopNav extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light text-left">

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Washrooms <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Workers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Stocks</a>
                        </li>
                        
                    </ul>
                    <div class="dropdown show text-right">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-user fa-2x"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">Edit Profile</a>
                            <a class="dropdown-item" href="#">Log Out</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
export default TopNav;