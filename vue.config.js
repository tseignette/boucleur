/* eslint-disable */
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const path = require('path')

module.exports = {
  productionSourceMap: false,
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ? '/boucleur/' : '',
  pwa: {
    msTileColor: '#F7F8F9',
    name: 'Boucleur',
    themeColor: '#5755D8',
    manifestOptions: {
      background_color: '#F7F8F9'
    }
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') {
      return
    }

    return {
      plugins: [
        new PrerenderSpaPlugin(path.resolve(__dirname, 'docs'), [
          '/',
          '/player'
        ])
      ]
    }
  }
}
