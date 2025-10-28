<template>
  <div class="chart-toolbar">
<!--    <div class="chart-toolbar-left">-->
<!--      <div class="chart-toolbar-dropdowns">-->
<!--        <select id="study-select" v-model="selectedStudyId">-->
<!--          <option disabled value="">Moving Averages</option>-->
<!--          <option v-for="study in movingAverages" :key="study.id" :value="study.id">-->
<!--            {{ study.displayName }}-->
<!--          </option>-->
<!--        </select>-->
<!--      </div>-->
<!--      <div class="chart-indicators">-->
<!--        <button @click="openIndicators">Indicators</button>-->
<!--      </div>-->
<!--      <div class="chart-indicators">-->
<!--        <button>Chart Elements</button>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="chart-toolbar-right">-->
<!--      <div class="chart-layout-options">-->
<!--      </div>-->
<!--    </div>-->
    <div v-if="!config.isHideSymbolSearch">Symbol Search</div>
    <div v-if="!config.isHideChartStyle">Chart styles</div>
    <div v-if="!config.isHideGeneralChartDropdown">General Charts</div>
    <div v-if="!config.isHideChartEvents">Events</div>
    <div v-if="!config.isHideMovingAverageDropdown">Moving Averages</div>
    <div v-if="!config.isHideIndicatorSettingsBtn">Indicators</div>
    <div v-if="!config.isHideFootprintDropDown">Volume Profile Chart</div>
    <div v-if="!config.isHideUnadjustedDropdown">Adjusted Data</div>
    <div v-if="!config.isHideChartElementsBtn">Chart Elements</div>
    <div v-if="!config.isHideChartTableBtn">Chart Table</div>
    <div v-if="!config.isHideVolumeByPriceBtn">Volume by Price</div>
    <div v-if="!config.isHideReplayChartBtn">Replay</div>
    <div v-if="!config.isHideCFBBtn">Custom Formula Builder</div>
    <div v-if="!config.isHideCompareSymbol">Compare Symbol</div>
  </div>

</template>

<script setup>
import movingAverages from '../assets/chart-moving-averages.json';
import { ref, computed } from 'vue';

// Define props
  const props = defineProps({
    config: {
      type: Object,
      required: true
    }
  })

  // Define Data
  const selectedStudyId = ref('');

  // Define methods
  function openIndicators() {
    // Example: emit an event or call a function
    // emit('open-indicators-modal');
    console.log('Indicators modal opened');
  }

  // Define computed property
  const selectedStudy = computed(() => {
    return movingAverages.value.find(study => study.id === selectedStudyId.value);
  });
</script>

<style lang="scss">
  .chart-toolbar {
    display: flex;
    flex-direction: row;
    gap: 3px;

    div {
      border: 2px solid black;
      padding: 2px;
    }


    .chart-toolbar-left {
      float: left;
      display: flex;
      flex-direction: row;

      .chart-toolbar-dropdowns {
        height: 100%;
        padding: 2px;
        width: 200px;

        select {
          height: calc(100% - 4px);
          border-radius: 4px;
          background-color: #B5624E;
        }
      }

      .chart-indicators {
        height: 100%;
        padding: 2px;
        width: 200px;

        button {
          height: calc(100% - 4px);
          border-radius: 4px;
          background-color: #B5624E;
          width: 100%;
        }
      }
    }

    .chart-toolbar-right {
      float: right;
    }
  }
</style>
