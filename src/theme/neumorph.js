import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

const NeumorpthPreset = definePreset(Aura, {
  primitive: {
    green: {
      50:  '#f0faf5',
      100: '#d4f0e2',
      200: '#a9e1c5',
      300: '#7ecba1',
      400: '#5cb885',
      500: '#3fa569',
      600: '#2e7a4e',
      700: '#1f5235',
      800: '#112c1c',
      900: '#080f09',
      950: '#040807',
    },
    purple: {
      50:  '#f5f3fd',
      100: '#e5e0f8',
      200: '#cac2f1',
      300: '#b8a9e8',
      400: '#a08fd8',
      500: '#8875c8',
      600: '#6f5baf',
      700: '#4f3f80',
      800: '#2f2552',
      900: '#120e20',
      950: '#090710',
    },
  },

  semantic: {
    primary: {
      50:  '{green.50}',
      100: '{green.100}',
      200: '{green.200}',
      300: '{green.300}',
      400: '{green.400}',
      500: '{green.300}',
      600: '{green.500}',
      700: '{green.600}',
      800: '{green.700}',
      900: '{green.800}',
      950: '{green.900}',
    },

    colorScheme: {
      light: {
        primary: {
          color:         '#7ECBA1',
          contrastColor: '#ffffff',
          hoverColor:    '#6ab88d',
          activeColor:   '#56a578',
        },
        surface: {
          0:   '#ffffff',
          50:  '#f8f8f8',
          100: '#f0f0f0',
          200: '#eaeaea',
          300: '#e4e4e4',
          400: '#dcdcdc',
          500: '#d0d0d0',
          600: '#b8b8b8',
          700: '#8a8a8a',
          800: '#5a5a5a',
          900: '#3d3d3d',
          950: '#2a2a2a',
        },
        highlight: {
          background:      '#7ECBA1',
          focusBackground: '#6ab88d',
          color:           '#ffffff',
          focusColor:      '#ffffff',
        },
      },
    },
  },

  components: {
    button: {
      root: {
        borderRadius:    '24px',
        paddingX:        '1.5rem',
        paddingY:        '0.75rem',
        fontWeight:      '600',
        fontSize:        '0.875rem',
      },
    },
    inputtext: {
      root: {
        borderRadius: '14px',
        paddingX:     '1rem',
        paddingY:     '0.75rem',
        fontSize:     '0.875rem',
        background:   '#e0e0e0',
        borderColor:  'transparent',
        color:        '#3d3d3d',
        placeholderColor: '#8a8a8a',
      },
    },
    textarea: {
      root: {
        borderRadius: '14px',
        paddingX:     '1rem',
        paddingY:     '0.875rem',
        fontSize:     '0.875rem',
        background:   '#e0e0e0',
        borderColor:  'transparent',
        color:        '#3d3d3d',
      },
    },
    select: {
      root: {
        borderRadius: '14px',
        paddingX:     '1rem',
        paddingY:     '0.75rem',
        fontSize:     '0.875rem',
        background:   '#e0e0e0',
        borderColor:  'transparent',
        color:        '#3d3d3d',
      },
    },
    checkbox: {
      root: {
        borderRadius: '8px',
        width:        '24px',
        height:       '24px',
        borderColor:  'transparent',
        background:   '#e0e0e0',
      },
      icon: {
        color: '#ffffff',
      },
    },
    radiobutton: {
      root: {
        borderRadius: '12px',
        width:        '24px',
        height:       '24px',
        borderColor:  'transparent',
        background:   '#e0e0e0',
      },
    },
    slider: {
      track: {
        background:   '#e0e0e0',
        borderRadius: '4px',
        height:       '8px',
      },
      range: {
        background: '#7ECBA1',
      },
      handle: {
        background:   '#e4e4e4',
        borderColor:  'transparent',
        borderRadius: '10px',
        width:        '20px',
        height:       '20px',
      },
    },
    rating: {
      icon: {
        color:       '#dcdcdc',
        activeColor: '#7ECBA1',
      },
    },
    card: {
      root: {
        borderRadius: '20px',
        background:   '#e4e4e4',
        color:        '#3d3d3d',
        padding:      '2rem',
      },
    },
    panel: {
      root: {
        borderRadius: '20px',
        background:   '#e4e4e4',
        color:        '#3d3d3d',
        borderColor:  'transparent',
      },
    },
    tag: {
      root: {
        borderRadius: '12px',
        paddingX:     '0.75rem',
        paddingY:     '0.25rem',
        fontSize:     '0.75rem',
        fontWeight:   '600',
      },
    },
    toggleswitch: {
      root: {
        borderRadius: '24px',
      },
      handle: {
        borderRadius: '50%',
      },
    },
    tabs: {
      tablist: {
        background:  '#e4e4e4',
        borderColor: 'transparent',
      },
      tab: {
        borderRadius: '14px',
        color:        '#8a8a8a',
        activeColor:  '#3d3d3d',
      },
    },
    password: {
      root: {
        borderRadius: '14px',
      },
    },
    datepicker: {
      root: {
        borderRadius: '14px',
      },
    },
  },
})

export default NeumorpthPreset
