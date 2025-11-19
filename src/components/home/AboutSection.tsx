import { Award, Users, Target, Zap } from 'lucide-react';
import GlassCard from '../GlassCard';

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: 'Purpose-Driven',
      description: 'Every design decision serves a strategic purpose aligned with your business goals.',
      color: '#0071E3',
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We stay ahead of trends, bringing cutting-edge solutions to every project.',
      color: '#FF6B35',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Your vision combined with our expertise creates truly remarkable results.',
      color: '#BF5AF2',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in every aspect of our work.',
      color: '#30D158',
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Crafting Digital
              <br />
              <span className="gradient-text">Experiences</span>
            </h2>
            <p className="text-xl text-secondary leading-relaxed mb-6">
              We're a team of passionate designers, developers, and creative thinkers dedicated
              to transforming brands through exceptional digital experiences.
            </p>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Founded in 2016, BLYND Studio has grown from a small studio to an award-winning agency
              trusted by leading brands worldwide. Our mission is simple: create work that not
              only looks beautiful but drives real business results.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              We believe in the power of great design to tell stories, build connections, and
              inspire action. Every project is an opportunity to push boundaries and exceed
              expectations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass-panel rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">12+</div>
                <div className="text-secondary">Industry Awards</div>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6 space-y-4 mt-8">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-secondary">Team Members</div>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">200+</div>
                <div className="text-secondary">Projects Delivered</div>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6 space-y-4 mt-8">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-secondary">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            Our <span className="gradient-text">Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <GlassCard
                key={index}
                hover
                className="text-center"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: `${value.color}20`,
                    color: value.color,
                  }}
                >
                  <value.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-secondary leading-relaxed">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
