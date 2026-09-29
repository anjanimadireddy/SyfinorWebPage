import React, { useRef, useEffect } from 'react';
import { Sparkles, Shield, Globe } from 'lucide-react';

export default function CapabilityMarquee() {
  // Base capability items
  const baseCapabilities = [
    { text: 'SWIFT MT/MX · ISO 20022 Compliance', icon: Shield },
    { text: 'Oracle FLEXCUBE Implementation Specialists', icon: Sparkles },
    { text: 'Delivered across Africa · Asia · Latin America', icon: Globe },
    { text: 'SyWatch — On-Prem Banking Monitoring', icon: Shield },
  ];

  // Tripled sequence in each group guarantees ample continuous width across all displays
  const capabilities = [...baseCapabilities, ...baseCapabilities, ...baseCapabilities];

  const trackRef = useRef(null);
  const groupRef = useRef(null);
  const offsetRef = useRef(0);
  const targetShiftRef = useRef(0);
  const isHoveredRef = useRef(false);
  const groupWidthRef = useRef(0);
  const animIdRef = useRef(null);

  useEffect(() => {
    const updateGroupWidth = () => {
      if (groupRef.current) {
        groupWidthRef.current = groupRef.current.offsetWidth;
      }
    };

    updateGroupWidth();

    let ro = null;
    if (typeof ResizeObserver !== 'undefined' && groupRef.current) {
      ro = new ResizeObserver(() => {
        updateGroupWidth();
      });
      ro.observe(groupRef.current);
    }

    window.addEventListener('resize', updateGroupWidth);

    // Continuous smooth animation loop
    const pixelsPerSecond = 42; // Smooth constant speed
    let lastTime = performance.now();

    const animate = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // 1. Auto-scroll when not hovered
      if (!isHoveredRef.current) {
        offsetRef.current += pixelsPerSecond * dt;
      }

      // 2. Smoothly apply manual step shifts (from clicking ‹ or ›)
      if (targetShiftRef.current !== 0) {
        const stepDiff = targetShiftRef.current * Math.min(12 * dt, 1);
        offsetRef.current += stepDiff;
        targetShiftRef.current -= stepDiff;
        if (Math.abs(targetShiftRef.current) < 0.2) {
          offsetRef.current += targetShiftRef.current;
          targetShiftRef.current = 0;
        }
      }

      // 3. Mathematical seamless wrap modulo groupWidth
      const groupWidth = groupWidthRef.current;
      if (groupWidth > 0) {
        while (offsetRef.current >= groupWidth) {
          offsetRef.current -= groupWidth;
        }
        while (offsetRef.current < 0) {
          offsetRef.current += groupWidth;
        }
      }

      // 4. Update track transform
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
      }

      animIdRef.current = requestAnimationFrame(animate);
    };

    animIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animIdRef.current) {
        cancelAnimationFrame(animIdRef.current);
      }
      if (ro) {
        ro.disconnect();
      }
      window.removeEventListener('resize', updateGroupWidth);
    };
  }, []);

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Move content toward the LEFT by one controlled step
    targetShiftRef.current += 260;
  };

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Move content toward the RIGHT by one controlled step
    targetShiftRef.current -= 260;
  };

  return (
    <div
      className="capability-bar"
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
    >
      {/* FIXED REAL CLICKABLE LEFT CONTROL: ‹ */}
      <button
        type="button"
        className="capability-arrow capability-arrow-left"
        onClick={handlePrev}
        aria-label="Move content left"
        title="Scroll left"
      >
        ‹
      </button>

      {/* SCROLLING VIEWPORT (Only this middle area moves) */}
      <div className="capability-viewport">
        {/* INFINITE MOVING TRACK */}
        <div className="capability-track" ref={trackRef}>
          {/* GROUP 1 */}
          <div className="capability-group" ref={groupRef}>
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={`group1-${idx}`} className="flex items-center flex-shrink-0">
                  <div className="flex items-center space-x-2.5">
                    <Icon className="w-4 h-4 text-[#00D9D0] flex-shrink-0 opacity-95" />
                    <span className="text-[13.5px] sm:text-[14.5px] font-medium text-[#C6D0DD] whitespace-nowrap tracking-wide">
                      {item.text}
                    </span>
                  </div>
                  <span className="text-[#00D9D0] text-xs font-bold pl-8 select-none opacity-60">•</span>
                </div>
              );
            })}
          </div>

          {/* GROUP 2: IDENTICAL DUPLICATE FOR SEAMLESS 100% INFINITE LOOP */}
          <div className="capability-group" aria-hidden="true">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={`group2-${idx}`} className="flex items-center flex-shrink-0">
                  <div className="flex items-center space-x-2.5">
                    <Icon className="w-4 h-4 text-[#00D9D0] flex-shrink-0 opacity-95" />
                    <span className="text-[13.5px] sm:text-[14.5px] font-medium text-[#C6D0DD] whitespace-nowrap tracking-wide">
                      {item.text}
                    </span>
                  </div>
                  <span className="text-[#00D9D0] text-xs font-bold pl-8 select-none opacity-60">•</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FIXED REAL CLICKABLE RIGHT CONTROL: › */}
      <button
        type="button"
        className="capability-arrow capability-arrow-right"
        onClick={handleNext}
        aria-label="Move content right"
        title="Scroll right"
      >
        ›
      </button>
    </div>
  );
}


