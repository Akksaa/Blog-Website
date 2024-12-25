import CommentSection from '@/app/components/CommentSection';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import React from 'react';

async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const singleBlogQuery = `
    *[_type == "Blog" && slug.current == $slug][0]{
      image,
      title,
      heading,
      content,
      authorimage,
      authorname,
      _createdAt
    }
  `;
  
  const blog = await client.fetch(singleBlogQuery, { slug: params.slug });

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl text-gray-600">Blog not found</h1>
      </div>
    );
  }

  const { image, title, heading, content, authorname, authorimage, _createdAt } = blog;

  return (
    <div className="min-h-screen ">
      <div className="max-w-4xl mx-auto md:px-6 px-3 py-8 bg-white rounded-lg shadow-md">
        {image && (
          <div className="relative w-full h-96 mb-6">
            <Image
              src={urlFor(image).url()}
              alt={title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}

        <h1 className="md:text-4xl text-2xl mb-4 merriweather">{title}</h1>
        <p className="md:text-xl text-gray-500 mb-6 opensans">{heading}</p>

        <div className="flex items-center mb-8">
          {authorimage && (
            <Image
              src={urlFor(authorimage).url()}
              alt={authorname}
              width={50}
              height={50}
              className="rounded-full"
            />
          )}
          <div className="ml-4">
            <p className="font-medium poppins md:text-[20px] text-[12px]">{authorname}</p>
            <p className="md:text-sm text-[12px] text-gray-500 poppins">
              {new Date(_createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>

        <div className="prose prose-lg prose-purple md:tracking-wide md:text-[20px] text-[17px] md:leading-7 max-w-none opensans">
          {content}
        </div>
      </div>
      <CommentSection />
    </div>
  );
}

export default BlogDetailPage;

