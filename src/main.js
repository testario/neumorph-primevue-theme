import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import DialogService from 'primevue/dialogservice'
import ConfirmationService from 'primevue/confirmationservice'
import 'primeicons/primeicons.css'
import NeumorpthPreset from './theme/neumorph.js'
import './assets/app.css'
import App from './App.vue'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: NeumorpthPreset,
    options: {
      prefix: 'p',
      darkModeSelector: '.dark-mode',
      cssLayer: {
        name: 'primevue',
        order: 'theme, base, primevue',
      },
    },
  },
  ripple: true,
})
app.use(ToastService)
app.use(DialogService)
app.use(ConfirmationService)

app.mount('#app')
