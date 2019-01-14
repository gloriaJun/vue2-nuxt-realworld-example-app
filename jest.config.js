module.exports = {
  moduleFileExtensions: [
    "js",
    "json",
    // tell Jest to handle `*.vue` files
    "vue"
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "vue-jest",
    // process js with `babel-jest`
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  // support the same @ -> src alias mapping in source code
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1"
  },
  // serializer for snapshots
  snapshotSerializers: [
    "jest-serializer-vue"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/components/**/*.{js,vue}",
    "!**/node_modules/**"
  ],
  coverageReporter: ["html", "text-summary"],
}
