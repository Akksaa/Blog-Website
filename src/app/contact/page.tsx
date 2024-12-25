import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-6 merriweather">
          Contact BlogQuest
        </h1>
        <p className="text-lg text-gray-700 text-center mb-10 opensans">
          Got questions, suggestions, or just want to say hello? We’d love to hear from you! Fill out the form below or reach out to us directly.
        </p>
        
        <div className="bg-white shadow-md rounded-md p-6 max-w-3xl mx-auto opensans">
          <form action="#" method="POST">
            <div className="mb-6">
              <label htmlFor="name" className="block text-md font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md outline-none border-b-2 border-gray-300 shadow-sm"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-md font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md outline-none border-b-2 border-gray-300 shadow-sm"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-1 block w-full rounded-md outline-none border-b-2 border-gray-300 shadow-sm"
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        
        <div className="text-center mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 merriweather">Other Ways to Connect</h2>
          <p className="text-gray-700 poppins">
            Email us at <a href="mailto:contact@BlogQuest.com" className="text-blue-600 hover:underline">contact@yourblog.com</a>
          </p>
          <p className="text-gray-700 mt-2 opensans">
            Follow us on social media:
          </p>
          <div className="flex justify-center space-x-4 mt-4 poppins">
            <a href="#" className="text-blue-600 hover:underline">Facebook</a>
            <a href="#" className="text-blue-600 hover:underline">Twitter</a>
            <a href="#" className="text-blue-600 hover:underline">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

