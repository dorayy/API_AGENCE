/* eslint-disable no-param-reassign */
const path = require("path");
const { alias } = require("react-app-rewire-alias");

module.exports = {
  webpack: (config, env) => {
    alias({
      "~/*": "src",
      "@pages": "src/pages",
      "@components": "src/components",
      "@atoms": "src/components/atoms",
      "@services": "src/services",
      "@assets": "src/assets",
      "@utils": "src/utils",
    })(config);

    return config;
  },

  paths: (paths) => {
    // reading the build path from the selected .env file
    const buildPath = process.env.REACT_APP_BUILD_PATH;
    // defining "build" as a fallback path
    paths.appBuild = path.resolve(__dirname, buildPath ? buildPath : "build-dev");

    return paths;
  },
};
