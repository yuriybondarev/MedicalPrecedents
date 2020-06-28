<template>
  <BaseForm 
    id="find-precedent-form"
    @submit.prevent="submit"
  >
    <div>
      <div>
        <div>
          <input
            id="male-gender-input"
            class="not-block-input"
            name="genders[]"
            value="м"
            type="checkbox"
          />
          <label 
            for="male-gender-input" 
            class="not-block-label"
          >
            Мужчина
          </label>
        </div>
        <div>
          <input
            id="female-gender-input"
            class="not-block-input"
            name="genders[]"
            value="ж"
            type="checkbox"
          />
          <label 
            for="female-gender-input" 
            class="not-block-label"
          >
            Женщина
          </label>
        </div>
      </div>
      <div>
        <label for="name-input">Имя:</label>
        <input 
          id="name-input" 
          name="name" 
        />
      </div>
      <div>
        <label for="surname-input">Фамилия:</label>
        <input 
          id="surname-input" 
          name="surname" 
        />
      </div>
      <div>
        <label>Возраст:</label>
        <div class="min-max-wrapper">
          <input
            id="min-age-input"
            min="0"
            max="150"
            required
            name="min-age"
            type="number"
            placeholder="Минимум"
          />
          <input
            id="max-age-input"
            min="0"
            max="150"
            required
            name="max-age"
            type="number"
            placeholder="Максимум"
          />
        </div>
      </div>
      <div>
        <label>Рост:</label>
        <div class="min-max-wrapper">
          <input
            id="min-height-input"
            min="0"
            max="3"
            step="any"
            required
            name="min-height"
            type="number"
            placeholder="Минимум"
          />
          <input
            id="max-height-input"
            min="0"
            max="3"
            step="any"
            required
            name="max-height"
            type="number"
            placeholder="Максимум"
          />
        </div>
      </div>
      <div>
        <label>Вес:</label>
        <div class="min-max-wrapper">
          <input
            id="min-weight-input"
            min="0"
            max="700"
            step="any"
            required
            name="min-weight"
            type="number"
            placeholder="Минимум"
          />
          <input
            id="max-weight-input"
            min="0"
            max="700"
            step="any"
            required
            name="max-weight"
            type="number"
            placeholder="Максимум"
          />
        </div>
      </div>
      <div>
        <label for="type-input">Тип:</label>
        <input 
          id="type-input" 
          name="type" 
        />
      </div>
      <div>
        <select 
          name="anamnesys[]" 
          id="anamnesys-select" 
          multiple
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select 
          name="vessels-state[]" 
          id="vessels-state-select" 
          multiple
        >
          <option value="1">Риск</option>
          <option value="2">Требуется наблюдение</option>
          <option value="3">Высокий риск</option>
        </select>
      </div>
      <div>
        <label>Индекс массы тела (ИМТ):</label>
        <div class="min-max-wrapper">
          <input
            id="min-bmi-input"
            min="0"
            step="any"
            name="min-bmi"
            type="number"
            placeholder="Минимум"
          />
          <input
            id="max-bmi-input"
            min="0"
            step="any"
            name="max-bmi"
            type="number"
            placeholder="Максимум"
          />
        </div>
      </div>
      <div>
        <label>Окружность талии (ОТ):</label>
        <div class="min-max-wrapper">
          <input
            id="min-wc-input"
            min="0"
            step="any"
            name="min-wc"
            type="number"
            placeholder="Минимум"
          />
          <input
            id="max-wc-input"
            min="0"
            step="any"
            name="max-wc"
            type="number"
            placeholder="Максимум"
          />
        </div>
      </div>
      <div>
        <label>Индекс курения (ИК):</label>
        <div class="min-max-wrapper">
          <input
            id="min-si-input"
            min="0"
            step="any"
            name="min-si"
            type="number"
            placeholder="Минимум"
          />
          <input
            id="max-si-input"
            min="0"
            step="any"
            name="max-si"
            type="number"
            placeholder="Максимум"
          />
        </div>
      </div>
      <div>
        <label>Систолическое артериальное давление (САД):</label>
        <div class="min-max-wrapper">
          <input
            id="min-sbp-input"
            min="0"
            step="any"
            name="min-sbp"
            type="number"
            placeholder="Минимум"
          />
          <input
            id="max-sbp-input"
            min="0"
            step="any"
            name="max-sbp"
            type="number"
            placeholder="Максимум"
          />
        </div>
      </div>
      <div>
        <label>Диастолическое артериальное давление (ДАД):</label>
        <div class="min-max-wrapper">
          <input
            id="min-dbp-input"
            min="0"
            step="any"
            name="min-dbp"
            type="number"
            placeholder="Минимум"
          />
          <input
            id="max-dbp-input"
            min="0"
            step="any"
            name="max-dbp"
            type="number"
            placeholder="Максимум"
          />
        </div>
      </div>
      <div>
        <label>Cреднее артериальное давление (СрАД):</label>
        <div class="min-max-wrapper">
          <input
            id="min-mbp-input"
            min="0"
            step="any"
            name="min-mbp"
            type="number"
            placeholder="Минимум"
          />
          <input
            id="max-mbp-input"
            min="0"
            step="any"
            name="max-mbp"
            type="number"
            placeholder="Максимум"
          />
        </div>
      </div>
      <div>
        <label>Пульсовое артериальное давление (ПАД):</label>
        <div class="min-max-wrapper">
          <input
            id="min-pbp-input"
            min="0"
            step="any"
            name="min-pbp"
            type="number"
            placeholder="Минимум"
          />
          <input
            id="max-pbp-input"
            min="0"
            step="any"
            name="max-pbp"
            type="number"
            placeholder="Максимум"
          />
        </div>
      </div>
      <div>
        <label>Частота сердечных сокращений (ЧСС):</label>
        <div class="min-max-wrapper">
          <input
            id="min-hr-input"
            min="0"
            step="any"
            name="min-hr"
            type="number"
            placeholder="Минимум"
          />
          <input
            id="max-hr-input"
            min="0"
            step="any"
            name="max-hr"
            type="number"
            placeholder="Максимум"
          />
        </div>
      </div>
      <div>
        <label>Минимальный аортальный индекс атерогенности (ИА аорт.):</label>
        <div class="min-max-wrapper">
          <input
            id="min-aai-input"
            min="0"
            step="any"
            name="min-aai"
            type="number"
            placeholder="Минимум"
          />
          <input
            id="max-aai-input"
            min="0"
            step="any"
            name="max-aai"
            type="number"
            placeholder="Максимум"
          />
        </div>
      </div>
      <div>
        <label>ED:</label>
        <div class="min-max-wrapper">
          <input
            id="min-ed-input"
            min="0"
            step="any"
            name="min-ed"
            type="number"
            placeholder="Минимум"
          />
          <input
            id="max-ed-input"
            min="0"
            step="any"
            name="max-ed"
            type="number"
            placeholder="Максимум"
          />
        </div>
      </div>
      <div>
        <label>ИПИ:</label>
        <div class="min-max-wrapper">
          <input
            id="min-fdi-input"
            min="0"
            step="any"
            name="min-fdi"
            type="number"
            placeholder="Минимум"
          />
          <input
            id="max-fdi-input"
            min="0"
            step="any"
            name="max-fdi"
            type="number"
            placeholder="Максимум"
          />
        </div>
      </div>
      <div>
        <label>RT:</label>
        <div class="min-max-wrapper">
          <input
            id="min-rt-input"
            min="0"
            step="any"
            name="min-rt"
            type="number"
            placeholder="Минимум"
          />
          <input
            id="max-rt-input"
            min="0"
            step="any"
            name="max-rt"
            type="number"
            placeholder="Максимум"
          />
        </div>
      </div>
    </div>
    <button>Найти прецеденты</button>
  </BaseForm>
</template>

<script>
  import BaseForm from './BaseForm';
  import AJAX from '@/classes/ajax';

  export default {
    components: {
      BaseForm
    },
    extends: BaseForm,
    methods: {
      submit(event) {
        if (!this.isBlocked) {
          const URL = '/api/find.php';
          const params = AJAX.getParamsString(new FormData(event.target));
          
          let successCallback = (json) => {
            this.$store.commit('CLEAR_PRECEDENTS');
            this.$store.commit('ADD_PRECEDENTS', json.data)
          };

          this.submitGet(params, URL, successCallback);
        }
      }
    }
  };
</script>