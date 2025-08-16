import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { smoothScrollToSection } from "@/lib/utils";
import { Award, Code } from "lucide-react";
import profileImage from "@assets/profile.png";

export default function HeroSection() {
  const scrollToContact = () => {
    smoothScrollToSection('contact');
  };

  return (
    <section id="home" className="pt-24 min-h-screen flex items-center bg-gradient-to-br from-slate-50/60 via-white to-blue-50/40 dark:from-slate-950/80 dark:via-gray-950 dark:to-blue-950/60 gradient-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 dark:from-blue-950/50 dark:to-purple-950/50 dark:text-blue-300 border-blue-200/50 dark:border-blue-800/50 px-4 py-2 rounded-full font-medium">
              <Award className="h-4 w-4 mr-2" />
              Best Paper Award Winner 2025
            </Badge>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-10 leading-[0.9]">
              <span className="block text-gray-600 dark:text-gray-400 font-light text-2xl md:text-3xl lg:text-4xl mb-2 tracking-wide">Hi, I'm</span>
              <span className="block gradient-text tracking-tight">Rashmi Dutta</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12 leading-relaxed font-normal max-w-2xl">
              Computer Science Engineer specializing in AI/ML with expertise in Deep Learning, 
              Research, and Full-Stack Development. Passionate about creating intelligent solutions 
              that make a real-world impact.
            </p>
            
            <div className="flex justify-center sm:justify-start">
              <Button
                size="lg"
                onClick={() => window.open('https://www.linkedin.com/in/rashmi-dutta-243945201/', '_blank')}
                className="group bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-200 dark:to-slate-100 text-white dark:text-slate-900 hover:from-slate-800 hover:to-slate-700 dark:hover:from-slate-100 dark:hover:to-slate-50 transition-all duration-500 elegant-shadow-xl hover:elegant-shadow-2xl px-10 py-4 text-base font-medium rounded-full border border-slate-200/20 dark:border-slate-800/20"
                data-testid="contact-button"
              >
                <Code className="h-4 w-4 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Let's Connect
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-up lg:justify-self-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-[2rem] overflow-hidden elegant-shadow-xl transform hover:scale-[1.02] hover:rotate-1 transition-all duration-700 ring-1 ring-slate-200/40 dark:ring-slate-700/40 glass-effect">
                <img 
                  src={profileImage} 
                  alt="Rashmi Dutta - Professional Portrait" 
                  className="w-full h-full object-cover"
                  data-testid="profile-image"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 rounded-2xl flex items-center justify-center text-white dark:text-slate-900 elegant-shadow-lg glass-effect animate-float">
                <Code className="h-10 w-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
