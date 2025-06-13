'use client';

import { useEffect, useState } from 'react';

const steps = [
  { label: 'Precious', id: 'precious' },
  { label: 'SemiPrecious', id: 'semi-precious' },
  { label: 'SourcingWorld', id: 'sourcing-world' },
  { label: 'GemstoneManufacturing', id: 'gemstone-manufacturing' },
  { label: 'Distribution', id: 'distribution-map' },
];

export default function VerticalStepNav() {
  const [activeStep, setActiveStep] = useState(0);
  const [thumbTop, setThumbTop] = useState(0); // scroll indicator position

  const scrollToSection = (id, index) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveStep(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = scrolled / scrollableHeight;

      const trackHeight = 64; // h-16 = 64px
      const thumbHeight = 12;
      const maxThumbOffset = trackHeight - thumbHeight;

      const newThumbTop = progress * maxThumbOffset;
      setThumbTop(newThumbTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center space-y-6">
        
        {/* Scrollbar Track */}
        <div className="relative w-[6px] h-16 bg-[#8c6b4d] rounded-full overflow-hidden">
          {/* Scroll Thumb */}
          <div
            className="absolute w-[6px] h-3 bg-white rounded-full left-0"
            style={{ top: `${thumbTop}px` }}
          />
        </div>

        {/* Dots */}
        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => scrollToSection(step.id, index)}
            className="flex items-center gap-2 focus:outline-none"
          >
            <span
              className={`w-4 h-4 rounded-full border-[2px] ${
                activeStep === index
                  ? 'bg-[#8c6b4d] border-[#8c6b4d]'
                  : 'border-[#8c6b4d]'
              } transition-all duration-300`}
            ></span>
            {activeStep === index && (
              <span className="text-[#8c6b4d] font-cardo text-sm">
                {step.label}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
