import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'filmsy',

    themes: {
      filmsy: {
        dark: true,

        colors: {
          // Fondos
          background: '#0B2633',
          surface: '#123D4F',

          // Paleta principal
          primary: '#20D5D8',
          secondary: '#1797A7',

          // Otros colores
          accent: '#126377',

          // Colores personalizados
          darkBlue: '#123D4F',
          blue: '#126377',
          turquoise: '#1797A7',
          cyan: '#20D5D8',

          // Texto
          text: '#EAFBFC',

          // Estados
          success: '#20D5D8',
          warning: '#1797A7',
        },
      },
    },
  },
})