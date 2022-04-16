import theme from '@nuxt/content-theme-docs'

export default theme({
  ssr: false,
  target: 'static',
  docs: {
    primaryColor: '#1da1f2'
  },

  buildModules: ['@nuxtclub/feathericons'],
})
