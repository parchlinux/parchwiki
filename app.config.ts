export default defineAppConfig({
  docus: {
    title: 'Parch Docs',
    description: 'Parch Linux is an open-source, Arch-based Linux distribution, that tried to be pretty, easy to use, light, fast and stable.',
    image: '/img/logo.png',
    socials: {
      twitter: 'bssfoss',
      github: 'parchlinux',
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      logo: false,
      title: false,
    },
    footer: {
	credits:{
		icon: '',
        	text: '© BSS OSF - All Rights Reserved.',
        	href: 'https://parchlinux.ir',
      },
      iconLinks: [
        {
          href: 'https://t.me/parchlinux',
          icon: 'simple-icons:telegram'
        }
      ]
    }
  }
})
