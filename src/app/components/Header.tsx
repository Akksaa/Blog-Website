'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600 merriweather">BlogQuest</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 opensans">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              About
            </Link>
            <Link 
              href="/blogs" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Blogs
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden opensans">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden opensans">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/blogs" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header