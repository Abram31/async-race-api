// eslint-disable-next-line no-undef
module.exports = {
  transform: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/fileTransformer.js",
    "\\.[jt]sx?$": "babel-jest",
    // "\\.css$": "some-css-transformer",
  },
  moduleNameMapper: {
    "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  transformIgnorePatterns: ["/node_modules/jest-runtime/build/index.js"],

  testEnvironment: "jsdom",
};
