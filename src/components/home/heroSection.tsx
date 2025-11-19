import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import ParticleBackground from '../ParticleBackground';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const showcaseImages = [
    'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 113, 227, 0.15), transparent 50%)`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slideUp">
          <div className="inline-flex items-center space-x-2 glass-panel px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium">Award-Winning Agency</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Transforming Ideas
            <br />
            Into <span className="gradient-text">Digital Magic</span>
          </h1>

          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
            We craft stunning websites and captivating graphics that elevate your brand
            and engage your audience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#projects"
              className="glass-button-primary px-8 py-4 rounded-full text-lg font-medium inline-flex items-center space-x-2"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="glass-button px-8 py-4 rounded-full text-lg font-medium"
            >
              Get Started
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-max">
            {showcaseImages.map((image, index) => {
              // Brick layout: alternate tall and regular heights
              const isTall = index % 5 === 0 || index % 5 === 2;
              const isWide = index % 5 === 1;
              
              return (
                <div
                  key={index}
                  className={`
                    group relative overflow-hidden rounded-xl cursor-pointer
                    ${isTall ? 'md:row-span-2' : ''}
                    ${isWide ? 'md:col-span-2' : ''}
                    h-72 md:h-auto
                  `}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.08}s both`,
                  }}
                >
                  {/* Image */}
                  <img
                    src={image}
                    alt={`Showcase ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500" />
                  
                  {/* Content on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-center">
                      <p className="text-white font-bold text-xl mb-2">Explore Project</p>
                      <p className="text-white/90 text-sm">↗</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
        </div>
      </div>
    </section>
  );
}
