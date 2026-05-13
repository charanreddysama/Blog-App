import React from 'react'

function Home() {
  return (
    <>
      {/* Heading */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">Welcome To Blog App</h1>
      
       {/* Subtitle */}
      <p className="text-gray-500 text-lg max-w-lg mb-8">
        Explore the world of blogging with our intuitive platform. Create, share, and connect with a vibrant community of writers and readers. Whether you're a seasoned blogger or just starting out, our app provides the perfect space to express your thoughts and ideas. Join us today and start your blogging journey!
      </p>
      </div>
    </>
  )
}

export default Home