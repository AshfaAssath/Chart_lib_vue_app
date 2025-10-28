<template>
  <div class="indicator-list">
    <h4>Available Indicators</h4>
    <ul>
      <li v-for="indicator in Indicators" :key="indicator.id">
        {{ indicator.description }}
      </li>
    </ul>
  </div>
</template>

<script>
import Indicators from '../assets/chart-indicators.json';
import { ref, computed } from 'vue';


</script>

<style scoped>
.indicator-list {
  padding: 10px;
}
</style>
