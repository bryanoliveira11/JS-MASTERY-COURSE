import { brainwave } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setopenNavigation] = useState(true);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-[var(--n-8)]/90
    backdrop-blur-sm border-b border-[var(--n-6)] 
    lg:bg-[var(--n-8)]/90 lg:backdrop-blur-sm
     ${
       openNavigation
         ? "bg-[var(--n-8)]"
         : "bg-[var(--n-8)]/90 backdrop-blur-sm"
     }`}
    >
      <div
        className="flex items-center px-5 lg:px-7.5
      xl:px-10 max-lg:py-4"
      >
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} alt="Brainwave" width={190} height={40} />
        </a>

        <nav
          className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] 
        left-0 right-0 bg-[var(--n-8)] lg:static
         lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div
            className="relative z-2 flex flex-col 
          items-center justify-center m-auto lg:flex-row"
          >
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative font-code text-2xl
                uppercase text-[var(--n-1)] transition-colors
                hover:text-[var(--color-1)]
                ${item.onlyMobile ? "lg:hidden" : ""}
                px-6 py-6 md:py-8 lg:-mr-0.5 lg:text-xs
                lg:font-semibold
                ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-[var(--n-1)]"
                    : "lg:text-[var(--n-1)]/50"
                } lg:leading-5 lg:hover:text-[var(--n-1)]
                xl:px-12`}
              >
                {item.title}
              </a>
            ))}
            <HamburgerMenu />
          </div>
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="#signup"
            className="button text-[12px] text-[var(--n-1)]/50 
      transition-colors hover:text-[var(--n-1)] uppercase"
          >
            New Account
          </a>
          <Button className="lg:flex" href="#login">
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
