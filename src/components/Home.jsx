import React from 'react'


const Home = () => {
  return (
    <>
         <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Pivot Animator</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Several useful new features have been added and some issues fixed. The interface now has a Dark Mode option.A new toolbar makes it easier to position figures in complex ways without needing to use keyboard shortcuts.</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://pivotanimator.net/Images/builder.png "/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://pivotanimator.net/Images/youtube_pivot.png"/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://pivotanimator.net/Images/Effects_CzyngisChrzanIV.gif"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
        <iframe  class="w-full h-full object-cover object-center block" width="350" height="240" src="https://www.youtube.com/embed/KlvLuzpoyDY" title="Introducing Pivot Animator 5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://pivotanimator.net/Images/move_gif.gif"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class=" w-full object-cover h-full object-center block" src="https://pivotanimator.net/Images/resized_piv2cap.jpg"/>
        </div>
      </div>
    </div>
  </div>
</section>




<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Pivot Animator</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Subscribe so you don't miss new videos</p>
    </div>
    <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div class="relative flex-grow w-full">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
        <input type="text" id="full-name" name="full-name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative flex-grow w-full">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button class="text-white bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">Enter</button>
    </div>
  </div>

  <div>

  </div>
</section>
      
    </>
  )
}

export default Home
