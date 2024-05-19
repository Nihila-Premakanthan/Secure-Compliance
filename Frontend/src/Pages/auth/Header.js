import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FaUserCircle } from 'react-icons/fa'; 
import { useLocation } from 'react-router-dom';

// Header component
function Header() {

  const location = useLocation();

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
        <div className="flex items-center justify-end flex-grow"> {/* flex-grow ensures that the right section expands to fill the remaining space */}
          <Link to="/login" className="bg-[#f16821] hover:bg-blue-700 text-black font-bold py-1 px-2 ml-4 mr-2 rounded no-underline">LOGIN</Link>
          <FaUserCircle className="text-5xl text-gray-600 hover:text-gray-800 mr-10" /> {/* Increased the size to text-5xl */}
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
              <a href="#" className="text-black hover:text-gray-600 uppercase font-bold no-underline">RESOURCES</a>
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
  );
}

export default Header;
