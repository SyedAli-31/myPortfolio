import React from 'react'



const About = () => {
  return (
    <div className='container pt-12'>
      <div className=" items-center justify-center ">
        <div className="flex justify-center mt-8 ">
          <h1 className='text-2xl md:text-3xl lg:text-4xl  font-bold flex items-center box-border bg-sky-950 text-white rounded-full p-3'>About Me</h1>
          
        </div>
        <p className='md:text-1xl lg:text-2xl text-center  text-white font-bold '>Hello! I’m Syed Ali, a passionate web developer focused on crafting engaging and user-friendly experiences. With expertise in TypeScript, Next.js, and React, I build web applications that are both visually appealing and highly functional.</p>
      </div>
      <div  >
        <div className="flex justify-center mt-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl  font-bold flex items-center box-border bg-sky-950 text-white rounded-full p-3 ">
            Technical Skills
          </h1>
        </div>


        <p className="mt-4 md:text-1xl lg:text-2xl text-center  text-slate-50">
          With expertise in JavaScript, Next.js, React, and{' '} TypeScript, I build web applications that are both visually appealing and highly functional. </p>
        <br />
        <ul className="flex flex-wrap justify-center gap-6 mb-4">
          <li className=" text-2xl md:text-3xl lg:text-4xl  bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg cursor-pointer   duration-300 hover:shadow-blue-500/60 hover:shadow-lg hover:-translate-y-1">Typescript</li>
          <li className=" text-2xl md:text-3xl lg:text-4xl  bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg cursor-pointer  duration-300 hover:shadow-blue-500/60 hover:shadow-lg hover:-translate-y-1">Javascript</li>
          <li className=" text-2xl md:text-3xl lg:text-4xl  bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg cursor-pointer  duration-300 hover:shadow-blue-500/60 hover:shadow-lg hover:-translate-y-1">NextJs</li>
          <li className=" text-2xl md:text-3xl lg:text-4xl  bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg cursor-pointer  duration-300 hover:shadow-blue-500/60 hover:shadow-lg hover:-translate-y-1">React</li>
          <li className=" text-2xl md:text-3xl lg:text-4xl  bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg cursor-pointer  duration-300 hover:shadow-blue-500/60 hover:shadow-lg hover:-translate-y-1">Html and CSS</li>

        </ul>


      </div>

    </div>
  )
}

export default About