<template>
  <div id="app">
    <div v-if="!config.chartToolbar.props.isHideToolbar" id="chart-toolbar">
      <ChartToolbar :config="config.chartToolbar.props"/>
    </div>
    <div id="chart-container">
      <div v-if="!config.chartLineStudyPanel.props.isHideLineStudyPanel" id="chart-line-study-panel">
        <ChartLineStudies :config="config.chartLineStudyPanel.props.lineStudiesList" @lineStudyClicked="onLineStudyClicked"/>
      </div>
      <div id="chart-canvas-container">
        <div id="chart-canvas">
          <ChartLegend :chartData="dataObject" :config="config.chartLegend.props" :onHandleCallBckFunc="callbackfunc"/>
        </div>
        <div v-if="!config.bottomPanel.props.isHideBottomPanel" id="chart-bottom-panel">
<!--          <ChartBottomPanel :config="config.bottomPanel.props" />-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ChartLineStudies from './components/ChartLineStudies.vue';
import ChartToolbar from './components/ChartToolbar.vue';
import ChartLegend from './components/ChartLegend.vue';
import ChartBottomPanel from "./components/ChartBottomPanel.vue";
import { reactive, inject } from 'vue';

const props = defineProps({
  dataObject: {
    type: Object,
    required: true
  },
  config: {
    type: Object,
    required: true
  }
});

const uiAdapter = inject('UIAdapter');

const config = reactive(JSON.parse(JSON.stringify(props.config)));
const dataObject = reactive(JSON.parse(JSON.stringify(props.dataObject)));

// Update the props from child components
function callbackfunc(type, key, value) {
  if (type === 'Legend') {
    config.chartLegend.props[key] = value;
  }
}

function onLineStudyClicked (study) {
  if (uiAdapter) {
    const message = {
      data: {
        action: 'ADD_LINE_STUDY',
        value: {
          type: 'LINESTUDY',
          subAction: 'ADD',
          studyKey: study.id,
        },
      },
    };

    uiAdapter.handleUIChartActions(message);
  }
}

</script>

<style lang="scss"></style>
