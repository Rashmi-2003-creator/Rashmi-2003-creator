import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Lightbulb } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { value: "99.4%", label: "Model Accuracy" },
    { value: "200+", label: "Conference Attendees" },
  ];

  const motivations = [
    {
      icon: Brain,
      title: "AI/ML Innovation",
      description: "Developing cutting-edge machine learning solutions for real-world healthcare challenges.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Leading teams and managing communities to foster collaborative learning environments.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analytical thinking and innovative approaches to complex technical challenges.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A passionate Computer Science student with a strong foundation in AI/ML and a proven track record of research excellence.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Education & Background</h3>
            <Card className="mb-6 border-l-4 border-l-primary dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-lg dark:text-white">B.Tech Computer Science & Engineering</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2022 - Present</span>
                </div>
                <p className="text-primary font-medium">KIIT University, Bhubaneswar</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Specializing in Artificial Intelligence and Machine Learning with focus on Deep Learning algorithms and Computer Vision applications.
                </p>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className={`text-center ${index === 0 ? 'bg-primary/5 dark:bg-primary/10' : 'bg-accent/5 dark:bg-accent/10'} dark:border-gray-700`}>
                  <CardContent className="p-4">
                    <div className={`text-2xl font-bold ${index === 0 ? 'text-primary' : 'text-accent'}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">What Drives Me</h3>
            <div className="space-y-4">
              {motivations.map((motivation, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`${motivation.bgColor} dark:opacity-80 p-3 rounded-lg`}>
                    <motivation.icon className={`h-5 w-5 ${motivation.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{motivation.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{motivation.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
