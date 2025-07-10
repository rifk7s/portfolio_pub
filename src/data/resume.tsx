import {
  ArchiveIcon,
  FolderIcon,
  HomeIcon,
  MailIcon,
  NotebookIcon,
} from 'lucide-react';
import { Icons } from '@/components/icons';

export const DATA = {
  name: 'Lorem Ipsum',
  initials: 'LI',
  url: 'https://lorem.ipsum',
  location: 'Dolor Sit, AM',
  locationLink: 'https://www.google.com/maps/place/dolor+sit',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc.',
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi aliquam nunc, eget aliquam nisl nisi euismod nunc.',
  avatarUrl: '/lorem.jpeg',
  skills: [
    'Lorem',
    'Ipsum',
    'Dolor',
    'Sit',
    'Amet',
    'Consectetur',
    'Adipiscing',
    'Elit',
    'Sed',
    'Do',
    'Eiusmod',
    'Tempor',
    'Incididunt',
    'Labore',
    'Dolore',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/contact', icon: MailIcon, label: 'Contact' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
    { href: '/projects', icon: FolderIcon, label: 'Projects' },
    { href: '/archives', icon: ArchiveIcon, label: 'Archives' },
  ],
  contact: {
    email: 'lorem@ipsum.com',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/loremipsum',
        icon: Icons.Github,
        navbar: false,
        username: 'loremipsum',
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/loremipsum',
        icon: Icons.LinkedIn,
        navbar: false,
        username: 'loremipsum',
      },
      YouTube: {
        name: 'YouTube',
        url: 'https://www.youtube.com/@loremipsum',
        icon: Icons.Youtube,
        navbar: false,
        username: 'loremipsum',
      },
      Instagram: {
        name: 'Instagram',
        url: 'https://instagram.com/loremipsum',
        icon: Icons.Instagram,
        navbar: false,
        username: 'loremipsum',
      },
    },
  },

  work: [
    {
      company: 'Lorem Corp',
      href: '#',
      badges: [],
      location: 'Dolor City, AM',
      title: 'Amet Officer',
      logoUrl: '/lorem.png',
      start: 'Jan 2023',
      end: 'Dec 2023',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod urna eu tincidunt consectetur.',
    },
    {
      company: 'Ipsum Fest',
      href: '#',
      badges: [],
      location: 'Sit Town, AM',
      title: 'Dolor Committee',
      logoUrl: '/ipsum.jpeg',
      start: 'Mar 2022',
      end: 'Apr 2023',
      description:
        'Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi aliquam nunc, eget aliquam nisl nisi euismod nunc.',
    },
  ],
  education: [
    {
      school: 'Universitas Lorem',
      href: 'https://lorem.edu',
      degree: 'Undergraduate Student in Ipsum – Dolor Sit Amet (DSA)',
      logoUrl: '/lorem.png',
      start: '2022',
      end: 'Present',
    },
    {
      school: 'Dolor Sit School',
      href: 'https://dolorsit.edu',
      degree: 'SD, SMP, SMA',
      logoUrl: '/dolorsit.png',
      start: '2010',
      end: '2022',
    },
  ],

  projects: [
    {
      title: 'Lorem Project',
      href: 'https://lorem.ipsum/project',
      dates: 'Jan 2023 - Feb 2023',
      active: true,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod urna eu tincidunt consectetur.',
      technologies: ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet'],
      links: [
        {
          type: 'Website',
          href: 'https://lorem.ipsum/project',
          icon: <Icons.Globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/loremipsum/project',
          icon: <Icons.Github className="size-3" />,
        },
      ],
      image: '/work/loremproject.png',
    },
    {
      title: 'Ipsum GUI',
      href: 'https://github.com/loremipsum/ipsumgui',
      dates: 'June 2022 - Present',
      active: true,
      description:
        'Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi aliquam nunc, eget aliquam nisl nisi euismod nunc.',
      technologies: ['Ipsum', 'Dolor', 'Sit', 'Amet'],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/loremipsum/ipsumgui',
          icon: <Icons.Github className="size-3" />,
        },
      ],
      image: '/work/ipsumgui.png',
    },

    {
      title: 'DolorGame',
      href: 'https://github.com/loremipsum/dolorgame',
      dates: 'April 2022 - September 2022',
      active: true,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod urna eu tincidunt consectetur.',
      technologies: ['Dolor', 'Sit'],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/loremipsum/dolorgame',
          icon: <Icons.Github className="size-3" />,
        },
      ],
      image: '/work/dolorgame.png',
    },

    {
      title: 'Mini Project Amet',
      href: 'https://github.com/loremipsum/miniprojamet',
      dates: 'April 2022 - March 2023',
      active: true,
      description:
        'Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi aliquam nunc, eget aliquam nisl nisi euismod nunc.',
      technologies: ['Amet'],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/loremipsum/miniprojamet',
          icon: <Icons.Github className="size-3" />,
        },
      ],
      image: '/work/miniprojamet.png',
    },
  ],
} as const;
