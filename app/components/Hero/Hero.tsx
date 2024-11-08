import React from 'react';


const Hero = () => {
  return (
    <div id="hero" className="w-full pt-[4vh] md:pt-[12vh] h-screen bg overflow-hidden">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="flex items-center gap-12">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-5xl mb-5 text-white font-semibold">
              I am Tabish Raza
            </h1>
            <h2 className="text-bg text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold md:leading-[3.5rem] xl:leading-[4rem] text-white xl:text-6xl">
              Front End Developer
            </h2>
            <p className="text-white mt-6 lg:text-xl">
              I&rsquo;m Tabish Raza, a passionate front-end developer with a knack for creating engaging, user-friendly interfaces. With a strong eye for design and a love for clean, efficient code, I specialize in turning complex problems into elegant solutions. My goal is to build seamless web experiences that not only look great but also function flawlessly across all devices.
            </p>
            <button className="mt-8">
              <span className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg bg-blue-700 hover:bg-blue-900 flex sm:mb-16">
                <a href="/about">Learn More</a>
              </span>
            </button>
          </div>

         
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
