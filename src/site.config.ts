export const site = {
  name: 'Daniel',
  fullName: 'Daniel Fain',
  role: 'Software developer',
  description: 'Daniel’s personal site. Software projects, things I’m learning, and notes along the way.',
  introduction: 'I build software and occasionally write about what I learn along the way.',
  links: [
    { label: 'Email', url: 'mailto:daniel@fain.dev', icon: 'mail' },
    { label: 'GitHub', url: 'https://github.com/danielfain', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/danieljfain/', icon: 'linkedin' },
  ] as { label: string; url: string; icon?: 'mail' | 'github' | 'linkedin' }[],
};
