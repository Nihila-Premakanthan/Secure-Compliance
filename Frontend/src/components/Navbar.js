import React, { useEffect, useState } from "react";
import "./NavbarStyle.css";
import logo from '../assets/logo.png';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [Name, setName] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const getcurrentUserData = () => {
    try {
      const userDataString = JSON.parse(localStorage.getItem("userData")) || "";
      console.log(userDataString.name, "000000");
      setName(userDataString.name);
    } catch (error) {
      setName("not show");
    }
  };
  
  useEffect(() => {
    getcurrentUserData();
  }, []);

  const logoutfunction = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <header className="w-screen"> {/* Ensure the header takes full width */}
    {/* Top row */}
    <div className="bg-white py-1 flex items-center" style={{height: '80px'}}> {/* Reduced py-2 to py-1 */}
      {/* Left section */}
      <div className="flex items-center justify-start">
        <img src={logo} alt="Logo" className="h-12 w-12 ml-10 mr-20" />
        <h1 className="text-2xl font-bold">SECTOR<br/>GUARD</h1>
      </div>
      
      {/* Right section */}
      <div className="flex items-center justify-end flex-grow mr-50"> {/* flex-grow ensures that the right section expands to fill the remaining space */}
         {/* Logout button and user profile link */}
            <button onClick={logoutfunction}>Logout</button>
        <Link to={'/profile'}>{Name}</Link>
      </div>
    </div>
    
    {/* Bottom row */}
    <div className="bg-[#009ebc] py-4">
      <nav className="flex justify-center">
        <ul className="flex space-x-4">
        <li className={`list-none bg-white px-4 py-2 ${location.pathname === '/' || location.pathname === '/home' ? 'text-black' : 'text-gray-600'}`}>
            <Link to="/" className="text-black uppercase font-bold no-underline hover:text-gray-600">HOME</Link>
          </li>
          <li className="list-none bg-white px-4 py-2">
            <a href="aboutus" className="text-black hover:text-gray-600 uppercase font-bold no-underline">ABOUT US</a>
          </li>
          <li className="list-none bg-white px-4 py-2">
            <a href="/resources" className="text-black hover:text-gray-600 uppercase font-bold no-underline">RESOURCES</a>
          </li>
          <li className="list-none bg-white px-4 py-2">
            <a href="/pricing" className="text-black hover:text-gray-600 uppercase font-bold no-underline">PRICING</a>
          </li>
          <li className="list-none bg-white px-4 py-2">
            <a href="contactUS" className="text-black hover:text-gray-600 uppercase font-bold no-underline">CONTACT US</a>
          </li>
          <li className="list-none bg-white px-4 py-2">
            <a href="#" className="text-black hover:text-gray-600 uppercase font-bold no-underline">SUGGESTIONS</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
    // <nav className="NavbarItems">
    //   {/* Menu icon */}
    //   <div className="menu-icons" onClick={handleClick}>
    //     <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
    //   </div>
      
    //   {/* Menu items */}
    //   <ul className={clicked ? "nav-menu active" : "nav-menu"}>
      
        
    //     {/* Other menu items */}
    //     <ul className="flex space-x-4">
    //       <li className={`list-none bg-white px-4 py-2 ${location.pathname === '/' || location.pathname === '/home' ? 'text-black' : 'text-gray-600'}`}>
    //         <Link to="/" className="text-black uppercase font-bold no-underline hover:text-gray-600">HOME</Link>
    //       </li>
    //       <li className="list-none bg-white px-4 py-2">
    //         <a href="#" className="text-black hover:text-gray-600 uppercase font-bold no-underline">ABOUT US</a>
    //       </li>
    //       <li className="list-none bg-white px-4 py-2">
    //         <a href="#" className="text-black hover:text-gray-600 uppercase font-bold no-underline">RESOURCES</a>
    //       </li>
    //       <li className="list-none bg-white px-4 py-2">
    //         <a href="/pricing" className="text-black hover:text-gray-600 uppercase font-bold no-underline">PRICING</a>
    //       </li>
    //       <li className="list-none bg-white px-4 py-2">
    //         <a href="#" className="text-black hover:text-gray-600 uppercase font-bold no-underline">CONTACT US</a>
    //       </li>
    //       <li className="list-none bg-white px-4 py-2">
    //         <a href="#" className="text-black hover:text-gray-600 uppercase font-bold no-underline">SUGGESTIONS</a>
    //       </li>
         
    //     </ul>
    //        {/* Logout button and user profile link */}
    //        <button onClick={logoutfunction}>Logout</button>
    //     <Link to={'/profile'}>{Name}</Link>
    //   </ul>
    // </nav>
  );
};

export default Navbar;
