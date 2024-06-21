<script setup>
import { ref, watch } from 'vue';
import Inputs from '@/components/utils/Inputs.vue';
import AvatarUpload from '@/components/AvatarUpload.vue';

const props = defineProps(['formData']);

const inputsData = ref([
  { title: 'First name', id: 'firstName' },
  { title: 'Last name', id: 'lastName' },
  { title: 'Email', id: 'email' },
  { title: 'Password', id: 'password', type: 'password' },
]);

const selectedDate = ref(null);

const calculateAge = (dateOfBirth) => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
};

watch(selectedDate, (newDate) => {
  if (newDate) {
    const age = calculateAge(newDate);
    props.formData.age = age;
  }
});

const handleAvatarSuccess = (res) => {
  props.formData.avatar = res.filePath;
};
</script>

<template>
  <div class="form-container">
    <div class="avatar-group">
      <AvatarUpload :onAvatarSuccess="handleAvatarSuccess" />
    </div>

    <div class="input-group">
      <Inputs
        v-for="input in inputsData"
        :key="input.id"
        :titleInput="input.title"
        :type="input.type"
        v-model="props.formData[input.id]"
        :idInput="input.id"
      />

      <div class="date-container">
        <label for="date">Your birthday:</label>
        <el-date-picker
          v-model="selectedDate"
          id="date"
          type="date"
          placeholder="Selecione uma data"
          class="dateNasc"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  height: 85vh;
  text-align: center;
  gap: 1rem;
}
.input-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.date-container {
  display: flex;
  flex-direction: column;
}
.date-container label {
  margin-bottom: 10px;
}
</style>