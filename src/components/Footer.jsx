const Footer = () => {
  return (
    <footer className="text-white bg-[#034B80] p-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2">
          <div className="max-w-sm">
            <h2 className="text-2xl mb-4 font-light">Property Guru</h2>
            <p className="text-[#CCCCCC] leading-7">
              Explore a world of premium properties and experience a seamless
              home-buying journey with us. From expert guidance to personalized
              property matches and secure transactions, we&apos;ve got you
              covered every step of the way. Thank you for choosing us for your
              property needs.
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <h2 className="text-2xl mb-4 font-light">Company</h2>
              <ul className="text-[#CCCCCC] flex flex-col gap-2">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">More Properties</a>
                </li>
                <li>
                  <a href="#">Reviews</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl mb-4 font-light">Resources</h2>
              <ul className="text-[#CCCCCC] flex flex-col gap-2">
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Property Videos</a>
                </li>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Our Certification</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl mb-4 font-light">Help</h2>
              <ul className="text-[#CCCCCC] flex flex-col gap-2">
                <li>
                  <a href="#">Customer Support</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <hr />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
