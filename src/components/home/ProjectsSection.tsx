import { useEffect, useState } from 'react';
import GlassCard from '../GlassCard';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import type { Project } from '../../lib/supabase';

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('featured', true)
      .order('order_index')
      .limit(4);

    if (!error && data) {
      setProjects(data);
    }
    setLoading(false);
  }

  if (loading) {
    return (
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="glass-panel rounded-2xl h-96 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const categoryColors: Record<string, string> = {
    Website: '#0071E3',
    Graphics: '#FF6B35',
    '3D': '#BF5AF2',
    Video: '#30D158',
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Explore our latest projects and success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <GlassCard
              key={project.id}
              hover
              className={`group overflow-hidden cursor-pointer ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={project.thumbnail_url}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                  <span className="text-white font-medium flex items-center space-x-2">
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    background: `${categoryColors[project.category] || '#0071E3'}20`,
                    color: categoryColors[project.category] || '#0071E3',
                  }}
                >
                  {project.category}
                </span>
                <span className="text-sm text-secondary">{project.client}</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-secondary leading-relaxed">{project.description}</p>
            </GlassCard>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#all-projects"
            className="glass-button-primary px-8 py-4 rounded-full text-lg font-medium inline-flex items-center space-x-2"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
