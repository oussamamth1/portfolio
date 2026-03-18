import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, User, Award, Briefcase, Users, GraduationCap, ArrowUpNarrowWideIcon, Heart, Dumbbell } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: User, label: "About", href: "#about" },
     { icon: Briefcase, label: "Projects", href: "#projects" },
    { icon: Briefcase, label: "Experience", href: "#internships" },
    { icon: GraduationCap, label: "Education", href: "#education" },
    { icon: ArrowUpNarrowWideIcon, label: "Toolkit", href: "#languages" },
    { icon: Dumbbell, label: "Motivation", href: "#motivation" },
    { icon: Users, label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#about");
              }}
              className="font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
            >
              Oussama Methnani
            </a>
             
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary hover:bg-secondary transition-colors"
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className="w-full justify-start text-foreground hover:text-primary hover:bg-secondary"
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;