import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/home/heroSection';
import ServicesSection from './components/home/ServicesSection';
import ProjectsSection from './components/home/ProjectsSection';
import ProcessSection from './components/home/ProcessSection';
import StatsSection from './components/home/StatsSection';
import AboutSection from './components/home/AboutSection';
import ContactSection from './components/home/ContactSection';
import CTASection from './components/home/CTASection';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden w-full">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <ProjectsSection />
          <ProcessSection />
          <StatsSection />
          <AboutSection />
          <ContactSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
