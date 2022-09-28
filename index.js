import * as echarts from "echarts";
import 'echarts-gl'
import 'echarts-liquidfill'

export default class chart {
    constructor(props, callBack) {
        console.log(props, callBack)

        const myChart = document.getElementById(props)
        myChart.removeAttribute('_echarts_instance_')
        this.chart = echarts.init(myChart);

        window.addEventListener('resize', () => {
            this.chart.resize();
        })

        this.chart.off('click');
        this.chart.on('click', param => {
            callBack && callBack(param);
        })
    }

}