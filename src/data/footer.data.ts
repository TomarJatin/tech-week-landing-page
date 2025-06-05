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
      url: 'https://heizen.work/partnership',
    },
    {
      name: 'Blogs',
      url: 'https://heizen.work/blogs',
    },
    {
      name: 'Privacy Policy',
      url: 'https://heizen.work/privacy-policy',
    },
    {
      name: 'Terms and Conditions',
      url: 'https://heizen.work/terms-and-conditions',
    },
  ],
  social: [
    {
      name: 'Linkedin',
      icon: BsLinkedin,
      url: 'https://www.linkedin.com/company/heizenofficial/',
    },
    {
      name: 'Youtube',
      icon: BsYoutube,
      url: 'https://www.youtube.com/@heizen-official',
    },
    {
      name: 'Instagram',
      icon: BsInstagram,
      url: 'https://www.instagram.com/heizen.work/',
    },
    {
      name: 'Twitter',
      icon: BsTwitterX,
      url: 'https://www.x.com/heizenofficial',
    },
  ],
  copyright: '© ' + new Date().getFullYear() + ' Heizen. All rights reserved.',
  logo: Logo,
};
