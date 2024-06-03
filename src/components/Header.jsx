import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const links = [
{
  name:"Home",
  path:"/"
},

{
  name:"Animation",
  path:"/products",
},
{
  name:"YouTube",
  path:"/hero",
}



  ]




  return (
    <>
      <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img width={'80px'}  src="https://svgx.ru/svg/2450097.svg" alt="" />
            <span className="ml-3 text-xl">Anitwomation</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-5">
            {
              links.map(c => (
                <Link to={c.path} key={c}>{c.name}</Link>
              ))
             }
          </nav>
         
        </div>
      </header>




    </>
  )
}

export default Header
