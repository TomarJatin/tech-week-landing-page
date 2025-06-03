'use client';

import { cn } from '@/lib/utils';
import React, { useState, useRef } from 'react';

interface SpotlightTextProps {
  text: string;
  className?: string;
  textClassName?: string;
  circleSize?: number;
}

const FooterSpotlightText = ({ text, className, textClassName, circleSize = 100 }: SpotlightTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      className={cn('relative overflow-hidden w-full', className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
    >
      <div ref={textRef} className="relative w-full">
        {/* Base text with low opacity */}
        <p
          className={cn(
            'z-[1000] w-full text-8xl font-semibold bg-gradient-to-r from-[#97bbee33] to-[#f6c9ba33] bg-clip-text text-transparent whitespace-nowrap overflow-hidden text-ellipsis',
            textClassName,
          )}
          style={{ 
            width: '100vw',
            maxWidth: '100%',
            overflow: 'hidden',
            textAlign: 'center',
            lineHeight: '1',
          }}
        >
          {text}
        </p>

        {/* Spotlight layer - only visible on hover */}
        {isHovering && (
          <p
            className={cn(
              'text-6xl font-semibold absolute inset-0 bg-gradient-to-r from-[#97bbee] to-[#f6c9ba] bg-clip-text text-transparent whitespace-nowrap overflow-hidden text-ellipsis',
              textClassName,
            )}
            style={{
              mask: `radial-gradient(circle ${circleSize}px at ${mousePosition.x}px ${mousePosition.y}px, white 20%, transparent 80%)`,
              WebkitMask: `radial-gradient(circle ${circleSize}px at ${mousePosition.x}px ${mousePosition.y}px, white 20%, transparent 80%)`,
              width: '100vw',
              maxWidth: '100%',
              overflow: 'hidden',
              textAlign: 'center',
              lineHeight: '1',
            }}
          >
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default FooterSpotlightText;
