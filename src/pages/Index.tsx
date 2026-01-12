import { useState, useEffect } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
//import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';
//import { ExperimentalNav } from '@/components/ExperimentalNav';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Experimental Navigation */}
      {/*<ExperimentalNav />*/}
      
      {/* Cursor Follower Effect */}
      <div 
        className="fixed w-4 h-4 bg-foreground rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-75"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${isLoaded ? 1 : 0})`,
        }}
      />

      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        {/*<ExperienceSection />*/}
        <ContactSection />
      </main>

      {/* Footer with ASCII Art */}
      <footer className="py-16 px-8 border-t border-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="text-center font-mono text-xs leading-none">
            <pre className="text-foreground opacity-60">
<pre className="font-mono text-xs leading-none">
{`
██████╗ ██████╗  █████╗ ██████╗ ██╗  ██╗███╗   ███╗███████╗██╗  ██╗ █████╗ ██████╗ 
██╔══██╗██╔══██╗██╔══██╗██╔══██╗██║  ██║████╗ ████║██╔════╝██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝███████║██████╔╝███████║██╔████╔██║█████╗  ███████║███████║██████╔╝
██╔═══╝ ██╔══██╗██╔══██║██╔══██╗██╔══██║██║╚██╔╝██║██╔══╝  ██╔══██║██╔══██║██╔══██╗
██║     ██║  ██║██║  ██║██████╔╝██║  ██║██║ ╚═╝ ██║███████╗██║  ██║██║  ██║██║  ██║
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
`}
</pre>

            </pre>
          </div>
          <div className="mt-8 text-center">
            <p className="font-mono text-sm">© 2026 Prabhmehar Dhalio — PORTFOLIO</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;