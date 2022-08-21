require('dotenv').config()
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  loading: {
    color: '#12b07f',
    height: '15px'
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  env: {
   CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
   CONTENTFUL_ACCESSTOKEN process.env.CONTENTFUL_ACCESSTOKEN,
   CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT
  },
  generate: {
   dir: 'dist',
    cache: {
      ignore: [
      'docs'
      ]
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  body: true,
  head: {
    title: 'Kelontong',
    meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: '' },
    { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      hid: "canonical",
      rel: "canonical",
      href: "https://ppkc-online.com/",
    },
    {
      rel: 'stylesheet',
      type: "text/css",
      href: '/assets/bootstrap/css/bootstrap.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500&display=swap'
    },
    {
      rel: 'stylesheet',
      type: "text/css",
      href: '/assets/fonts/font-awesome.css'
    },
    {
      rel: 'stylesheet',
      type: "text/css",
      href: '/assets/css/magnific-popup.css'
    },
    {
      rel: 'stylesheet',
      type: "text/css",
      href: '/assets/css/animate.css'
    },
    {
      rel: 'stylesheet',
      type: "text/css",
      href: '/assets/css/slick.css'
    },
    { 
      rel: 'stylesheet', 
      type: 'text/css', 
      href: '/assets/css/LineIcons.2.0.css'
    },
    {
      rel: 'stylesheet',
      type: "text/css",
      href: '/assets/css/glightbox.min.css'
    },
    {
      rel: 'stylesheet',
      type: "text/css",
      href: 'https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css'
    }
    ],
    script: [
    {
      src: 'https://polyfill.io/v3/polyfill.min.js?features=es2015%2CIntersectionObserver',
      body: true
    },
    {
      src: 'https://cdn.ampproject.org/v0/amp-ad-0.1.js',
      async: 'true',
      'custom-element': 'amp-ad'
    },
    {
      src: '/assets/js/modernizr.custom.js'
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js'
    },
    {
      src: '/assets/bootstrap/js/bootstrap.js'
    },
    {
      src: '/assets/js/jquery.magnific-popup.js'
    },
    {
      src: '/assets/js/jquery.stellar.min.js'
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/gsap.min.js'
    },
    {
      src: '/assets/js/slick.js'
    },
    {
      src: '/assets/js/jquery.countdown.js'
    },
    {
      src: '/assets/js/wow.min.js'
    },
    {
      src: '/assets/js/glightbox.min.js'
    },
    {
      src: '/assets/js/ajaxchimp.min.js'
    },
    {
      src: '/assets/js/form-contact.js'
    }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/styles.css',
    '@/assets/css/responsive.css',
    '@/assets/css/section-video.css',
    '@/assets/css/product-list.css',
    '@/assets/css/login.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/commerce'},
    { src: '~/plugins/axios', ssr: false},
    { src: "~/plugins/crisp", mode: "client" },
    { src: '~/plugins/nuxt-leaflet', mode: 'client', ssr: false },
    { src: '~/plugins/PhoneNumber', mode: 'client', ssr: false },
    { src: '~/plugins/LaravelEcho', mode: 'client', ssr: false},
    { src: '~/plugins/sweetalert', mode: 'client', ssr: false},
    { src: "~/plugins/contentful", mode: 'client', ssr: false},
    { src: "~/plugins/posts" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/svg',
    '@nuxtjs/device',
    '@nuxtjs/moment',
    '@nuxtjs/markdownit',
    '@nuxt/content',
    '@nuxtjs/style-resources'
  ],

  device: {
    refreshOnResize: true
  },

  styleResources: {
    scss: [
    '~assets/scss/_variables.scss',
    '~assets/scss/_login.scss'
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit'
    ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.NUXT_ENV_BASE_URL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
   // workbox
   workbox: {
    workboxOptions: {
      skipWaiting: true
    },
    // offline: true,
    // offlineStrategy: 'NetworkFirst',
    // offlinePage: null,
    // offlineAssets: [],
    runtimeCaching: [
    {
      urlPattern: '/assets/css/.*',
      handler: 'cacheFirst',
      method: 'GET',
      strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
    },
    {
      urlPattern: '/assets/fonts/.*',
      handler: 'cacheFirst',
      method: 'GET',
      strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
    },
    {
      urlPattern: '/assets/img/.*',
      method: 'GET',
      strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
    },
    {
      urlPattern: '/assets/js/.*',
      method: 'GET',
      strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
    },
    {
      urlPattern: '/assets/scss/.*',
      method: 'GET',
      strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
    }
    ]
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'Toko.Kelontong - Online',
      author: 'PPKC',
      icon: true,
      canonical: 'https://toko-kelontong.vercel.app/',
      description: 'Belanja Grosir Mudah, Murah Dengan Kualitas Terbaik',
      keywords: 'Toko Kelontong Online',
      ogUrl: 'https://toko-kelontong.vercel.app/',
      ogType: 'website',
      ogSiteName: 'Toko.Kelontong - Online',
      ogTitle: 'Toko.Kelontong - Online',
      ogImage: '512.png',
      ogImageWidth: '600',
      ogImageHeight: '400'
    },
    manifest: {
      lang: 'en',
      name: 'Toko.Kelontong - Online',
      short_name: 'Toko.Kelontong',
      description : "Toko.Kelontong - Online",
      start_url: '/',
      lang: 'en',
      display: 'standalone',
      theme_color: '#12b07f',
      background_color: '#12b07f',
      icons: [
{
        "src": "/icon-48x48.png",
        "sizes": "48x48",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-72x72.png",
        "sizes": "72x72",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-96x96.png",
        "sizes": "96x96",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-128x128.png",
        "sizes": "128x128",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-144x144.png",
        "sizes": "144x144",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-152x152.png",
        "sizes": "152x152",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable any"
      }
      ]
    },
  },
  robots: {
    UserAgent: '*',
    Disallow: '/'
  },
  moment: {
    timezone: true,
    defaultTimezone: 'Asias/Jakarta',
    locales: ['id']
  },
  axios: {
    // baseURL: 'https://app.evoush.com/api'
    baseUrl: process.env.NUXT_ENV_BASE_URL,
    proxy: false
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
}
