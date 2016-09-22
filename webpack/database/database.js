const members = require('./members')
const overview = require('./clothes/overview')
const series = require('./clothes/series')

module.exports = {
  members: members,
  clothes: {
    overview: overview,
    series: series
  }
}