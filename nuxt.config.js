const path = require("path");
const fs = require("fs");
const env = require("./env.js");
require("dotenv").config();

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "o v e r s e l f",
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=UA-145085741-1', async: true },
      { src: 'https://kit.fontawesome.com/a0f231f0e6.js' }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'title', content: 'o v e r s e l f' },
      { name: 'description', content: 'OVERSELF, 4-piece band from San Diego, CA.' },
      { name: 'keywords', content: 'Overself, over self, music, band, san diego, rock, shoegaze, pulses, post-punk, post-rock' },
      { hid: 'description', name: 'description', content: 'Overself is a group consisting of multi-instrumentalist Peter Tueller, guitarist Diego Guardado, bassist Oscar Paez and drummer Alex Meza. The group started in mid-2019, in San Diego, California. After the ending of our previous musical projects, we decided to get together again and continue making music that we love. After a couple of jam sessions, it became clear that the chemistry was real and that we wanted to pursue this project. A couple of months later and ounces of sweat in the practice room, we released our first EP, Pulses.' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/lol2dkn.css' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;700&display=swap', rel: 'stylesheet' }
    ]
  },
  server: {
    https: {
      // key: fs.readFileSync(path.resolve(__dirname, 'privkey.key')),
      // cert: fs.readFileSync(path.resolve(__dirname, 'cert.crt'))
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/_reset.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: "@/plugins/date",
      ssr: true
    },
    {
      src: '@/plugins/youtube',
      ssr: false
    },
    {
      src: "@/plugins/analytics",
      ssr: false
    },
    {
      src: "@/plugins/window",
      ssr: false
    },
    {
      src: "@/plugins/modules",
      ssr: false
    },
    {
      src: "@/plugins/injector",
      ssr: true
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** API Routes
  */
  serverMiddleware: [
    '~/api/index.js',
    '~/api/cert-bot.js'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/device'
  ],
  /*
  ** Nuxt.js style resources
  */
  styleResources: {
    scss: [
      '~/assets/scss/_settings.scss',
      '~/assets/scss/_functions.scss'
    ]
  },
  /*
  ** Server Configuration
  */
  server: {
    port: process.env.PORT
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
