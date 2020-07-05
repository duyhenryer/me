module.exports = {
  siteTitle: 'Duy Do | Devops Engineer',
  siteDescription:
    'Duy Do is devops engineer based in Ho Chi Minh City, specializing in deploy the websites, applications, and everything on AWS, Google Cloud, Azure.',
  siteKeywords:
    'Devops engineer, software engineer, front-end engineer, web developer, javascript',
  siteUrl: 'https://www.thedevportfolio.xyz/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-157499679-1',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Anthony Lasserre',
  location: 'Bordeaux, FR',
  email: 'duyhenry250897@gmail.com',
  github: 'https://github.com/duyhenryer',
  twitterHandle: '@duyhenryer',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/duyhenryer',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/duyhenryer',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/duyhenryer',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/duyhenryer',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
