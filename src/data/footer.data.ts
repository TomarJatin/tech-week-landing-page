import React from 'react';
import { BsTwitterX, BsLinkedin, BsYoutube, BsInstagram } from 'react-icons/bs';
import { Logo } from '../components/logo';
interface FooterLink {
  name: string;
  url: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface FooterData {
  links: FooterLink[];
  social: FooterLink[];
  copyright: string;
  logo: string | React.ComponentType;
}

export const footerData: FooterData = {
  links: [
    {
      name: 'Partner with Us',
      url: '/partnership',
    },
    {
      name: 'Blogs',
      url: '/blogs',
    },
    {
      name: 'Privacy Policy',
      url: '/privacy-policy',
    },
    {
      name: 'Terms and Conditions',
      url: '/terms-and-conditions',
    },
  ],
  social: [
    {
      name: 'Linkedin',
      icon: BsLinkedin,
      url: 'https://www.linkedin.com/company/opengig/',
    },
    {
      name: 'Youtube',
      icon: BsYoutube,
      url: 'http://www.youtube.com/@opengig2024',
    },
    {
      name: 'Instagram',
      icon: BsInstagram,
      url: 'https://www.instagram.com/opengig.work',
    },
    {
      name: 'Twitter',
      icon: BsTwitterX,
      url: 'https://x.com/opengigofficial',
    },
  ],
  copyright: '© ' + new Date().getFullYear() + ' Opengig. All rights reserved.',
  logo: Logo,
};
