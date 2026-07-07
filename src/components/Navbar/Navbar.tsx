const Navbar = () => {
  return (
    <header className="relative h-[72px] border-b border-cyan-500/20">
      <div className="h-full px-16 flex items-center">
        <h1 className="text-[#16D4F0] text-[20px] font-bold">
          DHEERAN
        </h1>

        <nav className="absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-12 text-[#7E7E7E] text-[14px]">
            <li>
              <a href="#about">ABOUT</a>
            </li>

            <li>
              <a href="#projects">PROJECT</a>
            </li>

            <li>
              <a href="#awards">AWARDS</a>
            </li>

            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

