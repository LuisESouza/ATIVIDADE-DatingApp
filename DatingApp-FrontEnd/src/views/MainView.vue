
<script setup>
    import { ref, onMounted } from 'vue';
    import Buttons from '@/components/utils/Buttons.vue';
    import { RouterLink } from 'vue-router';
    import { ArrowLeft, Operation } from '@element-plus/icons-vue';
    import Footer from '@/components/Footer.vue';
    import { Close, ChatRound, Star } from '@element-plus/icons-vue';
    import apiService from '@/stores/services/apiService';


    const api = new apiService();
    const customers = ref([]);

    onMounted(async ()=>{
      try{
        const data = await api.apiGet('http://localhost:3001/api/customers/all');
        console.log(data);
        // customers.value = data;
      }catch(error){
        console.log(error)
      }
    })
</script>

<template>
    <main>
        <div class="itens">
            <div class="upbar">
                <RouterLink to="">
                    <Buttons class="upConfig" iconButton="ArrowLeft" />
                </RouterLink>                
                <span>Discover</span>
                <Buttons class="upConfig" iconButton="Operation" />            
            </div>
        </div>
        
        <div class="photos">
            <div class="card-image">
                <img src="https://www.revistalofficiel.com.br/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F46743%2F1658860416-1617812006728145-1614830508289061-mulher-mais-bonita-do-mundo-yael-shelbia.jpg%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=1080&q=75" alt="Avatar" class="avatar">
                <div class="overlay">
                    <span class="name">Joselina, 19</span>
                </div>
            </div>
        </div>

        <div class="menu">
            <Buttons class="btnMatchs" :iconButton="Close"/>

            <Buttons class="btnMatchs" :iconButton="ChatRound"/>

            <Buttons class="btnMatchs" :iconButton="Star"/>
        </div>
    </main>
    <Footer />
</template>

<style scoped>
  img {
    border-radius: 20px;
    width: 100%;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(44, 44, 44, 0.5);
    color: #fff;
    padding: 10px;
    text-align: start;
  }

  .card-image {
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    height: 50vh;
  }

  .avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .menu {
    display: flex;
    justify-content: space-around;
    margin-top: 25px;
    padding-bottom: 20px;
  }

  .photos {
    width: 90%;
    height: 50vh;
    display: flex;
    justify-content: center;
    margin: auto;
    padding-top: 10%;
  }

  .itens {
    width: 100%;
    padding-top: 50px;
  }

  .upbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10%;
  }

  .upConfig {
    border: none;
    width: 60px;
    background-color: white;
    color: var(--primary-color);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .btnMatchs {
    border-radius: 50%;
    height: 60px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s;
    font-size: 25px;


    color: var(--primary-color);
  }

  .btnMatchs:hover{
    transform: scale(1.5);
  }

  .btnMatchs:hover {
    background-color: #f0f0f0;
  }
</style>
