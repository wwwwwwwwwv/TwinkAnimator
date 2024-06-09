import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Products = () => {


  const [products, setProducts] = useState([]);

  useEffect(() =>{
    const request = async () => {
      const res = await axios.get('https://fakestoreapi.com/products');
      const data = res.data;

      setProducts(data);
    };

    request();
  },[]);
  return (
    <>
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <a class="block relative h-48 rounded overflow-hidden">
        <iframe class="object-cover object-center w-full h-full block" width="611" height="343" src="https://www.youtube.com/embed/adbpm2I1yPY" title="Slipmation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">YouTube</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Slipmation</h2>
         
        </div>
        
      </div>

      
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <iframe class="object-cover object-center w-full h-full block" width="611" height="343" src="https://www.youtube.com/embed/sPwCIugdI2M" title="Electrozart" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Shorts</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Animator</h2>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <iframe  class="object-cover object-center w-full h-full block" width="605" height="336" src="https://www.youtube.com/embed/xYZ3UxY7VPs" title="sergobum" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">YouTube</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Animator</h2>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <iframe  class="object-cover object-center w-full h-full block"  width="605" height="336" src="https://www.youtube.com/embed/RRrS0E1n880" title="marvel Dc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">YouTube</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Animator</h2>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <iframe   class="object-cover object-center w-full h-full block" width="640" height="360" src="https://www.youtube.com/embed/-zHWFYAhJUg" title="Как сделать свой мультфильм? | Pivot Animator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">YouTube </h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Как сделать свой мультфильм? | Pivot Animator</h2>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        
        <a class="block relative h-48 rounded overflow-hidden">
        <iframe class="object-cover object-center w-full h-full block" width="390" height="360" src="https://www.youtube.com/embed/ofoGxcp7PDs" title="Hero Animator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">YouTube</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Animator
</h2>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <iframe class="object-cover object-center w-full h-full block"  width="315" height="560" src="https://www.youtube.com/embed/3swsPFlJDwI" title="Black mafia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">YouTube</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Animator</h2>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <iframe class="object-cover object-center w-full h-full block" width="480" height="360" src="https://www.youtube.com/embed/UIFF1MUJPlE?list=PLCeVfp2xB-CM1uhaZwlfIL_WRpkvYBbPc" title="Jack vs Door" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">YouTube</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Jack vs Door</h2>
        </div>
      </div>
    </div>
  </div>
</section>





    </>
  )
}

export default Products
