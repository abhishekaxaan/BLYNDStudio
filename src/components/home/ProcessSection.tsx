import { Lightbulb, Pencil, Code, Rocket } from 'lucide-react';
import GlassCard from '../GlassCard';

export default function ProcessSection() {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Discovery',
      description: 'We dive deep into your brand, goals, and target audience to create a solid foundation.',
      color: '#0071E3',
    },
    {
      icon: Pencil,
      title: 'Design',
      description: 'Our designers craft beautiful, user-centric designs that align with your vision.',
      color: '#FF6B35',
    },
    {
      icon: Code,
      title: 'Development',
      description: 'We bring designs to life with clean code and cutting-edge technologies.',
      color: '#BF5AF2',
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'We deploy your project and provide ongoing support to ensure continued success.',
      color: '#30D158',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 113, 227, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 113, 227, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            A proven process that delivers exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 left-full w-full h-0.5 bg-gradient-to-r from-current to-transparent opacity-20" />
              )}
              <GlassCard hover className="text-center h-full">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 relative"
                  style={{
                    background: `${step.color}20`,
                    color: step.color,
                  }}
                >
                  <step.icon className="w-8 h-8" />
                  <div
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      background: step.color,
                      color: 'white',
                    }}
                  >
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-secondary leading-relaxed">{step.description}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
