<template>
  <div class="documentation-section">
    <h2 @click="isOpen = !isOpen">
      <fa-icon :icon="isOpen ? 'minus-circle' : 'plus-circle'"/>
      {{ header }}
    </h2>
    <div v-show="isOpen">
      <p>{{ description }}</p>
      <ul>
        <li
          v-for="(input, index) in inputs"
          :key="index"
        >
          {{ input }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      header: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      inputs: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        isOpen: false
      };
    }
  };
</script>

<style>
  .documentation-section {
    background-color: #2f3439;
  }

  .documentation-section:not(:last-child) {
    margin-bottom: 20px;
  }

  .documentation-section, .documentation-section h2 {
    border-radius: 4px;
  }

  .documentation-section h2 {
    cursor: pointer;
    position: sticky;
    top: 0;
    background-color: #ee7147;
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
  }

  .documentation-section h2 svg {
    margin-right: 1px;
  }

  .documentation-section > div {
    padding: 16px;
    line-height: 1.5;
  }

  .documentation-section ul {
    margin-top: 10px;
    font-style: italic;
  }
</style>