<template>
  <div>
    <div v-if="!props.config.isHideLegend" class="chart-legend-description ltr pointer-events-none" style="width: 85%">
      <div class="symbol-details">
        <div v-if="!props.config.isHideCompanyDetails"  class="company-details">
          <div v-if="!props.config.isHideSymbol" ><span>{{symbol}}</span></div>
          <div class="stx-panel-symbol">
            <span v-if="!props.config.isHideExchange">{{exgDetails}}</span>
            <span v-if="!props.config.isHideCompanyFullName" class="full-company-name">{{companyName}}</span>
          </div>
        </div>
        <ul v-if="!props.config.isHideOHLCValues" class="chart-ohlc">
          <li class="chart-ohlc-field">
            <span class="chart-ohlc-field-label">O:</span>
            <span class="chart-ohlc-field-value">{{pointOpen}}</span>
          </li>
          <li class="chart-ohlc-field">
            <span class="chart-ohlc-field-label">H:</span>
            <span class="chart-ohlc-field-value">{{pointHigh}}</span>
          </li>
          <li class="chart-ohlc-field">
            <span class="chart-ohlc-field-label">L:</span>
            <span class="chart-ohlc-field-value">{{pointLow}}</span>
          </li>
          <li class="chart-ohlc-field">
            <span class="chart-ohlc-field-label">C:</span>
            <span class="chart-ohlc-field-value" >{{pointClose}}</span>
          </li>
        </ul>
      </div>
      <div class="ltp-and-date">
        <div v-if="!props.config.isHideLTP" class="chart-sym-ltp">{{symbolLTP}}</div>
        <li v-if="!props.config.isHideDate" class="legend-time">
          <span class="chart-study-des-font-color">{{pointDate}}</span>
        </li>
      </div>
    </div>
    <button @click="callbackfunc1">Symbol</button>
    <button @click="callbackfunc2">OHLC values</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  chartData: {
    type: Object,
    required: true
  },
  config: {
    type: Object,
    required: true
  },
  onHandleCallBckFunc: {
    type: Function,
    required: true
  }
})

// Define computed property
const selectedStudy = computed(() => {
  return movingAverages.value.find(study => study.id === selectedStudyId.value);
});

// Computed properties
const symbol = computed(() => props.chartData.symbol);
const exgDetails = computed(() => props.chartData.exgDetails);
const companyName = computed(() => props.chartData.companyName);
const pointOpen = computed(() => props.chartData.pointOpen);
const pointHigh = computed(() => props.chartData.pointHigh);
const pointLow = computed(() => props.chartData.pointLow);
const pointClose = computed(() => props.chartData.pointClose);
const ohlcColorCSS = computed(() => props.chartData.ohlcColorCSS);
const symbolLTP = computed(() => props.chartData.symbolLTP);
const pointDate = computed(() => props.chartData.pointDate);

function callbackfunc1(){
  props.onHandleCallBckFunc('Legend', 'isHideSymbol', !props.config.isHideSymbol);
}
function callbackfunc2(){
  props.onHandleCallBckFunc('Legend', 'isHideOHLCValues', !props.config.isHideOHLCValues);
}
</script>


<style lang="scss">
  .chart-legend-description {
    pointer-events: none;
    width: 85%;
    display: flex;
    flex-direction: column;

    .symbol-details {
      display: flex;
      gap: 8px;

      .company-details {
        display: flex;
        align-items: center;
        gap: 2px;

        .stx-panel-symbol {
          display: flex;
          gap: 4px;
        }
      }

      .chart-ohlc {
        display: flex;
        list-style: none;
        gap: 8px;
        //background: #71905E;
        padding-inline-start: 5px;
        padding: 4px;
        border: 2px solid black;
        border-radius: 2px;

        .chart-ohlc-field-label {
          font-weight: bolder;
        }

        .chart-ohlc-field-value {
          //color: red
        }
      }
    }
    .ltp-and-date {
      display: flex;
      gap: 4px;
      flex-direction: row;

      div, li {
        padding: 2px;
        border: 2px solid black;
      }

      li {
        list-style: none;
      }
    }
  }

  button {
    pointer-events: auto;
  }
</style>