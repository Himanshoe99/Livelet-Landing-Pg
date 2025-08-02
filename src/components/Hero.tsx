import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import LottieAnimation from "./LottieAnimation";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    fetch('/loop-header.lottie')
      .then(response => response.json())
      .then(data => setLottieData(data))
      .catch(error => console.error("Error loading Lottie animation:", error));
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <section
      className="overflow-hidden relative bg-cover bg-center min-h-screen flex items-center justify-center"
      id="hero"
      style={{
        backgroundImage: 'url("/Header-background.webp")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        padding: isMobile ? '100px 12px 40px' : '120px 20px 60px',
      }}
    >
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      <div className="container px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center" ref={containerRef}>
        <div className="w-full flex flex-col items-center justify-center text-center">
          <h1
            className="section-title font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Livelet: Collaborative<br className="hidden sm:inline" />Code Editor
          </h1>
          <p
            style={{ animationDelay: "0.5s" }}
            className="section-subtitle mt-6 mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-950 font-normal text-xl sm:text-2xl lg:text-3xl text-center"
          >
            The collaborative coding space that evolves with your team’s workflow.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in justify-center"
            style={{ animationDelay: "0.7s" }}
          >
            <a
              href="#get-access"
              className="flex items-center justify-center group w-full sm:w-auto text-center"
              style={{
                backgroundColor: '#FE5C02',
                borderRadius: '1440px',
                boxSizing: 'border-box',
                color: '#FFFFFF',
                cursor: 'pointer',
                fontSize: '18px',
                lineHeight: '24px',
                padding: '20px 32px',
                border: '1px solid white',
              }}
            >
              Code Together
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          {lottieData && (
            <div className="relative z-10 animate-fade-in mt-10" style={{ animationDelay: "0.9s" }}>
              <LottieAnimation
                animationPath={lottieData}
                className="w-full h-auto max-w-lg mx-auto"
                loop={true}
                autoplay={true}
              />
            </div>
          )}
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
