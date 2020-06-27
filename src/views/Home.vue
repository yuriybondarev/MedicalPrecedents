<template>
  <div 
    id="home-view-wrapper"
    class="basic-wrapper"
  >
    <h1>
      <fa-icon icon="book-medical"/>
    </h1>
    <div id="documentation-wrapper">
      <DocumentationSection
        v-for="(document, index) in documentation"
        :key="index"
        :header="document.header"
        :description="document.description"
        :inputs="document.inputs"
      />
    </div>
  </div>
</template>

<script>
  import DocumentationSection from '../components/DocumentationSection';
  import documentation from '../store/static/documentation';

  export default {
    components: {
      DocumentationSection
    },
    data() {
      return {
        documentation
      };
    }
  };
</script>

<style>
  h1 {
    font-size: 1.6em;
    text-align: center;
    padding-bottom: 10px;
    margin-bottom: 22px;
    border-bottom: #2f3439 3px solid;
  }
</style>