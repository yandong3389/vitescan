<template>
  <div class="x-bar">
    <div :id="id"
    :option="option" class="chart-div" style="" ></div>
  </div>
</template>
<script>
import HighCharts from 'highcharts'
export default {
  // 验证类型
  props: {
    id: {
      type: String
    },
    option: {
      type: Object
    }
  },
  watch: {
    option () {
         HighCharts.chart(this.id,this.option);
    }
  },
  mounted() {
        // HighCharts.chart(this.id,this.option)
  }
}
</script>
<style scoped>
.chart-div{
min-width: 255px; 
height: 200px;
}
</style>
