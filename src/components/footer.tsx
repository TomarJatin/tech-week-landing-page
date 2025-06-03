'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { footerData } from '@/data/footer.data';
import { Separator } from './ui/seperator';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FooterSpotlightText from './Footerspotlight';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const [innerWidth, setInnerWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.from('.animate', {
        y: 100,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
        },
      });
    },
    { scope: container },
  );

  useEffect(() => {
    setInnerWidth(window.innerWidth);

    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <footer
        ref={container}
        className=" text-white overflow-hidden   px-2 sm:px-6 md:px-10"
      >
        {/* Content */}
        <div className="relative z-10 mx-auto px-6 animate">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
            {/* Logo */}
            <div className="flex items-center justify-center">
              <Link href="/" className="text-xl font-bold flex items-center justify-center gap-2">
                <footerData.logo />
              </Link>
            </div>

            {/* Navigation */}
            <nav>
              <ul className="flex flex-wrap justify-center gap-4 text-xs lg:text-sm mt-4 md:mt-0">
                {footerData.links.map((link, index) => (
                  <React.Fragment key={link.name}>
                    <li key={link.name} className="flex items-center">
                      <Link href={link.url} className="hover:text-gray-300 transition-colors">
                        {link.name}
                        <span className="sr-only">{link.name}</span>
                      </Link>
                    </li>
                    {index < footerData.links.length - 1 && (
                      <div className="block md:hidden">
                        <Separator className="h-6" orientation="vertical" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Links and Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t ">
            <div className="flex gap-6 mb-6 md:mb-0">
              {footerData.social.map((social) => (
                <Link key={social.name} href={social.url} className="hover:text-gray-300 transition-colors">
                  {social.icon && <social.icon className="w-5 h-5" />}
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
            <p className="text-sm text-white/50">{footerData.copyright}</p>
          </div>
        </div>
      </footer>
      <Image src="/heizen.svg" alt="Heizen" width={1000} height={1000} className='w-full h-auto mt-12' />
    </>
  );
}
