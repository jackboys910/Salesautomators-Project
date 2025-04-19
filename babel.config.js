export default {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          '@components': './app/components',
          '@store': './app/store',
          '@constants': './app/constants',
          '@hooks': './app/hooks',
          '@interfaces': './app/interfaces',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
