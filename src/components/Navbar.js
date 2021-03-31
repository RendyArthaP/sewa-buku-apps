import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-yellow-600 h-12 sticky top-0">
      <div className="px-4 flex flex-row justify-between">
        <h1 className="text-white font-oswald text-2xl my-1">Sewa Buku</h1>
        <div className="flex my-2">
          <Link 
            to="#" 
            className="text-base font-oswald text-white mx-2"
          >
            Profile
          </Link>
          <div>
            <Link 
              to="#" 
              className="text-base font-oswald text-white mx-2"
            >
              Keranjang
            </Link>
            <div className="bg-white w-4 h-4 text-center absolute rounded-full top-1 right-3">
              <span className="text-yellow-600 text-xs flex ml-1">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
