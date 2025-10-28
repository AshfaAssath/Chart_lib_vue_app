<template>
  <div class="dropdown-container">
    <ul class="category-list">
      <li
          v-for="category in props.config"
          :key="category.id"
          class="dropdown-item"
          @mouseenter="activeCategory = category.id"
          @mouseleave="activeCategory = null"
      >
        <span>{{ category.name }}</span>

        <!-- Subcategory dropdown -->
        <ul
            v-if="activeCategory === category.id"
            class="subcategory-list"
        >
          <li
              v-for="study in category.subcategories"
              :key="study.id"
              class="dropdown-subitem"
              @click="selectStudy(study)"
          >
            <span>{{ study.name }}</span>

          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

  // Define props
  const props = defineProps({
    config: {
      type: Object,
      required: true
    }
  })

// Define Data
const activeCategory = ref(null);
const activeSubcategory = ref(null);

const emit = defineEmits(['lineStudyClicked']);

function selectStudy(study) {
  emit('lineStudyClicked', study);
}

</script>

<style lang="scss">
.dropdown-container {
  position: relative;
  //width: 100%;

  .category-list {
    list-style: none;
    margin: 0;
    padding: 0;

    .dropdown-item {
      position: relative;
      background-color: #cb5248;
      color: white;
      padding: 8px 12px;
      cursor: pointer;
      border-bottom: 1px solid #a9443a;

      &:hover {
        background-color: #a9443a;
      }

      span {
        display: block;
      }

      .subcategory-list {
        position: absolute;
        top: 0;
        left: 100%;
        background-color: #b5624e;
        min-width: 180px;
        list-style: none;
        padding: 0;
        margin: 0;
        z-index: 1000;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

        .dropdown-subitem {
          padding: 8px 12px;
          color: white;
          cursor: pointer;
          border-bottom: 1px solid #944a3a;

          &:hover {
            background-color: #944a3a;
          }

          span {
            display: block;
          }
        }
      }
    }
  }
}
</style>
