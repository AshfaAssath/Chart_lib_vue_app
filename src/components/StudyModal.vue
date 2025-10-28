<template>

  <VueFinalModal
      v-model="isVisible"
      :clickToClose="true"
      :escToClose="true"
      :content-style="{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1000'
  }">

  <div class="popup-inner">
      <h3>{{ study?.name }}</h3>
      <p>ID: {{ study?.id }}</p>
      <p v-if="study?.icon">Icon: {{ study.icon }}</p>
      <button @click="close">Close</button>
    </div>
  </VueFinalModal>
</template>

<script>
import { VueFinalModal } from 'vue-final-modal';

export default {
  name: 'StudyModal',
  components: {
    VueFinalModal
  },
  props: {
    study: {
      type: Object,
      required: false
    },
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped lang="scss">
.popup-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.popup-inner {
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
  max-width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
</style>
