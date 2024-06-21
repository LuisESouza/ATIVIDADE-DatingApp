<script setup>
import Footer from '@/components/Footer.vue';
import Buttons from '@/components/utils/Buttons.vue';
import { Sort, Close, ChatRound } from '@element-plus/icons-vue';
</script>

<template>
<main>
    <div class="container-header">
        <div class="header">
            <h2>Matches</h2>
            <Buttons class="btn-ord" :iconButton="Sort"/>
        </div>

        <p>This is a list of people who have liked you and your matches.</p>
    </div>
    
    <div class="container-matches">

        <div class="card">
            <div class="card-image">
                <img src="https://www.revistalofficiel.com.br/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F46743%2F1658860416-1617812006728145-1614830508289061-mulher-mais-bonita-do-mundo-yael-shelbia.jpg%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=1080&q=75" alt="Avatar" class="avatar">
                <div class="overlay">
                    <span class="name">Joselina, 19</span>
                    <div class="button-group">
                        <Buttons class="btn btn-close" :iconButton="Close" iconColor="#FF5A5F"/>
                        <Buttons class="btn btn-chat" :iconButton="ChatRound" iconColor="#00A699"/>
                    </div>
                </div>
            </div>
        </div>

        


    </div>
</main>
<Footer/>
</template>

<style scoped>
    main {
        padding: 20px;
    }
    .container-header {
        margin-bottom: 35px;
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .btn-ord {
        color: #ff0000;
        border: 1px solid #E8E6EA;
        background-color: #FFFFFF;
        width: 50px;
        height: 50px;
    }
    .container-matches {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: start;
        align-items: start;
        overflow: auto;
        height: 76vh;
        padding: 10px;
    }
    .card {
        width: 47%;
        max-width: 250px;
        border-radius: 10px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.301);
        overflow: hidden;
        background-color: #fff;
        transition: transform 0.3s ease;
    }
    .card:hover {
        transform: scale(1.1);
    }
    .card-image {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .avatar {
        width: 100%;
        height: auto;
    }
    .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(44, 44, 44, 0.6);
        color: #fff;
        padding: 10px;
        text-align: center;
    }
    .name {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .button-group {
        display: flex;
        justify-content: space-around;
        margin-top: 10px;
    }
    .btn {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.8);
        transition: background-color 0.3s ease;
    }
    .btn:hover {
        background-color: rgba(255, 255, 255, 1);
    }
    .btn-close {
        color: #FF5A5F;
    }
    .btn-chat {
        color: #00A699;
    }
</style>
