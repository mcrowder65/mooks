require("jest-dom/extend-expect");
require("babel-polyfill");
require("react-testing-library/cleanup-after-each");
const { configure, toMatchVisualSnapshot } = require("sosia");
const { PuppeteerBrowserTarget } = require("sosia-puppeteer");
const { MarkdownSource } = require("sosia-markdown");

expect.extend({ toMatchVisualSnapshot });
configure({
  targets: {
    "chrome-desktop": new PuppeteerBrowserTarget({
      width: 1024,
      height: 768,
    }),
  },
  sources: {
    documentation: new MarkdownSource(),
  },
});
