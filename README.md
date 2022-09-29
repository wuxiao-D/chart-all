## Dependencies
```js

echarts@^4.9.0
echarts-gl@^1.1.2
echarts-liquidfill@^2.0.6
zrender@^4.3.1

```

## Install
```js
npm install chart-all

// or 

yarn add chart-all

```


## Demo

```js
<template>
  <div id="testLine" style="width: 50%; height: 300px;"></div>
</template>

<script>
import { onMounted } from "vue";
import chartClass from "chart-all";
export default {
  name: "about",
  setup() {
    onMounted(() => {

      const { chart } = new chartClass('testLine')

      chart.setOption({
          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [
              {
                  data: [150, 230, 224, 218, 135, 147, 260],
                  type: 'line'
              }
          ]
      })

    })
  }
}
</script>
```

## or
```js
import chartClass from 'chart-all'

export default {
  line1: (id, callBack) => {

      const { chart } = new chartClass(id, callBack);

      chart.setOption({
          series: [{
              type: 'liquidFill',
              data: [0.5, 0.4, 0.3],
              color: ['red', '#0f0', 'rgb(0, 0, 255)'],
              itemStyle: {
                  opacity: 0.6
              },
              emphasis: {
                  itemStyle: {
                    opacity: 0.9
                  }
              }
          }]
      })
  },
}

/////////////////////////////////////////////////////////////

<template>
  <div id="testLine" style="width: 50%; height: 300px;"></div>
</template>

<script>
import { onMounted } from "vue";
import myChart from "../utils/myChart.js";
export default {
  name: "about",
  setup() {
    onMounted(() => {
      myChart.line1('testLine', (e) => {
        console.log('点我了', e)
      });
    })
  }
}
</script>

```