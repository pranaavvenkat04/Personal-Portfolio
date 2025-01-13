import React, { useState } from "react";

const Footer = ({
  linkToLinkedin,
  linkToGithub,
  linktoResume,
  linkToEmail,
  scrollToTop,
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  return (
    <footer className="relative py-12 overflow-hidden bg-gradient-to-b from-black/70 via-black/85 to-black/100">
      <div className="relative max-w-5xl mx-auto px-4 flex flex-col items-center space-y-6 text-white">
        {/* Hoverable Logo */}
        <div
          className="group cursor-pointer flex flex-col items-center"
          onClick={scrollToTop}
          onMouseEnter={() => setShowBackToTop(true)}
          onMouseLeave={() => setShowBackToTop(false)}
        >
          <img
            src="/icons/w_arrow.png"
            alt="arrow"
            className={`w-12 h-12 mb-1 transition-all duration-300 ${
              showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          />
          <span
            className={`text-sm transition-all duration-300 ${
              showBackToTop ? "opacity-100" : "opacity-0"
            }`}
          >
            Back to top
          </span>
          {/* PD Logo Image */}
          <div className="flex items-center justify-center w-36 h-auto">
            <img
              src="/pd_logo_transparent.png"
              alt="Pranaav.dev Logo"
              className="h-full w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
            />
          </div>
        </div>

        {/* Description */}
        <div className="text-center text-gray-400 text-sm relative mt-4">
          <div className="relative">
            <p>Web page was designed using Figma and developed with React.js & TailwindCSS.</p>
            <p>Thank you for visiting my portfolio!</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex space-x-6 text-sm">
          {[
            { href: linkToLinkedin, text: "LinkedIn" },
            { href: linkToGithub, text: "Github" },
            { href: linkToEmail, text: "Email" },
            { href: linktoResume, text: "Resume" },
          ].map((link) => (
            <a
              key={link.text}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors relative group"
            >
              <span className="relative inline-block">
                {link.text}
                <span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 
                    group-hover:scale-x-100 group-hover:origin-left
                    origin-right group-hover:group-[:not(:hover)]:origin-right"
                />
              </span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm text-center relative">
          <div className="relative">
            Copyright © 2025 Pranaav Venkatasubramanian
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;