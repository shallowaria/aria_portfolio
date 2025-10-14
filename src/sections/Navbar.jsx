import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-300/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto sm:px-10 px-5">
          <a
            href="/"
            className="text-zinc-700 font-bold text-xl hover:text-red-500 transition-colors"
          >
            Aria
          </a>

          <button
            onClick={toggleMenu}
            className="text-zinc-700 hover:text-red-500 sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <ul className="flex items-center justify-center gap-4 md:gap-6 relative z-20">
              <li className="text-zinc-700 hover:text-red-500 font-semibold py-2 max-sm:px-5">
                <a
                  href="/about"
                  className="text-lg md:text-base hover:text-red-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li className="text-zinc-700 hover:text-red-500 font-semibold py-2 max-sm:px-5">
                <a
                  href="/work"
                  className="text-lg md:text-base hover:text-red-500 transition-colors"
                >
                  Work
                </a>
              </li>
              <li className="text-zinc-700 hover:text-red-500 font-semibold py-2 max-sm:px-5">
                <a
                  href="/study"
                  className="text-lg md:text-base hover:text-red-500 transition-colors"
                >
                  Study
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div
        className={`absolute left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="p-5">
          <ul className="flex flex-col items-center justify-center gap-4 md:gap-6 relative z-20 text-center">
            <li className="text-zinc-700 hover:text-red-500 font-semibold max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
              <a
                href="/about"
                className="text-lg md:text-base hover:text-red-500 transition-colors"
              >
                About
              </a>
            </li>
            <li className="text-zinc-700 hover:text-red-500 font-semibold max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
              <a
                href="/work"
                className="text-lg md:text-base hover:text-red-500 transition-colors"
              >
                Work
              </a>
            </li>
            <li className="text-zinc-700 hover:text-red-500 font-semibold max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
              <a
                href="/study"
                className="text-lg md:text-base hover:text-red-500 transition-colors"
              >
                Study
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
