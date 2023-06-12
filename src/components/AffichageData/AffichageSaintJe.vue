<script setup>
    import VignetteLogement from '@/components/AffichageData/VignetteLogement.vue'
    
    import saintJeData from '@/assets/json/saintJe.json'
</script>

<template>
    
    <div class="affichage-saintJe">

        <div class="titre">
            <h2>Logements à</h2>
            <h1>Saint-Jérôme</h1>
            <div class="wrapImg">
                <img src="./../../assets/img/svg/logo_pemana_light_plein.svg" alt="">
            </div>
        </div>

        <div class="liste-vignette-logement" v-if="saintJeData">
            <VignetteLogement v-for="logement in saintJeData" :key="logement.id"
                :objLogement="logement"
            />
        </div>

    </div>

</template>

<style scoped>

</style>
