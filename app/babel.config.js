module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      [
  'babel-preset-expo',
  {
    web: { disableImportExportTransform: false }
     },
   ],
    ],
    plugins: ['react-native-reanimated/plugin'],
  };
};
