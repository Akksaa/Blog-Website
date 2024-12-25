import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='h-full'>
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 merriweather">BlogQuest</h3>
              <p className="text-gray-400 poppins">
                Exploring ideas, sharing stories, and connecting minds.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 merriweather">Quick Links</h4>
              <ul className="space-y-2 poppins">
                <li><Link href="/blogs" className="hover:text-white transition-colors">All Posts</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 merriweather">Connect</h4>
              <ul className="space-y-2 poppins">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t poppins border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} BlogQuest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
