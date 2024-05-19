import { Component } from "react";
import "./NavbarStyle.css";
import { MenuItems } from "./Menuitems";
import { Link } from "react-router-dom";
import Header from "./Header";

class NavbarLogin extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div>
      <Header/>
      <nav className="NavbarItems">
        
        {/* <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems &&
            MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                </li>
              );
            })}
        </ul> */}
      </nav>
      </div>
    );
  }
}

export default NavbarLogin;
