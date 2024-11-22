

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-[60vh] bg-no-repeat bg-left lg:bg-[15%] bg-cover border-radius  relative rounded-full"
      
      style={{ backgroundImage: 'url(/profile.png)', backgroundSize: '25%' ,borderRadius:"50%"
        
       }}
    >
      
      <section className="text-white font-medium body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <p className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
            </p>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

              <h1 className="text-white  font-bold text-4xl title-font  mb-1">
                I'm Syed Ali Passionate Full Stack Web Developer.
              </h1>

              <p className="leading-relaxed text-2xl">
                Building innovative and scalable web solutions.
              </p>


            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Hero;

