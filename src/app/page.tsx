// // import { client } from '@/sanity/lib/client'
// // import { urlFor } from '@/sanity/lib/image'
// // import Image from 'next/image'
// // import Link from 'next/link'
// // import React from 'react'

// // interface Blog {
// //   image: string,
// //   title: string,
// //   heading: string,
// //   content: string,
// //   slug: {
// //     current: string
// //   }
// // }

// // async function page() {
// //   const fetchBlogs = `*[_type == "Blog"]{
// //     image,
// //     authorimage,
// //     authorname,
// //     title,
// //     heading,
// //     content,
// //     slug
// //   }`

// //   const blogs = await client.fetch(fetchBlogs)
  
// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
// //       <div className="container mx-auto px-4 py-12">
// //         <h1 className="text-5xl md:text-6xl text-blue-500 text-center font-semibold mb-4 opensans">
// //           BlogQuest
// //         </h1>
// //         <p className="text-2xl md:text-3xl text-gray-700 text-center mb-12 poppins">
// //           A place for all your Blogs.
// //         </p>
        
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {blogs.map((blog: Blog, index: number) => (
// //             <Link 
// //               key={index} 
// //               href={`blog/${blog.slug.current}`} 
// //               className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
// //             >
// //               <div className="aspect-[4/3] relative overflow-hidden">
// //                 <Image 
// //                   src={urlFor(blog.image).url()} 
// //                   width={400} 
// //                   height={400} 
// //                   alt={blog.title}
// //                   className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
// //                 />
// //               </div>
              
// //               <div className="p-6">
// //                 <h2 className="text-2xl font-bold text-gray-800 mb-2 merriweather group-hover:text-blue-600 transition-colors duration-300">
// //                   {blog.title}
// //                 </h2>
// //                 <h3 className="text-lg font-semibold text-gray-700 mb-3 opensans">
// //                   {blog.heading}
// //                 </h3>
// //                 <p className="text-gray-600 leading-relaxed opensans line-clamp-3">
// //                   {blog.content}
// //                 </p>
                
// //                 <div className="mt-4 flex items-center justify-between">
// //                   <span className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium group-hover:bg-blue-100 transition-colors duration-300">
// //                     Read More
// //                   </span>
// //                   <div className="h-1 w-16 bg-blue-500 rounded group-hover:w-20 transition-all duration-300"/>
// //                 </div>
// //               </div>
// //             </Link>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default page

import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

interface FeaturedPost {
  image: string
  title: string
  content: string
  authorname: string
  authorimage: string
  _createdAt: string
  slug: {
    current: string
  }
}

async function Homepage() {
  const fetchFeaturedPosts = `*[_type == "Blog"][0...3]{
    image,
    title,
    content,
    authorname,
    authorimage,
    _createdAt,
    slug
  }`

  const posts = await client.fetch(fetchFeaturedPosts)

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-indigo-100 to-gray-100  py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-800 mb-6 merriweather">
            Welcome to BlogQuest
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto opensans">
            Discover stories, ideas, and expertise from writers on any topic that matters to you.
          </p>
          <Link 
            href="/blogs" 
            className="bg-blue-600 text-white px-8 py-3 opensans rounded-full text-lg font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Start Reading
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 merriweather">Featured Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: FeaturedPost, index: number) => (
            <Link 
              key={index}
              href={`/blog/${post.slug.current}`}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={urlFor(post.image).url()}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="md:p-6 p-3">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={urlFor(post.authorimage).url()}
                      width={40}
                      height={40}
                      alt={post.authorname}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{post.authorname}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(post._createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
                <h3 className="md:text-xl text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 merriweather">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-[16px] md:text-[20px] line-clamp-3 opensans">
                  {post.content}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 merriweather">Stay in the Loop</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto poppins">
            Subscribe to our newsletter for the latest stories and updates delivered straight to your inbox.
          </p>
          <form className="md:max-w-md w-full mx-auto md:flex gap-4 space-y-2 md:space-y-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 opensans rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 opensans text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 merriweather">About BlogQuest</h2>
          <p className="text-gray-600 mb-8 poppins">
            BlogQuest is a community of readers and writers offering unique perspectives and quality content. 
            Our platform is designed to help you discover stories that matter, connect with passionate writers, 
            and engage with ideas that inspire.
          </p>
          <Link 
            href="/about" 
            className="text-blue-600 font-semibold opensans hover:text-blue-700 transition-colors duration-300"
          >
            Learn More About Us →
          </Link>
        </div>
      </div>      
    </div>
  )
}

export default Homepage