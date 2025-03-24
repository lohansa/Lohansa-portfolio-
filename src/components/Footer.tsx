
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left text-muted-foreground">
              © {currentYear} Lohansa Munasinghe. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-center md:text-right text-muted-foreground flex items-center gap-1">
              Made in Colombo, SriLanka
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
