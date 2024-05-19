import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../assets/logo.png';

// Footer component
function Footer() {
  return (
    <footer className="fixed bottom-0 w-full">
      {/* Top row */}
      <div className="bg-[#f16821] py-1" style={{height: '90px'}}> {/* Reduced py-4 from py-6 */}
        <div className="container mx-auto px-4 flex items-center justify-start"> {/* Adjusted flex alignment */}
          <img src={logo} alt="Logo" className="h-10 w-10 ml-10 mr-4" /> {/* Adjusted margin */}
          <h1 className="text-2xl font-bold text-black">SECTOR<br/>GUARD</h1>
        </div>
      </div>

      {/* Bottom row */}
      <div className="bg-[#009ebc] py-4">
        <div className="container mx-auto px-4 flex justify-between">
          <ul className="flex space-x-4 list-none"> {/* Added list-none to remove bullet points */}
            <li><a href="termsofsue" className="text-black hover:text-gray-400 no-underline">Terms Of Use</a></li>
            <li><a href="privacypolicy" className="text-black hover:text-gray-400 no-underline">Privacy Policy</a></li>
          </ul>
          <ul className="flex space-x-4 list-none flex-shrink-0 mr-20"> {/* Added flex-shrink-0 to prevent icon container from expanding */}
            <li><a href="#" className="text-black hover:text-gray-400"><FaFacebookF /></a></li>
            <li><a href="#" className="text-black hover:text-gray-400"><FaTwitter /></a></li>
            <li><a href="#" className="text-black hover:text-gray-400"><FaInstagram /></a></li>
            <li><a href="#" className="text-black hover:text-gray-400"><FaLinkedinIn /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
