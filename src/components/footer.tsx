import React from 'react'

const Footer = () => {
  return (
    <div>
        
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-white hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Terms of Service
          </a>
          
        </div>
      </div>
    </footer>
  




    </div>
  )
}

export default Footer