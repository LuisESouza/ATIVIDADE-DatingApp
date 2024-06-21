<script setup>
import { ref, onMounted } from 'vue';
import Footer from '../components/Footer.vue';
import Buttons from '../components/utils/Buttons.vue';
import apiService from '@/stores/services/apiService';

const api = new apiService();

const profileData = ref({
  firstName: '',
  lastName: '',
  age: '',
  avatar: '',
  gender: '',
  email: '',
  interests: [],
  bio: '',
});

const isEditing = ref(false);

const fetchProfileData = async () => {
    try {
        const url = "http://localhost:3001/api/customers/profile";
        console.log(`Fetching profile data from: ${url}`);
        const response = await api.apiGet(url);
        profileData.value = response;
    } catch (error) {
        console.error('Erro perfil:', error);
    }
};

const handleChange = async () => {
    try {
        // const url = "http://localhost:3001/api/customers/profile";
        // await api.apiPut(url, profileData);

        //
        isEditing.value = false;
    } catch (erro) {
        console.error('Error:', erro);
    }
};

const handleEdit = () => {
    isEditing.value = true;
};

const handleSave = async () => {
    await handleChange();
};

onMounted(fetchProfileData);
</script>


<template>
    <main>
      <div class="profile-info">
        <div class="div-img">
          <img :src="`http://localhost:3001/${profileData.avatar}`" alt="Avatar" class="avatar">
        </div>

        <div class="info-container">
            <div class="info-text">
                <h2><strong> {{ profileData.firstName }} {{ profileData.lastName }}, {{ profileData.age }}</strong></h2>
                <p>Gender: {{ profileData.gender }}</p>
                <p>Interests:{{ String(profileData.interests) }}</p> 
            </div>
          
            <div class="bio-container">

                <div class="bio-text" v-if="!isEditing">
                    <p><strong>Bio :</strong> {{ profileData.bio }}</p>
                </div>
                <textarea v-if="isEditing" name="bio" class="bio" v-model="profileData.bio" cols="30" rows="10" placeholder="Bio"></textarea>

            </div>

        </div>

      </div>

      

      <div class="image-gallery">
        <div class="card">
          <img :src="`http://localhost:3001/${profileData.avatar}`" alt="Gallery Image" class="card-img">
        </div>
      </div>

        <div class="button-container">
            <Buttons v-if="!isEditing" titleButton="Edit" @click="handleEdit" />
            <Buttons v-if="isEditing" titleButton="Save" @click="handleSave" />
        </div>
    </main>
    <Footer />
  </template>

<style scoped>
main {
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  
}

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.div-img {
  margin-top: 0px;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  overflow: hidden;

  box-shadow: 10px 2px 5px rgba(0, 0, 0, 0.1)
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-text {
  text-align: left;
  padding: 7px;
  border-bottom: 1px solid rgb(197, 195, 195);
}

.bio-container {
  width: 100%;
  margin-top: 10px;
}

.bio-text {
  margin-bottom: 10px;
  width: 95%;
  margin: auto;
  margin-top: 10px;
  font-size: 16px;
  color: #666;
  word-break: break-word;
  /* white-space: pre-wrap; */
}

.bio {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  resize: vertical;
}

.button-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.image-gallery {
  width: 100%;
  height: 20vh;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  gap: 10px;
  justify-content: start;
}

.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  width: 150px;
  height: 150px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

textarea {
    height: 35px;
    outline: none;
    resize: none;
}
</style>