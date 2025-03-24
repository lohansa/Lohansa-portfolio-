
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-8 py-4",
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-tight text-primary">
          Portfolio
        </a>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="animated-link text-sm font-medium text-foreground">About</a>
          <a href="#skills" className="animated-link text-sm font-medium text-foreground">Skills</a>
          <a href="#projects" className="animated-link text-sm font-medium text-foreground">Projects</a>
          <a href="#contact" className="animated-link text-sm font-medium text-foreground">Contact</a>
        </div>
        <a 
          href="#contact" 
          className="btn-primary text-sm rounded-full px-5"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
