
import { useState } from 'react';
import { Code } from 'lucide-react';
import { cn } from '@/lib/utils';

const skills = {
  "Languages": [
    { name: "JavaScript", proficiency: 90 },
    { name: "Python", proficiency: 85 },
    { name: "Java", proficiency: 80 },
    { name: "C++", proficiency: 75 },
    { name: "TypeScript", proficiency: 85 }
  ],
  "Frontend": [
    { name: "React", proficiency: 90 },
    { name: "HTML/CSS", proficiency: 95 },
    { name: "Tailwind CSS", proficiency: 85 },
    { name: "Angular", proficiency: 70 },
    { name: "Next.js", proficiency: 80 }
  ],
  "Backend": [
    { name: "Node.js", proficiency: 85 },
    { name: "Express", proficiency: 80 },
    { name: "MongoDB", proficiency: 75 },
    { name: "SQL", proficiency: 80 },
    { name: "Firebase", proficiency: 85 }
  ],
  "Tools": [
    { name: "Git", proficiency: 90 },
    { name: "Docker", proficiency: 75 },
    { name: "AWS", proficiency: 70 },
    { name: "VS Code", proficiency: 95 },
    { name: "Figma", proficiency: 80 }
  ]
};

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("Languages");

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-heading sliding-animation" style={{ '--animation-delay': '1' } as React.CSSProperties}>
            <Code size={14} />
            <span>My Skills</span>
          </div>
          <h2 className="section-title sliding-animation" style={{ '--animation-delay': '2' } as React.CSSProperties}>
            Technologies & Capabilities
          </h2>

          <div className="sliding-animation" style={{ '--animation-delay': '3' } as React.CSSProperties}>
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.keys(skills).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    activeTab === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-white text-muted-foreground hover:bg-primary/10"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="glass-card rounded-lg p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills[activeTab as keyof typeof skills].map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{skill.name}</h3>
                      <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${skill.proficiency}%`, animationDelay: `${index * 100}ms` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
