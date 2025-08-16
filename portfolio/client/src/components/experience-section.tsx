import { Card, CardContent } from "@/components/ui/card";
import { Factory, TrendingUp } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Indian Oil Corporation Limited (IOCL)",
      location: "Guwahati, India",
      period: "May 2025 – Jun 2025",
      icon: Factory,
      iconColor: "text-primary",
      bgColor: "bg-primary",
      achievements: [
        "Built comprehensive attendance management system with full-stack implementation",
        "Automated HR workflows improving efficiency for intern and temporary staff management",
        "Implemented user-friendly frontend interfaces and robust backend architecture"
      ],
      isLeft: true
    },
    {
      title: "ML Research Intern",
      company: "Acmegrade",
      location: "Remote",
      period: "May 2024 – Jun 2024",
      icon: TrendingUp,
      iconColor: "text-accent",
      bgColor: "bg-accent",
      achievements: [
        "Developed advanced ML models for classification and predictive analysis using Python",
        "Applied sophisticated data preprocessing and feature engineering techniques",
        "Implemented model optimization strategies to improve performance and accuracy"
      ],
      isLeft: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Professional Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hands-on experience in both corporate environments and cutting-edge research projects.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-primary/20 dark:bg-primary/30 hidden lg:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className={`lg:grid lg:grid-cols-2 lg:gap-8 items-center ${exp.isLeft ? '' : 'lg:grid-flow-col-dense'}`}>
                  <div className={`${exp.isLeft ? 'lg:text-right lg:pr-8' : 'lg:col-start-2 lg:pl-8'}`}>
                    <Card className="shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-700 dark:border-gray-600">
                      <CardContent className="p-6">
                        <div className={`flex items-center justify-between mb-4 ${exp.isLeft ? 'lg:flex-row-reverse' : ''}`}>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            index === 0 ? 'bg-primary/10 text-primary dark:bg-primary/20' : 'bg-accent/10 text-accent dark:bg-accent/20'
                          }`}>
                            {exp.period}
                          </span>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${exp.bgColor}`}>
                            <exp.icon className="h-4 w-4" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                        <p className={`font-medium mb-3 ${exp.iconColor}`}>{exp.company}</p>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.location}</p>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 bg-gray-400 dark:bg-gray-500 rounded-full flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  {!exp.isLeft && <div className="hidden lg:block"></div>}
                </div>
                
                {/* Timeline dot */}
                <div className={`absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg hidden lg:block ${exp.bgColor}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
