export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'stone',
    },
  },
  app: {
    logo: '/favicon.ico',
  },
  footer: {
    notice: 'A Starter Template by Estéban "Barbapapazes"',
    smallLinks: [
      {
        label: 'Privacy Policy',
        to: '/privacy',
      },
      {
        label: 'Terms of Service',
        to: '/terms',
      },
      {
        label: 'Contact',
        to: 'mailto:esteban@soubiran.dev',
      },
    ],
  },
  socials: [
    {
      title: 'GitHub',
      icon: 'i-simple-icons-github',
      to: 'https://github.com/marr/hub',
      target: '_blank',
    },
    {
      title: 'X',
      icon: 'i-simple-icons-x',
      to: 'https://x.com/dmarr',
      target: '_blank',
    },
    {
      title: 'LinkedIn',
      icon: 'i-simple-icons-linkedin',
      to: 'https://www.linkedin.com/in/davidmarr/',
      target: '_blank',
    },
  ],
})
