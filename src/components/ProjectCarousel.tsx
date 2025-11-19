import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import type { Project } from '../lib/supabase';

interface ProjectCarouselProps {
  projects: Project[];
  onEmailSubmit?: (email: string) => void;
}

export default function ProjectCarousel({ projects, onEmailSubmit }: ProjectCarouselProps) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [autoRotateEnabled, setAutoRotateEnabled] = useState(true);

  // Auto-rotate carousel every 7 seconds
  useEffect(() => {
    if (!autoRotateEnabled || projects.length === 0) return;

    const timer = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [autoRotateEnabled, projects.length]);

  const handleSquareClick = (index: number) => {
    setCurrentProjectIndex(index);
    setAutoRotateEnabled(false);
    // Re-enable auto-rotate after 3 seconds of inactivity
    setTimeout(() => setAutoRotateEnabled(true), 3000);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onEmailSubmit?.(email);
      setEmail('');
    }
  };

  if (projects.length === 0) return null;

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Hero Background with Featured Project */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={currentProject.thumbnail_url}
          alt={currentProject.title}
          className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          loading="lazy"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center h-full text-center">
        <div className="max-w-3xl">
          <p className="text-sm md:text-base font-medium text-white/80 mb-4 uppercase tracking-wider">
            {currentProject.category}
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            {currentProject.title}
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            {currentProject.description}
          </p>

          {currentProject.client && (
            <p className="text-white/70 mb-8 text-lg">Client: <span className="font-semibold">{currentProject.client}</span></p>
          )}

          {/* Email CTA Form */}
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 justify-center mb-12 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-6 py-3 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all flex-1"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <button className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-300">
            View Project
          </button>
        </div>
      </div>

      {/* Bottom Carousel - Floating Project Squares */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-3 md:gap-4 overflow-x-auto pb-4">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => handleSquareClick(index)}
                className={`
                  relative rounded-lg overflow-hidden transition-all duration-300 flex-shrink-0
                  ${index === currentProjectIndex ? 'ring-2 ring-white scale-110' : 'hover:scale-105 opacity-70 hover:opacity-100'}
                  w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28
                `}
              >
                <img
                  src={project.thumbnail_url}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
