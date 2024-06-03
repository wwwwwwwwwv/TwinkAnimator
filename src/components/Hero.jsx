import React from 'react'

const Hero = () => {
  return (
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">YouTube Channel
        <br className="hidden lg:inline-block"/>Subscribe and don't miss new animations
      </h1>
      <p className="mb-8 leading-relaxed">Pivot Animator (formerly Pivot Stickfigure Animator and usually shortened to Pivot) is a freeware application that allows users to create stick-figure and sprite animations, and save them in the animated GIF format for use on web pages and the AVI format (in Pivot Animator 3 and later).</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg"><a href="https://www.youtube.com/channel/UCh0tHZMOQToij-rRncJx1Lg">Subscribe</a></button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="/public/youtube.jpg"/>
    </div>
  </div>
</section>
  )
}

export default Hero
