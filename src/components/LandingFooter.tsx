
import React from "react";
import { Instagram, Linkedin, Facebook, Phone } from "lucide-react";

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
    href: "https://www.instagram.com/mystemverse/"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/company/mystemverse/"
  },
  {
    icon: <Facebook className="w-5 h-5" />,
    href: "https://www.facebook.com/people/STEMverse/61558686323430/"
  }
];

const LandingFooter = () => (
  <footer className="w-full flex flex-col items-center gap-6 pt-12 pb-8 bg-gradient-to-br from-card/90 via-space-purple/10 to-space-blue/10 backdrop-blur-md border-t border-primary/20 animate-fade-in relative overflow-hidden">
    {/* Animated background stars */}
    <div className="absolute inset-0">
      <div className="absolute top-8 left-1/4 w-1.5 h-1.5 bg-star-yellow rounded-full animate-star-twinkle opacity-40"></div>
      <div className="absolute top-16 right-1/3 w-1 h-1 bg-nebula-pink rounded-full animate-star-twinkle opacity-60" style={{animationDelay: "1s"}}></div>
      <div className="absolute bottom-12 left-1/3 w-2 h-2 bg-space-glow rounded-full animate-star-twinkle opacity-30" style={{animationDelay: "2s"}}></div>
    </div>

    <div className="relative z-10 max-w-6xl w-full px-4">
      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {links.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="px-4 py-2 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/30 text-foreground font-semibold hover:bg-primary/20 hover:text-accent transition-all duration-300 text-sm hover:scale-105 shadow-lg"
          >
            {link.label}
          </a>
        ))}
      </div>
      
      {/* Contact Information with space theme */}
      <div className="flex flex-col items-center gap-3 mb-6">
        <div className="text-sm text-foreground bg-card/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-primary/20">
          <Phone className="w-4 h-4 text-accent inline mr-2" />
          <span className="font-medium">🌌 WhatsApp:</span>
          <a href="https://wa.me/923020558423" className="text-sm hover:text-accent transition-colors">+92 302-0558423</a>
          <span className="text-sm">|</span>
          <a href="https://wa.me/923339116667" className="text-sm hover:text-accent transition-colors">+92 333-9116667</a>
        </div>
        <div className="text-sm text-foreground bg-card/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-primary/20">
          <span className="font-medium">📧 Email:</span> 
          <a href="mailto:stemsverse@gmail.com" className="ml-1 hover:text-accent transition-colors">stemsverse@gmail.com</a>
        </div>
      </div>

      {/* Social Media with space theme */}
      <div className="flex gap-6 mb-6">
        {socials.map(({ icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gradient-to-br from-primary/80 to-secondary/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:from-accent hover:to-star-yellow hover:scale-110 transition-all duration-300 shadow-lg"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Copyright with space theme */}
      <div className="text-center">
        <span className="text-sm text-muted-foreground bg-card/40 backdrop-blur-sm rounded-xl px-4 py-2 border border-primary/10">
          ⭐ © STEMverse 2025 – Designed to Inspire the Next Generation of Space Explorers 🚀
        </span>
      </div>
    </div>
  </footer>
);

export default LandingFooter;
