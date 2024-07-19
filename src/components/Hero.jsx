const Hero = () => {
  return (
    <section className="h-[620px] bg-[url('/images/bck.png')] bg-cover bg-no-repeat flex flex-col items-center justify-center gap-10">
      <h1 className="text-white text-6xl capitalize font-serif text-center">
        Discover Luxury and <br />
        Comfort in Every Corner
      </h1>
      <div className="flex gap-5">
        <button className="btn">Learn More</button>
        <button className="btn">Schedule a Viewing</button>
      </div>
    </section>
  );
};

export default Hero;
