module.exports = {
  presets: ["@babel/env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    [
      "import",

      {
        libraryName: "@material-ui/core",
        libraryDirectory: "",
        camel2DashComponentName: false,
      },
      "@material-ui/core",
    ],
    [
      "import",
      {
        libraryName: "@material-ui/styles",
        libraryDirectory: "",
        camel2DashComponentName: false,
      },
      "@material-ui/styles",
    ],
  ],
};
