const AfterHero = () => {
  return (
    <section className="container mx-auto py-[90px] grid grid-cols-3">
      <div className="col-span-1 flex flex-col gap-8 font-serif">
        <h2 className="font-medium text-6xl">
          Modern Spaces And Premium Apartment Complexes
        </h2>
        <h3 className="font-normal text-3xl text-[#717171]">
          MODERN SPACES AND PREMIUM APARTMENT COMPLEXES
        </h3>
        <button className="btn border border-[#58A9E4] self-start">
          Schedule a Viewing
        </button>
      </div>
      <div className="col-span-2 relative flex items-start">
        <img
          src="/images/Rectangle 1.png"
          className="absolute w-[426px] h-[505px] left-[102px]"
        />
        <img
          src="/images/Rectangle 2.png"
          className="relative w-[477px] h-[454px] top-[115px] left-[358px]"
        />
      </div>
    </section>
  );
};

export default AfterHero;
