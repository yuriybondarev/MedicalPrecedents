<template>
  <BaseFormFlex 
    id="send-excel-form"
    @submit.prevent="submit"
  >
    <input
      ref="fileInput"
      name="excel-file" 
      accept=".xls,.xlsx" 
      type="file" 
      @change="fileChanged"
    />
    <button>
      <fa-icon icon="arrow-right"/>
    </button>
  </BaseFormFlex>
</template>

<script>
  import BaseFormFlex from './BaseFormFlex';
  import XLSX from 'xlsx';
  import AJAX from '@/classes/ajax';

  export default {
    components: {
      BaseFormFlex
    },
    methods: {
      submit(event) {
        if (!this.$store.getters.isBannerActive) {
          const URL = 'post.php';
          AJAX.post(new FormData(event.target), URL);
        }
      },
      fileChanged() {
        const ALLOWED_FORMATS = ['xlsx', 'xls', 'ods'];

        let file = this.$refs.fileInput.files[0];
        let fileFormat = file.name.split('.').pop();

        if (ALLOWED_FORMATS.includes(fileFormat)) {
          let reader = new FileReader();

          reader.onload = (event) => {
            let workbook = XLSX.read(event.target.result, {type: 'array'});
            let worksheet = workbook.Sheets[workbook.SheetNames[0]];
            let parsedData = XLSX.utils.sheet_to_json(worksheet, {header: 1});

            this.$store.commit('UPDATE_HEADERS', parsedData.shift());
            this.$store.commit('UPDATE_VALUES', parsedData);
          };

          reader.readAsArrayBuffer(file);
        } else {
          this.$store.commit('CLEAR_EXCEL');
        }
      }
    }
  };
</script>