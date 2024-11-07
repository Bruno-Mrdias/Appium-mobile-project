const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();


/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      app: process.env.APP || '/Users/Bruno/Documents/mobile/app-release.apk', // Caminho para o APK
      path: '/wd/hub',
      port: 4723,
      desiredCapabilities: {
        platformName: process.env.PLATFORM || "Android",
        deviceName: process.env.DEVICE, // Nome do dispositivo ou emulador
        appPackage: process.env.PLATFORM == "Android" ? process.env.PACKAGE : "", // Substitua pelo pacote do seu app
        appActivity: process.env.PLATFORM == "Android" ? process.env.ACTIVITY : "", // Atividade principal do app
        automationName: 'UiAutomator2' // Defina o driver instalado no Appium v2
      }
    }
  },
  include: {
    I: './steps_file.js',

    login_page: "./pages/login_page.js",

    home_page: "./pages/home_page.js",

    students_page: "./pages/students_page.js",
  },
  mocha: {
  },
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js'],
  },
    name: 'Android'
}