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
        <div data-hint={{category.name}}>
          <i class="icon {{category.icon}}"></i>
        </div>
<!--        <span>{{ category.name }}</span>-->

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
            <div class="dropdown-subitem-content">
              <i class="icon"></i>
              <span>{{ study.name }}</span>
            </div>

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
      height: 38px;
      align-items: center;
      //background-color: #cb5248;
      //color: white;
      padding: 8px 12px;
      cursor: pointer;
      //border-bottom: 1px solid #a9443a;

      .icon {
        display: flex;
        width: 28px;
        height: 28px;
        border: 1px solid black;

        &:hover {
          background-color: #f2f2f2;
        }
      }

      span {
        display: block;
      }

      .subcategory-list {
        position: absolute;
        top: 0;
        left: 100%;
        background-color: #fff;
        min-width: 180px;
        list-style: none;
        padding: 0;
        margin: 0;
        z-index: 1000;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

        .dropdown-subitem {
          padding: 6px 0px;
          align-items: center;
          height: 40px;
          cursor: pointer;
          //border-bottom: 1px solid #944a3a;

          .dropdown-subitem-content {
            display: flex;
            align-items: center;
            gap: 5px;
          }

          &:hover {
            background-color: #f2f2f2;
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
