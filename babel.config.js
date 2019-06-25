const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "16",
        firefox: "50",
        chrome: "39",
        safari: "9.3",
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };