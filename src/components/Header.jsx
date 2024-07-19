const Header = () => {
  return (
    <header className="bg-white py-6 px-12 w-screen fixed z-10 border-b">
      <div className="flex justify-between items-center container mx-auto">
        <div className="text-xl font-semibold tracking-wider">
          Property <span className="text-[#58A9E4]">Guru</span>
        </div>
        <nav>
          <ul className="flex gap-12">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Location</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="underline capitalize">Book a free visit</button>
      </div>
    </header>
  );
};

export default Header;
