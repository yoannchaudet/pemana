<script setup>
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

            <RouterLink to="/">Accueil</RouterLink>
            <RouterLink to="/">Quai Marina Zool</RouterLink>
            <RouterLink to="/">Logement Lac-Supérieur</RouterLink>
            <RouterLink to="/">Logement Saint-Jérôme</RouterLink>
            <RouterLink to="/">Projet à venir</RouterLink>
        
        </Slide>

    </div>

</template>

<style scoped>

</style>
