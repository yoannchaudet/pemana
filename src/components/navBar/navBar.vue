<script setup>
    // import categorieData from '@/assets/json/categories.json'    //pour is on veux que nav soit "clean"

    import { onMounted } from 'vue'
    import { Slide } from 'vue3-burger-menu'

    onMounted(() =>{
        document.querySelector('.bm-burger-button').addEventListener("click", () =>{
            
        });
    })

</script>

<template>
    
    <div class="navBar">

        <Slide width="500" :closeOnNavigation="true" >

            <RouterLink class="item-list" to="/">Accueil</RouterLink>
            <RouterLink class="item-list" to="/marina">Quai Marina Zool</RouterLink>
            <RouterLink class="item-list" to="/">Logement Lac-Supérieur</RouterLink>
            <RouterLink class="item-list" to="/">Logement Saint-Jérôme</RouterLink>
            <RouterLink class="item-list" to="/">Projet à venir</RouterLink>

            <div class="wrapImg">
                <img src="./../../assets/img/svg/logo_pemana.svg" alt="logo_pemana">
            </div>
        
        </Slide>

    </div>

</template>

<style scoped>

</style>
