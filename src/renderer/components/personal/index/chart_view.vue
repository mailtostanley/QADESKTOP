<template>
    <div>
        <div>
            <mu-auto-complete label='代码' :maxSearchResults='10' labelFloat  @change='get_stock_day'/><br/>
            <div id='main'/>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts'
import axios from 'axios'
export default {
  data () {
    return {
      code: '000001',
      hq_data: []
    }
  },
  methods: {
    drawline (id) {
      console.log('draw')
      this.chart = echarts.init(document.getElementById(id))
      this.chart.setOption({
        title: {
          text: this.title
        },
        grid: {
          x: '5%',
          y: '15%',
          borderWidth: 1
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            // dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        xAxis: [
          {
            data: [],
            scale: true
          }
        ],
        yAxis: [
          {
            name: 'price',
            max: 'dataMax',
            min: 'dataMin'
          }
        ],
        legend: {
          data: [
            {
              name: 'market'
            }
          ],
          x: 'left',
          top: '5%'
        },
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 90,
            end: 100
          },
          {
            type: 'inside',
            realtime: true,
            start: 90,
            end: 100
          }
        ],
        series: [
          {
            name: 'market',
            type: 'candlestick',
            data: []
          }
        ]
      })
    },
    get_stock_day (code) {
      console.log(code)
      axios.get('http://localhost:8010/marketdata/stock/day?code=' + code)
        .then(response => {
          // console.log(response.data['result'])
          this.hq_data = response.data['result']

          var kline = []
          var ktime = []
          for (var i = 0; i < this.hq_data.length; i++) {
            var tempDay = []
            tempDay.push(parseFloat(this.hq_data[i]['open']))
            tempDay.push(parseFloat(this.hq_data[i]['close']))
            tempDay.push(parseFloat(this.hq_data[i]['low']))
            tempDay.push(parseFloat(this.hq_data[i]['high']))
            kline.push(tempDay)
            ktime.push(this.hq_data[i]['date'])
          }
          this.chart.setOption({
            title: {
              text: code
            },

            series: {
              name: 'market',
              type: 'candlestick',
              data: kline
            },
            xAxis: {
              data: ktime
            }
          })
        })
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.drawline('main')
      this.get_stock_day(this.code)
    })
  }
}
</script>

<style>
#main {
  position: relative;
  left: 0;
  margin-left: 0px;
  margin-bottom: 0px;
  width: 800px;
  height: 600px;
  border-radius: 10px;
}

.mu-text-field-input{
  color:white;
}
</style>
