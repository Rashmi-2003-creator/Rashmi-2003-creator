import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:rashmi.dutta2004@gmail.com",
      label: "Email"
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "#",
      label: "GitHub"
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text-footer mb-4">
            Rashmi Dutta
          </div>
          <p className="text-gray-400 dark:text-gray-500 mb-6">Computer Science Engineer | AI/ML Researcher | Best Paper Award Winner</p>
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
                aria-label={link.label}
                data-testid={`footer-${link.label.toLowerCase()}`}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © 2025 Rashmi Dutta. All rights reserved. | Designed with passion for innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
