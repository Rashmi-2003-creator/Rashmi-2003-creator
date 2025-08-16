import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { openEmailClient } from "@/lib/queryClient";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";


interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "rashmi.dutta2004@gmail.com",
      link: "mailto:rashmi.dutta2004@gmail.com",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 70028 34676",
      link: "tel:+917002834676",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/rashmi-dutta-243945201/",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Guwahati, India",
      link: null,
      color: "text-gray-600",
      bgColor: "bg-gray-100"
    }
  ];

  const interests = [
    { name: "AI/ML Research", color: "bg-primary/10 text-primary" },
    { name: "Healthcare AI", color: "bg-accent/10 text-accent" },
    { name: "Computer Vision", color: "bg-green-100 text-green-600" },
    { name: "Deep Learning", color: "bg-purple-100 text-purple-600" }
  ];

  const handleFormSubmit = () => {
    const subject = formData.subject || 'Portfolio Contact';
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    // Open email client using utility function
    openEmailClient('rashmi.dutta2004@gmail.com', subject, body);
    
    toast({
      title: "Opening email client...",
      description: "Your default email app should open with the message pre-filled.",
    });
    
    // Clear form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    handleFormSubmit();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-slate-50/30 via-white to-slate-100/20 dark:from-slate-950/60 dark:via-slate-900 dark:to-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold gradient-text mb-8 leading-tight text-balance">Get In Touch</h2>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Let's connect and discuss opportunities in AI/ML, research collaborations, or innovative projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-5 group cursor-pointer">
                  <div className={`${info.bgColor} dark:opacity-80 p-4 rounded-xl group-hover:scale-110 transition-all duration-300 macos-button`}>
                    <info.icon className={`h-5 w-5 ${info.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className={`${info.color} hover:opacity-75 transition-opacity`}
                        data-testid={`contact-${info.title.toLowerCase()}`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className={info.color}>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Professional Interests</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge key={index} className={`${interest.color} hover:opacity-80 dark:opacity-90`}>
                    {interest.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <Card className="elegant-surface-elevated dark:bg-gray-800/90 dark:border-gray-600/50 rounded-2xl glass-effect hover:elegant-shadow-lg transition-all duration-300">
            <CardContent className="p-10">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    data-testid="contact-name-input"
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    data-testid="contact-email-input"
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Message Subject"
                    data-testid="contact-subject-input"
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..."
                    required
                    data-testid="contact-message-input"
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 elegant-shadow-lg hover:elegant-shadow-xl py-6 text-lg font-medium rounded-xl"
                  data-testid="contact-submit-button"
                >
                  <Send className="h-5 w-5 mr-3" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
