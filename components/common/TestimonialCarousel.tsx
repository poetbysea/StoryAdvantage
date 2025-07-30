'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Six weeks from discovery to signed option deal. The platform has become as essential to my morning routine as coffee. I've optioned four properties that my competitors didn't even know existed.",
    name: 'Marcus C.',
    title: 'Senior VP Development',
    avatar: '/images/avatars/marcus.jpg'
  },
  {
    quote: "Finally, a systematic approach to IP discovery. My hit rate has improved dramatically.",
    name: 'Sarah K.',
    title: 'Development Executive',
    avatar: '/images/avatars/sarah.jpg'
  },
  {
    quote: "It's like having X-ray vision into the publishing world's nervous system.",
    name: 'James L.',
    title: 'Head of Development',
    avatar: '/images/avatars/james.jpg'
  },
  {
    quote: "Other executives are asking how I'm finding all these gems. I just smile.",
    name: 'Ana R.',
    title: 'VP Content',
    avatar: '/images/avatars/ana.jpg'
  }
];

export const TestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {testimonials.map((testimonial, index) => (
            <div className="embla__slide" key={index}>
              <div className="bg-white p-8 rounded-lg shadow-lg text-left border border-slate-100 h-full">
                <p 
                  className="italic text-[#475569] mb-6"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '1.125rem', fontWeight: 400 }}
                >
                  <span className='text-3xl text-slate-300 mr-2'>“</span>{testimonial.quote}<span className='text-3xl text-slate-300 ml-1'>”</span>
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full bg-slate-200 mr-4 flex-shrink-0">
                    {/* Avatar placeholder */}
                  </div>
                  <div>
                    <p 
                      className="font-semibold text-[#4F5B7A]"
                      style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', fontWeight: 600 }}
                    >
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-500" style={{ fontFamily: 'var(--font-inter)'}}>{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`embla__dot`.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
          />
        ))}
      </div>
    </div>
  );
};
