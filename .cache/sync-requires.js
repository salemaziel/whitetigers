const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/pc/testing-code/sportz-whitetigers-deansgenerator/white-tigers/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/pc/testing-code/sportz-whitetigers-deansgenerator/white-tigers/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/pc/testing-code/sportz-whitetigers-deansgenerator/white-tigers/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/pc/testing-code/sportz-whitetigers-deansgenerator/white-tigers/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/pc/testing-code/sportz-whitetigers-deansgenerator/white-tigers/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/pc/testing-code/sportz-whitetigers-deansgenerator/white-tigers/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/pc/testing-code/sportz-whitetigers-deansgenerator/white-tigers/src/pages/index.js"))),
  "component---src-pages-previousmatches-js": hot(preferDefault(require("/home/pc/testing-code/sportz-whitetigers-deansgenerator/white-tigers/src/pages/previousmatches.js"))),
  "component---src-pages-team-js": hot(preferDefault(require("/home/pc/testing-code/sportz-whitetigers-deansgenerator/white-tigers/src/pages/team.js"))),
  "component---src-pages-upcomingmatches-js": hot(preferDefault(require("/home/pc/testing-code/sportz-whitetigers-deansgenerator/white-tigers/src/pages/upcomingmatches.js")))
}

