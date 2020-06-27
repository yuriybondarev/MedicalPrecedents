<template>
  <div class="documentation-section">
    <h2>{{ header }}</h2>
    <div>
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
    }
  };
</script>

<style>
  .documentation-section {
    background-color: #2f3439;
    border-radius: 4px;
  }

  .documentation-section:not(:last-child) {
    margin-bottom: 20px;
  }

  .documentation-section h2 {
    background-color: #ee7147;
    padding: 10px;
    border-radius: 4px 4px 0 0;
    text-align: center;
    text-transform: uppercase;
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