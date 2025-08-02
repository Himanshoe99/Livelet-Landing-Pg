import { Github, Twitter, Linkedin, Heart } from "lucide-react";
import React from "react";
const Footer = () => {
  return (
    <footer className="w-full bg-white py-0">
      <div className="section-container flex items-center justify-center">
        <p className="flex items-center gap-1 text-gray-600 text-sm text-center">
          Made with
          <span className="relative flex items-end" style={{ height: '1em' }}>
            <Heart className="w-4 h-4 text-red-500 inline align-bottom" style={{ verticalAlign: 'bottom' }} />
          </span>
          by developers, for developers.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
