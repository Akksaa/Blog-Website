export default function About() {
  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto px-3 md:px-8 py-8 bg-white rounded-lg shadow-md ">
        <h1 className="text-4xl font-bold text-blue-600 merriweather text-center mb-6">
          About BlogQuest
        </h1>
        <div className="w-full flex justify-center">
          <p className="text-lg text-center mb-10 opensans text-gray-600 max-w-3xl">
          Welcome to <span className="font-semibold">BlogQuest</span>, a space where curiosity meets creativity, 
          and ideas come to life. Our blog is dedicated to sharing insights, stories, and expertise across diverse 
          topics that spark inspiration and fuel conversations.
          </p>
        </div>
        
        
        <section className="mb-12 opensans">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At <span className="font-semibold">BlogQuest</span>, our mission is to inform, inspire, and empower 
            our readers. We strive to create content that is not only thought-provoking but also actionable, helping 
            you navigate life&apos;s complexities with clarity and confidence.
          </p>
        </section>
        
        <section className="mb-12 opensans">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Cover</h2>
          <p className="text-gray-700">
            From <span className="font-semibold">Science, Technologies and Innovations</span> to <span className="font-semibold">Religion, Cultures and Rights</span>, we aim to 
            provide fresh perspectives and valuable knowledge. Whether you&lsquo;re looking to learn, explore, or connect, 
            there&apos;s something here for everyone.
          </p>
        </section>
        
        <section className="mb-12 opensans">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-700">
            <span className="font-semibold">BlogQuest</span> began as a simple idea: to create a platform where 
            passion meets purpose. Founded in <span className="font-semibold">2020</span>, we’ve grown into a thriving 
            community of readers and contributors who share a love for discovery and dialogue.
          </p>
        </section>
        
        <section className="mb-12 opensans">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet the Team</h2>
          <p className="text-gray-700">
            We’re a diverse group of writers, thinkers, and creators who believe in the power of words to make a 
            difference. Each post is crafted with care, ensuring you get well-researched and engaging content every 
            time you visit.
          </p>
        </section>
        
        <section className="text-center opensans">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join the Conversation</h2>
          <p className="text-gray-700 mb-6">
            Your voice matters! We welcome comments, feedback, and guest contributions to make our community stronger. 
            Follow us on social media and subscribe to our newsletter for the latest updates and exclusive content.
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Subscribe to Our Newsletter
          </button>
        </section>
      </div>
    </div>
  );
}

