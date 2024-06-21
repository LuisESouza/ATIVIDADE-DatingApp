// src/views/RegisterView.vue
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ArrowLeft } from '@element-plus/icons-vue';
import Buttons from '@/components/utils/Buttons.vue';
import apiService from '@/stores/services/apiService.js';
import { useAuthStore } from '@/stores/authStore.js';
import PersonalInfo from '@/components/PersonalInfo.vue';
import GenderInfo from '@/components/GenderInfo.vue';
import InterestsInfo from '@/components/InterestsInfo.vue';

const router = useRouter();
const authStore = useAuthStore();
const currentStep = ref(1);

const formData = ref({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    age: null,
    interests: [],
    avatar: ''
});

const nextStep = () => {
    if (currentStep.value < 3) {
        currentStep.value++;
    }
};

const prevStep = () => {
    if (currentStep.value > 1) {
        currentStep.value--;
    }
};

const handleAvatarSuccess = (filePath) => {
    console.log(filePath);
    formData.value.avatar = filePath;
};

const Submit = async () => {
    // if (formData.value.age < 18) {
    //     alert("Idade inválida.");
    //     return;
    // }

    console.log("Avatar Register: ", formData.value.avatar);

    const apiRegister = new apiService();
    const apiURL = "http://localhost:3001/api/customers/register";

    const formDataToSend = new FormData();
    Object.keys(formData.value).forEach(key => {
        formDataToSend.append(key, formData.value[key]);
    });

    try {
        const response = await apiRegister.apiPost(apiURL, formDataToSend, true);
        authStore.setToken(response.token);
        router.push('/login');
    } catch (error) {
        console.error('Error :', error);
    }
};
</script>

<template>
  <header>
    <nav class="navigator-register">
      <Buttons v-if="currentStep > 1" class="btn-back" :iconButton="ArrowLeft" @click="prevStep" />
      <a class="link" @click="nextStep" style="margin-left: auto; margin-bottom: 25px; padding-top: 15px;">Skip</a>
    </nav>
  </header>

  <main>
    <form @submit.prevent="Submit">
      <div>
        <PersonalInfo v-if="currentStep === 1" :formData="formData" />
        <GenderInfo v-if="currentStep === 2" v-model:modelValue="formData.gender" />
        <InterestsInfo v-if="currentStep === 3" v-model:modelValue="formData.interests" />
      </div>
      <AvatarUpload v-if="currentStep === 1" @onAvatarSuccess="handleAvatarSuccess" />
      <div class="nav-buttons">
        <Buttons v-if="currentStep < 3" titleButton="Next" @click="nextStep" />
        <Buttons v-if="currentStep === 3" titleButton="Submit" typeButton="submit" />
      </div>
    </form>
  </main>
</template>

<style scoped>
.link {
    padding-right: 25px;
    color: var(--primary-color);
    text-decoration: underline;
}
.navigator-register {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.router-btn {
    padding-left: 10px;
}
.btn-back {
    width: 50px;
    background-color: var(--secundary-color);
    border: 1px solid var(--tercery-color);
    color: var(--primary-color);
}
.nav-buttons {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>