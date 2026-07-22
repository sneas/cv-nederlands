module.exports = {
  name: 'Dimah Sneas',
  title: 'Software Engineer',
  baseUrl: 'https://sneas.github.io/cv-nederlands/',
  facts: {
    Woonplaats: '<a href="https://goo.gl/maps/3JZUv4LVbG1bmtwN9"><i class="fa fa-home fact-icon"></i>Weesp, NL</a>',
    Website: '<a href="https://sneas.io"><i class="fa fa-globe fact-icon"></i>sneas.io</a>',
    LinkedIn: '<a href="https://www.linkedin.com/in/sneas"><i class="fab fa-linkedin fact-icon"></i>sneas</a>',
    GitHub: '<a href="https://github.com/sneas"><i class="fab fa-github fact-icon"></i>sneas</a>',
    'E-mail': '<a href="mailto:d@sneas.io"><i class="fa fa-envelope fact-icon"></i>d@sneas.io</a>',
    Mobiel: '<a href="tel:+31645223717"><i class="fa fa-phone fact-icon"></i>+31645223717</a>',
  },
  skills: [
    ['TypeScript', 100],
    ['AWS', 75],
    ['HTML5', 100],
    ['CSS', 100],
    ['React', 100],
    ['Angular', 100],
    ['RxJS', 100],
    ['OAuth', 100],
    ['REST', 100],
    ['GraphQL', 75],
    ['Scrum', 100],
    ['CI/CD', 100],
    ['TDD', 100],
    ['Terraform', 100],
    ['NodeJS', 100],
    ['SQL', 100]
  ],
  positions: [
    {
      company: 'Vocably',
      location: 'Weesp, NL',
      title: 'Oprichter, Software Engineer',
      period: 'nov 2021 - heden',
      duration: '5 jaar',
      skills: ['AWS', 'GCP', 'Terraform', 'NodeJS', 'React Native', 'Angular', 'OAuth', 'Browser Extensions', 'TypeScript'],
      contents: `
Als enige oprichter en software engineer van een [open-source taalleerplatform](https://github.com/vocably/getvocably) ben ik volledig verantwoordelijk voor de gehele productlevenscyclus. Van idee tot omzetgeneratie, inclusief klantenondersteuning, marketing en AVG-naleving. Het platform omvat:

- Kostengeoptimaliseerde AWS/GCP-infrastructuur die AI-prompts uitvoert en de resultaten cachet
- iOS- en Android-apps gebouwd met React Native
- Webapp gebouwd met Angular
- Browserextensie gebouwd met Web Components
- Duizenden SEO-vriendelijke landingspagina's gebouwd met Vanilla TypeScript
`
    },
    {
      company: 'Air France/KLM',
      location: 'Amstelveen, NL',
      title: 'Software Engineer, Contract',
      period: 'nov 2022 - nov 2024',
      duration: '2 jaar',
      skills: ['NodeJS', 'TypeScript', 'CI/CD', 'GitHub Actions', 'Kubernetes', 'Angular', 'A/B Testing'],
      contents: `
Software-/DevOps-engineer voor Air France en KLM. Als je sinds 2022 tickets bij KLM of Air France hebt gekocht, ben je mijn code tegengekomen. Het systeem dat ik (uiteraard als onderdeel van een team) onderhield, genereert ongeveer €1 miljard per maand.
`,
      review: {
        file: 'klm-transversal.png',
        author: 'Sander Verweij, Product Owner',
      },
    },
    {
      company: 'DAZN',
      location: 'Amsterdam, NL',
      title: 'Platform Engineer',
      period: 'jul 2019 – jan 2021',
      duration: '1,5 jaar',
      skills: ['AWS', 'Terraform', 'NodeJS', 'Next.JS', 'GraphQL', 'React', 'Mobx', 'Redux', 'Tailwind', 'Webpack', 'Jest', 'Storybook'],
      review: {
        file: 'dazn.png',
        author: 'Cirpo Cinelly, Engineering Manager',
      },
      contents: `
DX-engineer voor [DAZN](https://dazn.com) – een toonaangevend sportstreamingplatform.
`,
    },
    {
      company: 'KLM Royal Dutch Airlines',
      location: 'Schiphol, NL',
      title: 'Senior Frontend Developer, Contract',
      period: 'feb 2017 – jun 2019',
      duration: '2,5 jaar',
      skills: ['Angular', 'Ionic', 'RxJS', 'NgRx', 'TypeScript', 'SASS', 'Webpack', 'Jest'],
      contents: `
Een interne mobiele app opgezet, onderhouden en overgedragen aan een ander team.

Mijn gebruikers (KLM-monteurs op Schiphol) waren enthousiast over de app, en twee van mijn managers hebben mij aanbevolen voor een nieuw contract tussen 2022 en 2024 (zie hierboven).
`,
      review: {
        file: 'klm.png',
        author: 'Önder Ceylan, Tech Lead',
      }
    },
    {
      company: 'upwork.com',
      location: 'Mountain View, VS',
      title: 'Senior Frontend Developer, Contract',
      period: 'okt 2012 – jun 2014',
      duration: '1,8 jaar',
      skills: ['Javascript', 'jQuery', 'qUnit', 'Grunt', 'Selenium', 'Compass/SASS', 'PHP', 'Zend', 'Postgres'],
      contents: `
Ik heb het grootste freelanceplatform, [Upwork](https://www.upwork.com/), geholpen bij het bouwen en perfectioneren van het Job Posting-gedeelte van hun website.
`,
      review: {
        file: 'upwork.png',
        author: 'Sean Kane, Vice President of Engineering',
      }
    }
  ],
};
