<script setup>
    import VignetteLogement from '@/components/AffichageData/VignetteLogement.vue'
    
    import location from '@/assets/json/location.json'
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

        <div class="liste-vignette-logement" v-if="location">
            <VignetteLogement v-for="logement in location.saintJe" :key="logement.id"
                :objLogement="logement"
            />
        </div>

    </div>

</template>

<style scoped>

</style>
