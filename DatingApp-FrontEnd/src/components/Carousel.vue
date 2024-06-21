<script setup>
import { ref } from 'vue';
import Girl1 from '../assets/images/Girl1.png';
import Girl2 from '../assets/images/Girl2.png';
import Girl3 from '../assets/images/Girl3.png';

const data = ref([
  { Title: "Algorithm", Text: "Users go through a vetting process to ensure you never match with bots.", Image: Girl1 },
  { Title: "Matches", Text: "We match you with people that have a large array of similar interests.", Image: Girl2 },
  { Title: "Premium", Text: "Sign up today and enjoy the first month of premium benefits on us.", Image: Girl3 }
]);

const textIndex = ref(0);

const textChange = (index) => {
  textIndex.value = index;
};
</script>

<template>
  <div class="carousel-wrapper">
    <el-carousel :interval="4000" type="card" height="360px" @change="textChange">
      <el-carousel-item v-for="(item, index) in data" :key="index">
        <img :src="item.Image" alt="Imagem" class="carousel-image" :class="{ active: index === textIndex }">
      </el-carousel-item>
    </el-carousel>
  </div>
  
  <div class="home-text">
    <h1>{{ data[textIndex].Title }}</h1>
    <p>{{ data[textIndex].Text }}</p>
  </div>
</template>

<style scoped>
    .home-text {
      text-align: center;
      margin-top: 20px;
    }

    h1 {
      color: var(--primary-color);
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      line-height: 25px;
      font-size: 18px;
    }

    .carousel-image {
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }
</style>
