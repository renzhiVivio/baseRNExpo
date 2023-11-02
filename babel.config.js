process.env.MATERIAL = "native";

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      [
        "transform-inline-environment-variables",
        // NOTE: include is optional, you can leave this part out
        {
          include: ["MATERIAL", "EXPO_ROUTER_APP_ROOT"]
        }
      ],
      "react-native-reanimated/plugin",
      'expo-router/babel',
    ]
  };
};
