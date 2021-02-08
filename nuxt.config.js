require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "o v e r s e l f",
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=UA-145085741-1', async: true },
      { src: 'https://kit.fontawesome.com/a0f231f0e6.js' },
      { src: "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js", type: "text/javascript" },
      { src: "https://js.stripe.com/v3/", type: "text/javascript" },
      // { src: "https://rawcdn.githack.com/nextapps-de/spotlight/0.6.3/dist/js/spotlight.min.js", type: "text/javascript" }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'title', content: 'o v e r s e l f' },
      { name: 'image', content: 'https://overselfmusic.com/meta-image.png' },
      { name: 'keywords', content: 'Overself, over self, music, band, san diego, rock, shoegaze, pulses, post-punk, post-rock' },
      { hid: 'description', name: 'description', content: 'Overself is exploring the complexities of the human condition through music with topics often found in eastern mysticism such as transcendence, duality, impermanence, isolation, vulnerability, self-realization and death. The band consists of Peter Tueller, Alex Meza, Diego Guardado and Oscar Paez. Drawing from influences rooted in shoegaze, post-hardcore, post-rock and dream pop, Overself employs a sound that is both explosive and sensitive. The origins of Overself reside in the underground San Diego rock and indie scene. Peter, Alex, Diego, and Oscar all participated in multiple bands that were very active in the scene, but ultimately discovered that they were the most productive and inspired when working together. 2019 found them working tirelessly to define their sound and goals, and after a prolific year they released their debut album “Pulses.” Overself incorporates dreamy guitars, soft vocals, retro synths, and ambient sounds combined with sudden distorted guitars, energetic drums and experimental progressions to create a sonic representation of duality, that merges two different emotions to ultimately produce a notion of oneness.' },
      {
        hid: "og:description",
        name: "og:description",
        content: "Overself is exploring the complexities of the human condition through music with topics often found in eastern mysticism such as transcendence, duality, impermanence, isolation, vulnerability, self-realization and death. The band consists of Peter Tueller, Alex Meza, Diego Guardado and Oscar Paez. Drawing from influences rooted in shoegaze, post-hardcore, post-rock and dream pop, Overself employs a sound that is both explosive and sensitive. The origins of Overself reside in the underground San Diego rock and indie scene. Peter, Alex, Diego, and Oscar all participated in multiple bands that were very active in the scene, but ultimately discovered that they were the most productive and inspired when working together. 2019 found them working tirelessly to define their sound and goals, and after a prolific year they released their debut album “Pulses.” Overself incorporates dreamy guitars, soft vocals, retro synths, and ambient sounds combined with sudden distorted guitars, energetic drums and experimental progressions to create a sonic representation of duality, that merges two different emotions to ultimately produce a notion of oneness."
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "o v e r s e l f"
      },
      {
        hid: "og:type",
        name: "og:type",
        content: "website"
      },
      {
        hid: "og:image",
        name: "og:image",
        content: "https://overselfmusic.com/meta-image.png"
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      // { rel: 'stylesheet', href: 'https://use.typekit.net/lol2dkn.css' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;700&display=swap', rel: 'stylesheet' },
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
    '~/assets/scss/_reset.scss',
    '~/assets/scss/_global.scss'
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
  telemetry: false,
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
    '@nuxtjs/device',
    '@nuxtjs/toast'
  ],
  /*
  ** Toast
  */
  toast: {
    position: "bottom-center"
  },
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
  ** Server Middleware (API Endpoints)
  */
  serverMiddleware: [
    bodyParser.json(),
    cookieParser(),
    "~/server/api/routes.js"
  ],
  /*
  ** Server Configuration
  */
  server: {
    port: process.env.PORT,
    host: "0.0.0.0"
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
