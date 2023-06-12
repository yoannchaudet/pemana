<script setup>
    import VignetteCategorie from '@/components/AccueilSite/VignetteCategorie.vue'
    
    import categorieData from '@/assets/json/categories.json'
</script>

<template>
    <!-- CHANGER LA CLASS DU DIV ↴ -->
    <div class="accueil-site">

        <div class="wrapInfo">
            <h1>Pemana Inc.</h1>
            <h3>Location de quai et de logement</h3>
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
