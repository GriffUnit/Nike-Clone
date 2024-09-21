import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../Constants/Index";

const Nav = ({ theme }) => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className=" flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-5">
          <button
            className="px-4 py-2 bg-coral-red rounded-full border-2 border-green-300 dark:text-slate-950 hover:bg-green-400 active:bg-green-600"
            onClick={theme}
          >
            Theme
          </button>
        </div>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
