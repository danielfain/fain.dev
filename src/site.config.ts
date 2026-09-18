export const site = {
  name: 'Daniel',
  fullName: 'Daniel Fain',
  initials: 'DF',
  role: 'Software developer',
  description: 'Daniel’s personal site. Software projects, things I’m learning, and notes along the way.',
  introduction: 'I’m a software developer. This is where I share my projects and write about what I’m learning.',
  links: [
    { label: 'Email', url: 'mailto:daniel@fain.dev', icon: 'mail' },
    { label: 'GitHub', url: 'https://github.com/danielfain', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/danieljfain/', icon: 'linkedin' },
  ] as { label: string; url: string; icon?: 'mail' | 'github' | 'linkedin' }[],
  showExampleNotice: true,
};
