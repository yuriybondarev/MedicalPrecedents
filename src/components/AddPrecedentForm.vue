<template>
  <form id="add-precedent-form" method="POST">
    <div>
      <div>
        <div>
          <input
            id="male-gender-input"
            class="not-block-input"
            name="gender"
            checked
            value="м"
            type="radio"
          />
          <label for="male-gender-input" class="not-block-label">Мужчина</label>
        </div>
        <div>
          <input
            id="female-gender-input"
            class="not-block-input"
            name="gender"
            value="ж"
            type="radio"
          />
          <label for="female-gender-input" class="not-block-label">Женщина</label>
        </div>
      </div>
      <div>
        <label for="name-input">Имя:</label>
        <input id="name-input" name="name" />
      </div>
      <div>
        <label for="surname-input">Фамилия:</label>
        <input id="surname-input" name="surname" />
      </div>
      <div>
        <label for="age-input">Возраст:</label>
        <input id="age-input" min="0" max="150" required name="age" type="number" />
      </div>
      <div>
        <label for="height-input">Рост:</label>
        <input id="height-input" min="0" max="3" step="any" required name="height" type="number" />
      </div>
      <div>
        <label for="weight-input">Вес:</label>
        <input id="weight-input" min="0" max="700" step="any" required name="weight" type="number" />
      </div>
      <div>
        <label for="type-input">Тип:</label>
        <input id="type-input" name="type" />
      </div>
      <div>
        <select name="anamnesys" id="anamnesys-select">
          <option value="0" disabled selected>Выберите анамнез</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <select name="vessels-state" id="vessels-state-select">
          <option value="0" disabled selected>Выберите состояние сосудов</option>
          <option value="1">Риск</option>
          <option value="2">ТребНабл</option>
        </select>
      </div>
      <div>
        <label for="bmi-input">Индекс массы тела (ИМТ):</label>
        <input id="bmi-input" min="0" step="any" name="bmi" type="number" />
      </div>
      <div>
        <label for="wc-input">Окружность талии (ОТ):</label>
        <input id="wc-input" min="0" step="any" name="wc" type="number" />
      </div>
      <div>
        <label for="si-input">Индекс курения (ИК):</label>
        <input id="si-input" min="0" step="any" name="si" type="number" />
      </div>
      <div>
        <label for="sbp-input">Систолическое артериальное давление (САД):</label>
        <input id="sbp-input" min="0" step="any" name="sbp" type="number" />
      </div>
      <div>
        <label for="dbp-input">Диастолическое артериальное давление (ДАД):</label>
        <input id="dbp-input" min="0" step="any" name="dbp" type="number" />
      </div>
      <div>
        <label for="mbp-input">Среднее артериальное давление (СрАД):</label>
        <input id="mbp-input" min="0" step="any" name="mbp" type="number" />
      </div>
      <div>
        <label for="pbp-input">Пульсовое артериальное давление (ПАД):</label>
        <input id="pbp-input" min="0" step="any" name="pbp" type="number" />
      </div>
      <div>
        <label for="hr-input">Частота сердечных сокращений (ЧСС):</label>
        <input id="hr-input" min="0" step="any" name="hr" type="number" />
      </div>
      <div>
        <label for="aai-input">Аортальный индекс атерогенности (ИА аорт.):</label>
        <input id="aai-input" min="0" step="any" name="aai" type="number" />
      </div>
      <div>
        <label for="ed-input">ED:</label>
        <input id="ed-input" min="0" step="any" name="ed" type="number" />
      </div>
      <div>
        <label for="fdi-input">ИПИ:</label>
        <input id="fdi-input" min="0" step="any" name="fdi" type="number" />
      </div>
      <div>
        <label for="rt-input">RT:</label>
        <input id="rt-input" min="0" step="any" name="rt" type="number" />
      </div>
    </div>
    <button>Добавить прецедент</button>
  </form>
</template>

<script>
  export default {
    name: "AddPrecedentForm"
  };
</script>