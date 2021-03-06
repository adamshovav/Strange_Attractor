// Use DefinePlugin (Webpack) or loose-envify (Browserify)
// together with Uglify to strip the dev branch in prod build.
if (process.env.RAILS_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
