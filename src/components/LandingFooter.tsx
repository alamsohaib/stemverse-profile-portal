
import React from "react";
import { Instagram, Linkedin, Facebook } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Resources", href: "/resources" },
  { label: "Products", href: "/products" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" }
];

const socials = [
  {
    icon: <Instagram className="w-5 h-5" />,
    href: "https://instagram.com/mystemverse"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://linkedin.com/company/mystemverse"
  },
  {
    icon: <Facebook className="w-5 h-5" />,
    href: "https://facebook.com/mystemverse"
  }
];

const LandingFooter = () => (
  <footer className="w-full flex flex-col items-center gap-3 pt-8 pb-6 bg-[#f8f6ed] border-t border-blue-100 animate-fade-in">
    <div className="flex flex-wrap justify-center gap-3 mb-2">
      {links.map(link => (
        <a
          key={link.label}
          href={link.href}
          className="px-3 py-1 rounded-2xl bg-white border border-yellow-100 text-stemblue font-semibold hover:bg-yellow-100 hover:text-[#f7b800] transition-all text-sm"
        >
          {link.label}
        </a>
      ))}
    </div>
    <div className="flex gap-4 mb-1">
      {socials.map(({ icon, href }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-stemblue hover:text-accent hover:scale-125 transition-all"
        >
          {icon}
        </a>
      ))}
    </div>
    <span className="text-xs text-stemblue/60">© STEMverse 2025 – Designed to Inspire</span>
  </footer>
);

export default LandingFooter;
