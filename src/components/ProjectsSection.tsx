
import { useState, useEffect } from 'react';
import { Briefcase, ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: "Smart Sprout Mobile Application ",
    description: "An IoT based solution for Agricultural Queries and Smart crop management using node.js and flutter",
    tags: ["Flutter", "Node.js", "MongoDB", "Express"],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    demoUrl: "#",
    githubUrl: "https://github.com/SurathW1/Smart-Sprout-1.0",
    category: "Full Stack"
  },
  {
    title: "Ticket Booking System",
    description: "Developed a multithreaded Event Ticketing System featuring real-time ticket allocation and retrieva using Springboot and React",
    tags: ["React", "Springboot", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    demoUrl: "#",
    githubUrl: "https://github.com/lohansa/TicketManagementSystemFrontend",
    category: "Full Stack"
  },
  {
    title: "Smart Sprout Webiste",
    description: "Marketing website for the application using next.js",
    tags: ["next.js", "React"],
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    demoUrl: "#",
    githubUrl: "https://github.com/SurathW1/Smart-Sprout-1.0",
    category: "Frontend"
  },
  {
    title: "Health Assist Website",
    description: "Developed a website for health products selling and health assisting according to SDG using HTML and CSS",
    tags: ["HTML", "CSS"],
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    demoUrl: "#",
    githubUrl: "https://github.com/lohansa/Health-Assist-Website-",
    category: "Frontend"
  },
  {
    title: "Plane Management System",
    description: "A program that can be used to reserve a seat on a plane using Java",
    tags: ["Java"],
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    demoUrl: "#",
    githubUrl: "https://github.com/lohansa/Plane-Management-System",
    category: "Backend"
  }
];

const categories = ["All", "Frontend", "Backend", "Full Stack"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    setAnimateCards(false);
    
    const timer = setTimeout(() => {
      if (activeCategory === "All") {
        setVisibleProjects(projects);
      } else {
        setVisibleProjects(projects.filter(project => project.category === activeCategory));
      }
      setAnimateCards(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-heading sliding-animation" style={{ '--animation-delay': '1' } as React.CSSProperties}>
            <Briefcase size={14} />
            <span>My Projects</span>
          </div>
          <h2 className="section-title sliding-animation" style={{ '--animation-delay': '2' } as React.CSSProperties}>
            Recent Work & Creations
          </h2>

          <div className="sliding-animation" style={{ '--animation-delay': '3' } as React.CSSProperties}>
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-white text-muted-foreground hover:bg-primary/10"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visibleProjects.map((project, index) => (
                <div 
                  key={project.title}
                  className={cn(
                    "project-card overflow-hidden transition-all duration-500",
                    animateCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-lg">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-secondary rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 pt-2">
                      <a 
                        href={project.demoUrl} 
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                      <a 
                        href={project.githubUrl} 
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        <Github size={16} />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
