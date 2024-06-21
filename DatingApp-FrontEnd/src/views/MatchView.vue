<script setup>
    import { RouterLink } from 'vue-router';
    import Buttons from '@/components/utils/Buttons.vue';
</script>

<template>
    


    <main>
        <div>
            <div class="container-itens">
                <div class="container-tittles">
                    <span>Its a Match, @user!</span>
                    <p>Start a conversation now with each other</p>
                </div>
                <div class="container-btns">
                    <RouterLink to="/matchlist"><Buttons title-button="Say hello!"/> </RouterLink>
                    
                    <RouterLink to="/main"><Buttons title-button="Keep swiping!"/></RouterLink>                
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>

    main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .container-tittles{
        width: 100%;
        margin-top: 55vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 10vh;
        gap: 10px;
    }

    .container-btns{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .container-itens{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    span{
        color: rgba(233, 64, 87, 1);
    }

</style>