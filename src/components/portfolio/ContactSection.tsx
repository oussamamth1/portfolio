import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-4">
            <Mail className="h-6 w-6 text-primary" />
            <a href="mailto:oussamamethnani321@gmail.com" className="text-lg">oussamamethnani321@gmail.com</a>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="h-6 w-6 text-primary" />
            <a href="tel:+21620640783" className="text-lg">+216 20 640 783</a>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="text-lg">Akouda, Sousse, Tunisia</span>
          </div>
          <div className="flex items-center gap-4">
            <Linkedin className="h-6 w-6 text-primary" />
            <a
              href="https://www.linkedin.com/in/oussama-methnani-bb4145206"
              className="text-lg"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Github className="h-6 w-6 text-primary" />
            <a
              href="https://github.com/oussamamth1"
              className="text-lg"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
