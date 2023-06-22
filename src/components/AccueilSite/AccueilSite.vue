<script setup>
    import VignetteCategorie from '@/components/AccueilSite/VignetteCategorie.vue'
    
    import categorieData from '@/assets/json/categories.json'
</script>

<template>
    
    <div class="accueil-site">

        <div class="accueil-top">
            <div class="wrapImg">
                <img src="./../../assets/img/jpg/lacSup/69-71/69-71_00.jpg" alt="lac-sup-principal">
            </div>
            <div class="wrapInfo">
                <div class="info-container">
                    <h1>Pemana Inc.</h1>
                    <h3>Location de quai et de logement</h3>
                    <div class="wrapImg">
                        <img src="./../../assets/img/svg/logo_pemana_light.svg" alt="logo-light-full">
                    </div>
                </div>
            </div>
        </div>

        <div class="listeVignetteCat" v-if="categorieData">
            <VignetteCategorie v-for="categorie in categorieData" :key="categorie.id"
                :objCat="categorie" 
            />
        </div>

    </div>

</template>

<style scoped>

</style>
