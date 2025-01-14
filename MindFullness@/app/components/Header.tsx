'use client'

import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const { isLoggedIn, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className={`relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-flow shadow-md transition-all duration-300`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-all duration-300">
            SmartPlates
          </Link>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className={`md:flex items-center space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
            {isLoggedIn ? (
              <>
                <Link href="/" className="text-white hover:text-gray-200 transition-all duration-300 block md:inline-block py-2 md:py-0">Home</Link>
                <Link href="/input-preferences" className="text-white hover:text-gray-200 transition-all duration-300 block md:inline-block py-2 md:py-0">Preferences</Link>
                <Link href="/profile" className="text-white hover:text-gray-200 transition-all duration-300 block md:inline-block py-2 md:py-0">Profile</Link>
                <Link href="/about-us" className="text-white hover:text-gray-200 transition-all duration-300 block md:inline-block py-2 md:py-0">About Us</Link>
                <Link href="/contact-us" className="text-white hover:text-gray-200 transition-all duration-300 block md:inline-block py-2 md:py-0">Contact Us</Link>
                <Link href="/food-cart" className="text-white hover:text-gray-200 transition-all duration-300 block md:inline-block py-2 md:py-0">
                  <span className="relative">
                    Food Cart
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                      0
                    </span>
                  </span>
                </Link>
              </>
            ) : (
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <Link href="/login">
                  <Button className="w-full md:w-auto bg-white text-blue-600 hover:bg-blue-700 hover:text-white transition-all duration-300 px-4 py-2">Login</Button>
                </Link>
                <Link href="/signup">
                  <Button className="w-full md:w-auto bg-white text-blue-600 hover:bg-blue-700 hover:text-white transition-all duration-300 px-4 py-2">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <style jsx>{`
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 6s ease infinite;
        }
      `}</style>
    </header>
  )
}

export default Header

