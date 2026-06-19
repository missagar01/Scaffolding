import React from 'react';

const Footer = () => {
  return (
    <footer className="border-footer w-full py-2 md:py-1 border-t border-red-100 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-[13px] md:text-sm font-bold md:font-medium text-[#8c1d21]">
          Powered By <a
            href="https://www.botivate.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8c1d21] hover:text-red-700 font-black md:font-bold hover:underline transition-all"
          >
           Botivate
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;