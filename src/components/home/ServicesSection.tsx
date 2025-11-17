import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import type { Service } from '../../lib/supabase';
import GlassCard from '../GlassCard';
import * as Icons from 'lucide-react';

export default function ServicesSection() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  async function loadServices() {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('order_index');

    if (!error && data) {
      setServices(data);
    }
    setLoading(false);
  }

  if (loading) {
    return (
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="glass-panel rounded-2xl p-6 h-64 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We <span className="gradient-text">Create</span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon as string] || Icons.Sparkles;

            return (
              <GlassCard
                key={service.id}
                hover
                className="text-center"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: `${service.color_accent}20`,
                    color: service.color_accent,
                  }}
                >
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-secondary leading-relaxed">{service.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
