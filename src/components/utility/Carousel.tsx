import { useState, useEffect, useRef } from 'react';

export default function Carousel() {
  const originalSlides = [
    { id: 1, title: "Secure Your Future", desc: "Explore our comprehensive insurance plans." },
    { id: 2, title: "Grow Your Wealth", desc: "Smart investment strategies for long-term returns." },
    { id: 3, title: "Retire with Confidence", desc: "Reliable pension schemes designed for tomorrow." }
  ];

  // 1. Clone the first and last slides to create a seamless wrapping sandwich
  const slides = [
    originalSlides[originalSlides.length - 1], // Clone of Last Slide at index 0
    ...originalSlides,                          // Original Slides at index 1, 2, 3
    originalSlides[0]                           // Clone of First Slide at index 4
  ];

  // Start the index at 1 (the first real slide, skipping the clone)
  const [current, setCurrent] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  // For a standard browser setup
  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);


  // 2. Automatic slide timer
  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setCurrent((prev) => prev + 1);
      setIsTransitioning(true);
    }, 4000);

    return () => { if (timeoutRef.current){clearInterval(timeoutRef.current);}}
  }, []);

  // 3. The Magic Snapping Trick
  // Fires instantly whenever our slider finishes moving to a new slide
  const handleTransitionEnd = () => {
    // If we just slid onto the end clone (index 4), silently snap to the real first slide (index 1)
    if (current === slides.length - 1) {
      setIsTransitioning(false);
      setCurrent(1);
    }
    // If we are at the beginning clone (index 0), silently snap to the real last slide
    if (current === 0) {
      setIsTransitioning(false);
      setCurrent(slides.length - 2);
    }
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-black text-white">
      {/* Slider Track Wrapper */}
      <div 
        onTransitionEnd={handleTransitionEnd}
        className={`flex h-full ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : 'transition-none'}`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={`${slide.id}-${index}`} 
            className={`w-full h-full flex-shrink-0 flex flex-col justify-center items-center text-center px-12 bg-white`}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight text-[var(--accent)]">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl font-light ">
              {slide.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {originalSlides.map((_, index) => {
          // Adjust index map comparison because our active slide layout shifts by 1 element
          const activeIndex = current === slides.length - 1 ? 0 : current === 0 ? originalSlides.length - 1 : current - 1;
          return (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setCurrent(index + 1);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ease-in-out ${
                activeIndex === index ? "w-10 bg-white" : "w-3 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
