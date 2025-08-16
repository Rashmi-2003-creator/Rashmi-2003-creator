import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Gavel, Users, Tag } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const programmingSkills = [
    { name: "Python", level: 95 },
    { name: "Java", level: 80 },
    { name: "SQL", level: 85 },
    { name: "C", level: 75 }
  ];

  const frameworks = [
    { name: "TensorFlow", icon: "🐍" },
    { name: "Scikit-learn", icon: "📊" },
    { name: "OpenCV", icon: "👁️" },
    { name: "Deep Learning", icon: "🧠" }
  ];

  const tools = [
    "Git", "Streamlit", "OpenCV", "Jupyter", "VS Code"
  ];

  const softSkills = [
    { name: "Problem-Solving", icon: "💡" },
    { name: "Analytical Thinking", icon: "📊" },
    { name: "Team Leadership", icon: "👥" },
    { name: "Communication", icon: "💬" }
  ];

  const certifications = [
    { title: "Harvard CS50: AI with Python", provider: "edX" },
    { title: "Strategy & Game Theory", provider: "IIM Ahmedabad, Coursera" },
    { title: "J.P. Morgan Virtual Internship", provider: "Forage" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay to ensure smooth animation trigger
          setTimeout(() => {
            setIsVisible(true);
          }, 100);
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-32 bg-gradient-to-br from-slate-50/30 via-white to-slate-100/20 dark:from-slate-950/60 dark:via-slate-900 dark:to-slate-950/40" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold gradient-text mb-8 leading-tight text-balance">Technical Skills</h2>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Comprehensive technical expertise spanning multiple domains of computer science and engineering.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Programming Skills */}
          <Card className="elegant-surface-elevated dark:bg-gray-700/90 dark:border-gray-600/50 rounded-2xl glass-effect hover:elegant-shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-8 text-gray-900 dark:text-white flex items-center">
                <Code className="text-primary mr-3" />
                Programming Languages
              </h3>
              <div className="space-y-4">
                {programmingSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-4 rounded-full transition-all duration-1000 ease-out shadow-sm"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                        data-testid={`skill-bar-${skill.name.toLowerCase()}`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI/ML Skills */}
          <Card className="elegant-surface-elevated dark:bg-gray-700/90 dark:border-gray-600/50 rounded-2xl glass-effect hover:elegant-shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-8 text-gray-900 dark:text-white flex items-center">
                <Brain className="text-accent mr-3" />
                AI/ML & Frameworks
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {frameworks.map((framework, index) => (
                  <div 
                    key={index} 
                    className={`p-5 rounded-xl text-center hover:scale-105 transition-all duration-300 cursor-default macos-button ${
                      index === 0 ? 'bg-primary/5 hover:bg-primary/10 dark:bg-primary/10 dark:hover:bg-primary/20' :
                      index === 1 ? 'bg-accent/5 hover:bg-accent/10 dark:bg-accent/10 dark:hover:bg-accent/20' :
                      index === 2 ? 'bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/30' :
                      'bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/20 dark:hover:bg-purple-900/30'
                    }`}
                    data-testid={`framework-${framework.name.toLowerCase().replace(' ', '-')}`}
                  >
                    <div className="text-3xl mb-3">{framework.icon}</div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">{framework.name}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools & Technologies */}
          <Card className="elegant-surface-elevated dark:bg-gray-700/90 dark:border-gray-600/50 rounded-2xl">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
                <Gavel className="text-indigo-600 mr-3" />
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors dark:bg-gray-600 dark:text-gray-200"
                    data-testid={`tool-${tool.toLowerCase()}`}
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="elegant-surface-elevated dark:bg-gray-700/90 dark:border-gray-600/50 rounded-2xl">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
                <Users className="text-pink-600 mr-3" />
                Leadership & Soft Skills
              </h3>
              <div className="space-y-3">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-gray-700 dark:text-gray-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <Card className="mt-12 elegant-surface-elevated dark:bg-gray-700/90 dark:border-gray-600/50 rounded-2xl">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
              <Tag className="text-accent mr-3" />
              Certifications & Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 dark:border-gray-600 p-4 rounded-lg hover:border-primary/30 dark:hover:border-primary/50 transition-colors hover:shadow-md dark:bg-gray-800"
                  data-testid={`certification-${index}`}
                >
                  <div className="font-medium text-gray-900 dark:text-white mb-1">{cert.title}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{cert.provider}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
