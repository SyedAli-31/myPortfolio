const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] bg-no-repeat bg-left lg:bg-[15%] bg-cover relative rounded-full"
      style={{
        
        backgroundSize: "cover", // Ensure the background image covers the area without distortion
        borderRadius: "50%",
      }}
    >
      <section className="text-white font-medium body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-auto object-cover object-center rounded mb-6 lg:mb-0">
              <img
                src="/profile.png"
                alt="Profile Image"
                className="w-full h-full object-cover rounded-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"
              />
            </div>

            {/* Text Section */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-center lg:text-left">
              <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl title-font mb-1">
                <p data-aos="zoom-in-up">
                  I&apos;m Syed Ali, a Passionate Full Stack Web Developer.
                </p>
              </h1>
              <p className="leading-relaxed text-lg sm:text-xl md:text-2xl lg:text-3xl" data-aos="zoom-in-up">
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
