import { useEffect, useState, useRef } from 'react';
import { supabase } from '../../lib/supabase';
import type { Stat } from '../../lib/supabase';
import GlassCard from '../GlassCard';

export default function StatsSection() {
  const [stats, setStats] = useState<Stat[]>([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadStats();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  async function loadStats() {
    const { data, error } = await supabase
      .from('stats')
      .select('*')
      .order('order_index');

    if (!error && data) {
      setStats(data);
    }
    setLoading(false);
  }

  function AnimatedNumber({ value, suffix }: { value: number; suffix?: string }) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
        <span className="text-5xl md:text-6xl font-bold gradient-text">
        {displayValue}{suffix ?? ''}
      </span>
    );
  }

  if (loading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="glass-panel rounded-2xl p-6 h-32 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <GlassCard
              key={stat.id}
              hover
              className="text-center"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-lg text-secondary mt-2 font-medium">{stat.label}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
