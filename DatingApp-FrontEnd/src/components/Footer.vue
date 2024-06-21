<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { User, ChatRound, Cellphone } from '@element-plus/icons-vue';
import Buttons from '@/components/utils/Buttons.vue';

const ButtonData = ref([
    {
        icon: Cellphone,
        route: '/main'
    },
    {
        icon: ChatRound,
        route: '/matchlist'
    },
    {
        icon: User,
        route: '/profile'
    }
]);
</script>

<template>
    <footer class="rodape">
        <div class="container-buttons">
            <RouterLink
                v-for="button in ButtonData"
                :key="button.icon"
                :to="button.route"
                class="btn"
                active-class="active-btn"
            >
            <Buttons :icon="button.icon" class="btn" />
            </RouterLink>
        </div>
    </footer>
</template>

<style scoped>
.rodape {
    border-top: 1px solid #E8E6EA;
    background-color: #FFFFFF;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    bottom: 0;
    padding: 10px 0;
    z-index: 1000;
}

.container-buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
}

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: transparent;
    transition: background-color 0.3s, transform 0.3s;
    font-size: 20px;
    border-radius: 4px;
    color: #ADAFBB;
}

.btn:hover {
    border-top: 2px solid var(--primary-color);
    transform: scale(1.1);
    color: var(--primary-color);
}

.btn:active {
    transform: scale(0.95);
}

.active-btn {
    border-top: 2px solid var(--primary-color);
    transform: scale(1.1);
}
</style>
