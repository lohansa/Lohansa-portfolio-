import { User } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-heading sliding-animation" style={{ '--animation-delay': '1' } as React.CSSProperties}>
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title sliding-animation" style={{ '--animation-delay': '2' } as React.CSSProperties}>
            My Background & Journey
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16">
            <div className="md:col-span-3 space-y-6 sliding-animation" style={{ '--animation-delay': '3' } as React.CSSProperties}>
              <p className="text-lg text-muted-foreground">
                I'm a computer science undergraduate with a passion for creating intuitive and elegant digital solutions. 
                My journey in technology began with simple HTML websites, which evolved into a deep fascination with how 
                software can solve complex problems.I love solving problems and making cool things with code. I'm known for 
                being a natural leader, guiding teams to success with my positive attitude and strong communication skills. 
                I'm eager to bring my energy and ideas to your team, where I can learn and grow while making a real difference 
                through technology.
              </p>
              <p className="text-lg text-muted-foreground">
                Currently pursuing my Computer Science degree, I've developed a strong foundation in 
                algorithms, data structures, and software design principles. Beyond my academic pursuits, 
                I'm constantly expanding my skills through personal projects and online courses.
              </p>
              <p className="text-lg text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or engaging with the developer community. I believe in continuous learning and 
                embracing challenges that push me outside my comfort zone.
              </p>
            </div>
            
            <div className="md:col-span-2 sliding-animation" style={{ '--animation-delay': '4' } as React.CSSProperties}>
              <div className="glass-card rounded-lg p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">Education & Experience</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary/30 pl-4">
                    <p className="text-sm text-muted-foreground">2023 - Present</p>
                    <h4 className="font-medium">BSc in Computer Science</h4>
                    <p className="text-sm text-muted-foreground">University of Westminster</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4">
                    <p className="text-sm text-muted-foreground">2022 - 2023</p>
                    <h4 className="font-medium">Foundation Certificate in Higher Education</h4>
                    <p className="text-sm text-muted-foreground">Informatics Institute of Technology</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4">
                    <p className="text-sm text-muted-foreground">2024</p>
                    <h4 className="font-medium">Lead UI/UX Designer</h4>
                    <p className="text-sm text-muted-foreground">Intrisic Startup</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4">
                    <p className="text-sm text-muted-foreground">2008 - 2022</p>
                    <h4 className="font-medium">Advanced Level (Physical Science)</h4>
                    <p className="text-sm text-muted-foreground">Defence Services College</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
