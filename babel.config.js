module.exports = function(api) {
    api.cache(true);
    return {
      presets: [
        'babel-preset-expo',
        '@babel/preset-env',
        '@babel/preset-typescript'
      ],
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        [
          'module:react-native-dotenv',
          {
            moduleName: '@env',
            path: '.env',
            safe: false,
            allowUndefined: true,
          },
        ]
      ]
    };
  };