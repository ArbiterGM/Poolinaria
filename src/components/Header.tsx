import { useEffect, useState } from "react";
import logo from "../assets/images/logo.jpg";
import IonIcon from "@reacticons/ionicons";

const Header = () => {
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector(".hero")?.clientHeight || 0;
      const scrollY = window.scrollY;
      const offset = 0;

      setShowStickyNav(scrollY > heroHeight + offset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <header
      className={`bg-[#111] text-white mx-auto w-full px-10 py-4 transition-transform duration-300 ease-in-out ${
        showStickyNav ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-1/2 -translate-x-1/2 z-50`}
    >
      <nav className="flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <img
            className="size-16 rounded-full"
            src={logo}
            alt="poolinaria logo"
          />
          <p className="text-xl uppercase">Poolinaria</p>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-16 text-xl">
          <li>
            <a className="hover:text-primary duration-150" href="#about">
              შესახებ
            </a>
          </li>
          <li>
            <a className="hover:text-primary duration-150" href="#services">
              სერვისები
            </a>
          </li>
          <li>
            <a className="hover:text-primary duration-150" href="#gallery">
              გალერეა
            </a>
          </li>
          <li>
            <a className="hover:text-primary duration-150" href="#contact">
              კონტაქტი
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-4xl focus:outline-none"
          onClick={toggleMobileNav}
        >
          {showMobileNav ? (
            <IonIcon name="close-outline" />
          ) : (
            <IonIcon name="menu-outline" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          showMobileNav ? "block" : "hidden"
        } md:hidden bg-[#111] text-center mt-4`}
      >
        <ul className="flex flex-col gap-4 text-xl">
          <li>
            <a
              className="hover:text-primary duration-150"
              href="#about"
              onClick={toggleMobileNav}
            >
              შესახებ
            </a>
          </li>
          <li>
            <a
              className="hover:text-primary duration-150"
              href="#services"
              onClick={toggleMobileNav}
            >
              სერვისები
            </a>
          </li>
          <li>
            <a
              className="hover:text-primary duration-150"
              href="#gallery"
              onClick={toggleMobileNav}
            >
              გალერეა
            </a>
          </li>
          <li>
            <a
              className="hover:text-primary duration-150"
              href="#contact"
              onClick={toggleMobileNav}
            >
              კონტაქტი
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
