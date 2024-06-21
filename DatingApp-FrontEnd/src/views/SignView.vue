<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { ArrowLeft } from '@element-plus/icons-vue';
import Buttons from '@/components/utils/Buttons.vue';
import Links from '@/components/utils/Links.vue';
import Inputs from '@/components/utils/Inputs.vue';
import apiService from '@/stores/services/apiService.js';
import { useAuthStore } from '@/stores/authStore.js';

const router = useRouter();
const authStore = useAuthStore();
const links = ref([
  { title: 'Terms of use', href: '#' },
  { title: 'Privacy Policy', href: '#' }
]);

const inputsData = ref([
  { title: 'Email', id: 'email_login', type: 'email' },
  { title: 'Password', id: 'password_login', type: 'password' }
]);

const formData = ref({
  email: '',
  password: ''
});

const handleLogin = async () => {
  const apiURL = 'http://localhost:3001/api/customers/login';
  const apiRegister = new apiService();

  try {
    const response = await apiRegister.apiPost(apiURL, formData.value);
    authStore.setToken(response.token);
    router.push('/main');
  } catch (error) {
    console.error('Error logging:', error);
    alert('Invalid email or password');
  }
};
</script>

<template>
<main>
  <header style="padding: 5px 5px 5px">
    <nav>
      <RouterLink to="/">
        <Buttons :iconButton="ArrowLeft" class="btn-back" />
      </RouterLink>
    </nav>
  </header>

  <div class="container">
    <div class="logo-container">
      <img src="@/assets/logo.svg" alt="Logo">
    </div>

    <form class="sign-container" @submit.prevent="handleLogin">
      <p>Login</p>
      <div class="input-group">
        <Inputs v-for="inputs in inputsData" 
                :key="inputs.id" 
                :titleInput="inputs.title"
                :type="inputs.type"
                v-model="formData[inputs.id.replace('_login', '')]" 
        />
      </div>

      <div class="button-group">
        <Buttons 
          titleButton="Login" 
          typeButton="submit"
        />
        <RouterLink to="/register">
          <Buttons titleButton="Create account" />
        </RouterLink>
      </div>
    </form>
  </div>

  <footer>
    <div class="links-container">
      <Links v-for="link in links" 
             :key="link.title" 
             :title="link.title" 
             :href="link.href" 
      />
    </div>
  </footer>
</main>
</template>

<style scoped>
  .btn-back {
    width: 50px;
    height: 50px;
    background-color: var(--secundary-color);
    border: 1px solid var(--tercery-color);
    color: var(--primary-color);
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 150px);
    text-align: center;
  }
  .logo-container {
    margin-bottom: 20px;
  }
  .sign-container {
    line-height: 25px;
  }
  .sign-container p {
    line-height: 80px;
    font-size: 24px;
    font-weight: 700;
  }
  footer {
    width: 100%;
    position: fixed;
    height: 150px;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
  .links-container {
    text-align: center;
  }
  .button-group {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }
</style>