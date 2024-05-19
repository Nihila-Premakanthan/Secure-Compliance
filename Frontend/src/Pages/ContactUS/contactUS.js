import React, { useState } from 'react';
import Header from '../auth/Header';
import Footer from '../auth/Footer';

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    
    // For demonstration purpose, set isSubmitted to true after form submission
    setIsSubmitted(true);
  };

  return (
    <>
    <Header/>
    <div className="container mx-auto px-2 py-8 md:w-3/4 lg:w-1/2"> {/* Center content and limit width */}
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1> {/* Center the heading */}
      {!isSubmitted ? (
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Your message" className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Send Message</button>
            </form>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-100 p-6 rounded-md">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <p className="mb-2"><strong>Email:</strong> contact@example.com</p>
              <p className="mb-2"><strong>Phone:</strong> +1234567890</p>
              <p className="mb-2"><strong>Address:</strong> 123 Street, City, Country</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-green-600">Message successfully submitted!</div>
      )}
    </div>
    <Footer/>
    </>
  );
}

export default ContactUs;
