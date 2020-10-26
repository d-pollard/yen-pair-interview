module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.ENABLE_PURGECSS === 'true',
    content: ['./src/**/*.tsx', './public/index.html', './src/**/*.ts'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
