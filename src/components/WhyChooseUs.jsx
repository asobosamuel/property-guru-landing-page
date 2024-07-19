const WhyChooseUs = () => {
  return (
    <section className="p-12 pt-0 pb-0 font-sans">
      <div className="container mx-auto grid grid-cols-2">
        <div className="flex items-start justify-center">
          <img src="/images/business-man-holding-little-house.png" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col gap-4">
            <h2 className="uppercase text-[#58A9E4] text-lg">Why Choose Us</h2>
            <h3 className="font-serif font-medium text-6xl">
              Unlock Your Dream Home with Ease
            </h3>
            <p className="text-base font-normal text-[#7F8490]">
              Why Partnering with Us is the Smart Choice for a Seamless Property
              Buying Experience: Unmatched Expertise, Personalized Service, and
              Secure Transactions Guaranteed
            </p>
          </div>
          <div className="flex mt-8 gap-8">
            <img src="/images/horse.png" className="self-start" />
            <div>
              <h4 className="text-lg font-medium">
                Expert Guidance Every Step of the Way
              </h4>
              <p className="text-base text-[#7F8490]">
                Benefit from our team&apos;s deep industry knowledge to navigate
                the complex property market effortlessly.
              </p>
            </div>
          </div>
          <div className="flex mt-8 gap-8">
            <img src="/images/coffee.png" className="self-start" />
            <div>
              <h4 className="text-lg font-medium">
                Interactive Learning Experience
              </h4>
              <p className="text-base text-[#7F8490]">
                Receive personalized property suggestions that align with your
                budget, location preferences, and lifestyle needs.
              </p>
            </div>
          </div>
          <div className="flex mt-8 gap-8">
            <img src="/images/horse.png" className="self-start" />
            <div>
              <h4 className="text-lg font-medium">Exceptional Support</h4>
              <p className="text-base text-[#7F8490]">
                Experience peace of mind with our secure payment options and
                transparent dealings, ensuring a hassle-free purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
