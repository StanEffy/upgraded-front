const linkNames = [
  {
    linkName: 'about us',
    route: '/about-us',
    subRoutes: [
      ['history', '/about-us#history'],
      ['projects', '/about-us#projects'],
      ['team', '/about-us#team']
    ]
  }, {
    linkName: 'community',
    route: '/community',
    subRoutes: [
      ['startup members', '/startup-members'],
      ['investor members', '/investor'],
      ['partners', '/partners']
    ]
  }, {
    linkName: 'info bank',
    route: '/info-bank',
    subRoutes: [
      ['HealthTech research', '/healthtech'],
      ['Nordic Health Ecosystem Maps', '/ecomaps'],
      ['Important links', '/important-links'],
      ['Upgraded Health Resolutions', '/health-resolutions'],
      ['Event Calendar', '/eventcalendar'],
      ['Newsletters', '/newsletters'],
      ['Insights', '/insights'],
      ['News & Stories', '/news-and-stories']]
  }, {
    linkName: 'contact us',
    route: '/contact-us'
  }
]

export default linkNames
