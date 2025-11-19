import { useEffect, useState } from 'react';
import ProjectCarousel from '../ProjectCarousel';
import { supabase } from '../../lib/supabase';
import type { Project } from '../../lib/supabase';

export default function HeroSection() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase.from('projects').select();
      setProjects(data || []);
    };
    fetchProjects();
  }, []);

  const handleEmailSubmit = (email: string) => {
    // Store email in sessionStorage and scroll to contact section
    sessionStorage.setItem('prefillEmail', email);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Dispatch custom event to notify ContactSection
      window.dispatchEvent(new CustomEvent('emailPrefill', { detail: { email } }));
    }
  };

  if (projects.length === 0) return null;

  return <ProjectCarousel projects={projects} onEmailSubmit={handleEmailSubmit} />;
}
