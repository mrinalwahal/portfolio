import theme from '@nuxt/content-theme-docs'

export default theme({
 // target: 'static',
//  ssr: false,
  docs: {
    primaryColor: '#1da1f2'
  },
  //  UA-121324266-2,
  //  colorMode: 'dark',
/*   content: {
    liveEdit: false
  },
 */  /* i18n: {
    locales: () => [{
      code: 'sa',
      iso: 'sa_IN',
      file: 'sa_IN.js',
      name: 'Sanskrit'
    }, {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'en'
  },
   */
  buildModules: ['@nuxtclub/feathericons'],
})
