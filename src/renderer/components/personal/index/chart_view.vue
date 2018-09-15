<template>
    <div>
        <div>
            <mu-auto-complete label='代码' :maxSearchResults='10' labelFloat :dataSource='block' filter='caseInsensitiveFilter' @change='info'/><br/>
            <div id='main'/>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts'

export default {
  data () {
    return {
      title: '000001'
    }
  },
  methods: {
    drawline (id) {
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
    }},
  mounted () {
    this.$nextTick(function () {
      this.drawline('main')
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
</style>
