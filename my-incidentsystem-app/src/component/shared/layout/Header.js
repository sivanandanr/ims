import React ,{Component}from "react";
import {Link} from 'react-router-dom';
class Header extends Component{
    render(){
        return (
          
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <div class="container">
              <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" aria-current="page"  to="/add">Add Incident </Link>
            </li>
          </ul>
        </div>
      </nav>
     
        )
    }
}

export default Header;