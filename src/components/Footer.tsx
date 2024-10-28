import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 text-center text-secondary relative">
      <p>&copy; {new Date().getFullYear()} პულინარია. ყველა უფლება დაცულია.</p>
      <a
        href="https://portfolio-arbi.vercel.app"
        target="_blank"
        className="absolute bottom-3 right-1/2 translate-x-1/2 md:translate-x-0 md:right-3 text-xs text-[#444]"
      >
        Made By <span className="hover:text-[#777]">Giga Megrelishvili</span>
      </a>
    </footer>
  );
};

export default Footer;
