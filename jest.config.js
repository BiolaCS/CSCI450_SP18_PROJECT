module.exports = {
    "haste": {
      "defaultPlatform": "ios",
      "platforms": [
        "android",
        "ios",
        "native"
      ],
      "providesModuleNodeModules": [
        "react-native"
      ]
    },
    "moduleNameMapper": {
      "^React$": "<rootDir>/node_modules/react",
      "^react$": "<rootDir>/node_modules/react",
      "^react-native$": "<rootDir>/node_modules/react-native",
      "^react-native/(.*)$": "<rootDir>/node_modules/react-native/$1"
    },
    "modulePathIgnorePatterns": [
      "<rootDir>/node_modules/react-native/Libraries/react-native/"
    ],
    "transform": {
      "^.+\\.js$": "babel-jest",
      "^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp|ttf|otf|m4v|mov|mp4|mpeg|mpg|webm|aac|aiff|caf|m4a|mp3|wav|html|pdf|obj)$": "<rootDir>/node_modules/jest-expo/src/assetFileTransformer.js"
    },
    "transformIgnorePatterns": [
      "node_modules/(?!((jest-)?react-native|react-clone-referenced-element|expo(nent)?|@expo(nent)?/.*|react-navigation|sentry-expo|native-base-shoutem-theme|native-base))"
    ],
    "setupFiles": [
      "<rootDir>/node_modules/react-native/jest/setup.js",
      "<rootDir>/node_modules/jest-expo/src/setup.js"
    ],
    "testEnvironment": "node"
};
