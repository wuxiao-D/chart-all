
## install
```js
npm install chart-all

// or 

yarn add chart-all

```


## Demo

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
```

## vue
```js
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