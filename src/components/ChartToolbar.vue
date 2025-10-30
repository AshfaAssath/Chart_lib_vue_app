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
    <button class="symbol-search-component" v-if="!config.isHideSymbolSearch" @click="openSymbolSearch">
      <FontAwesomeIcon :icon="faMagnifyingGlass" />
      <span>1010</span>
    </button>
    <div v-if="!config.isHideChartStyle">Chart styles</div>
    <div v-if="!config.isHideGeneralChartDropdown">General Charts</div>
    <div v-if="!config.isHideMovingAverageDropdown">Moving Averages</div>
    <div v-if="!config.isHideIndicatorSettingsBtn">Indicators</div>
  </div>

</template>

<script setup>
import movingAverages from '../assets/chart-moving-averages.json';
import { ref, computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

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
  function openIndicators () {
    // Example: emit an event or call a function
    // emit('open-indicators-modal');
    console.log('Indicators modal opened');
  }

  function openSymbolSearch () {
    console.log('Opening Symbol Search');
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
    gap: 6px;
    padding: 0 5px;
    background-color: #fff;

    div {
      //border: 2px solid black;
      border-radius: 4px;
      padding: 2px;
      margin: 1px 0px;

      &:hover {
        background-color: #f2f2f2;
      }
    }

    .symbol-search-component {
      display: flex;
      gap: 5px;
      padding: 2px 8px;
      background-color: #fff;
      align-items: center;
      cursor: pointer;
      border: none;
      border-radius: 4px;

      &:hover {
        background-color: #f2f2f2;
      }
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
          //background-color: #B5624E;
        }
      }

      .chart-indicators {
        height: 100%;
        padding: 2px;
        width: 200px;

        button {
          height: calc(100% - 4px);
          border-radius: 4px;
          //background-color: #B5624E;
          width: 100%;
        }
      }
    }

    .chart-toolbar-right {
      float: right;
    }
  }
</style>
