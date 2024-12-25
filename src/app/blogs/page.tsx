
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Blog {
  image: string,
  authorimage: string,
  authorname: string,
  _createdAt: string,
  title: string,
  heading: string,
  content: string,
  slug: {
    current: string
  }
}

async function page() {
  const fetchBlogs = `*[_type == "Blog"]{
    image,
    authorimage,
    authorname,
    _createdAt,
    title,
    heading,
    content,
    slug
  }`

  const blogs = await client.fetch(fetchBlogs)
  console.log(blogs)
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl md:text-6xl text-blue-500 text-center font-semibold mb-4 merriweather">
          BlogQuest
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 text-center mb-12 opensans">
          A place for all your Blogs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:px-20">
          {blogs.map((blog: Blog, index: number) => (
            <Link 
              key={index} 
              href={`blog/${blog.slug.current}`} 
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image 
                  src={urlFor(blog.image).url()} 
                  width={400} 
                  height={400} 
                  alt={blog.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="md:p-6 p-2">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <Image 
                      src={urlFor(blog.authorimage).url()} 
                      width={40} 
                      height={40} 
                      alt={blog.authorname}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{blog.authorname}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(blog._createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>

                <h2 className="md:text-2xl text-lg font-bold text-gray-800 mb-2 merriweather group-hover:text-blue-600 transition-colors duration-300">
                  {blog.title}
                </h2>
                <h3 className="text-lg md:flex hidden font-semibold text-gray-700 mb-3 opensans">
                  {blog.heading}
                </h3>
                <p className="text-gray-600 text-[16px] md:text-[20px] leading-relaxed opensans line-clamp-3">
                  {blog.content}
                </p>
                
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium group-hover:bg-blue-100 transition-colors duration-300">
                    Read More
                  </span>
                  <div className="h-1 w-12 bg-blue-500 rounded group-hover:w-16 transition-all duration-300"/>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
