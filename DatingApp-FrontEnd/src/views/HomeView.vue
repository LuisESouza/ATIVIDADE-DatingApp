<script setup>
    import { RouterLink } from 'vue-router';
    import Buttons from '../components/utils/Buttons.vue';
    import Carousel from '../components/Carousel.vue'
</script>

<template>
    <section>
        <div class="container-content">
            <Carousel></Carousel>
        </div>

        <div class="home-buttons">
            <RouterLink to="/register"><Buttons titleButton="Create an account" /></RouterLink>
            <p>Already have an account? <RouterLink class="link" to="/login">Sign In</RouterLink></p>
        </div>
    </section>
</template>

<style scoped>

    section {
        padding: 15px;
        text-align: center;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 50px;
    }
    .container-content {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }
    .home-buttons {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 100%;
        max-width: 300px;
    }
    .link {
        text-decoration: none;
        color: var(--primary-color);
        font-weight: bold;
    }
    .link:hover {
        text-decoration: underline;
    }
</style>
