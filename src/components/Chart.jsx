const React = require('react')
const Highcharts = require('highcharts')
if (!Highcharts) {
  global.highcharts = require('react-highcharts/src/fakeHighcharts.js')
}
const ReactHighcharts = require('react-highcharts')

const config = {
  chart: {
    backgroundColor: '#efefef',
    type: 'line'
  },
  title: {
    text: 'Performance Score By Match'
  },
  xAxis: {
    categories: ["8.11.15", "8.16.15", "8.22.15", "8.30.15", "9.12.15", "10.4.15", "10.17.15", "10.24.15", "10.31.15", "11.8.15", "11.21.15", "11.29.15", "12.5.15", "12.12.15", "12.19.15", "1.17.16", "1.24.16", "1.27.16", "1.30.16", "2.27.16", "3.5.16", "3.12.16", "3.20.16", "5.1.16", "5.8.16"]
  },
  series: [{
    name: 'attacking',
    data: [-4.98, 1.15, 23.07, 7.42, 2.92, -0.87, 30.18, 23.88, 44.03, 12.14, 11.48, -2.57, 1.24, 23.12, -3, 15, 45, 10.71, 4.03, 26.29, 0, 2.54, 15.6, 4.03, 4.39]
  }, {
    name: 'possesion',
    data: [100, 1.15, 23.07, 7.42, 2.92, -0.87, 30.18, 23.88, 44.03, 12.14, 11.48, -2.57, 1.24, 23.12, -3, 15, 45, 10.71, 4.03, 26.29, 0, 2.54, 15.6, 4.03, 4.39]
  }
  ]
}

const Chart = React.createClass({
  render () {
    if (!Highcharts) {
      global.highcharts = require('react-highcharts/src/fakeHighcharts.js')
    }
    return (
      <ReactHighcharts config={config} />
    )
  }
})

export default Chart
