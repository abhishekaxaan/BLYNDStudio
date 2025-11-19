import { Mail, Phone, MapPin, Instagram, Linkedin, Github, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-panel mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">BLYND Studio</h3>
            <p className="text-secondary mb-6">
              Transforming brands through stunning design and innovative digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="social-icon glass-button p-2 rounded-lg">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="social-icon glass-button p-2 rounded-lg">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="social-icon glass-button p-2 rounded-lg">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="social-icon glass-button p-2 rounded-lg">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="nav-link text-secondary">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="nav-link text-secondary">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link text-secondary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link text-secondary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-secondary">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>hello@blyndstudio.com</span>
              </li>
              <li className="flex items-center space-x-3 text-secondary">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-secondary">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 dark:border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-secondary text-sm">
            © {currentYear} BLYND Studio. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="nav-link text-secondary">
              Privacy Policy
            </a>
            <a href="#" className="nav-link text-secondary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
