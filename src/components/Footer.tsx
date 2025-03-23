
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left text-muted-foreground">
              © {currentYear} John Doe. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-center md:text-right text-muted-foreground flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500" /> in San Francisco
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
