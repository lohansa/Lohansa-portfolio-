import { Code } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/40 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-300/40 rounded-full filter blur-3xl opacity-40"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-3xl slide-up animate-slide-up">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Code size={14} />
              <span>Computer Science Undergraduate</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Lohansa Munasinghe</span>
            </h1>
            <div className="typing-container animate-typing mb-6">
              <p className="text-xl md:text-2xl text-muted-foreground">Crafting digital experiences with code</p>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              I'm a passionate computer science student exploring the intersection of technology and creativity. 
              Currently focusing on UI/UX Design and Frontend Development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="btn-primary text-center rounded-full px-8 py-3">
                View My Work
              </a>
              <a href="#contact" className="btn-subtle text-center rounded-full px-8 py-3">
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="relative slide-up animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-70"></div>
            <Avatar className="h-64 w-64 md:h-80 md:w-80 relative border-4 border-white shadow-xl">
              <AvatarImage src="/lovable-uploads/cc73a0b1-343e-4eb0-9a40-1ca6aff93829.png" alt="Lohansa Munasinghe" className="object-cover" />
              <AvatarFallback className="text-6xl font-bold">LM</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
