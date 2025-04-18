module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          '@components': './app/components',
          '@store': './app/store',
          '@interfaces': './app/interfaces',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
}
