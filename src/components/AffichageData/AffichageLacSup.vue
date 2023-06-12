<script setup>
    import VignetteLogement from '@/components/AffichageData/VignetteLogement.vue'
    
    import saintJeData from '@/assets/json/saintJe.json'
</script>

<template>
    
    <div class="affichage-lacSup">

        <h1>Logements au Lac-Supérieur</h1>

        <div class="liste-vignette-logement" v-if="saintJeData">
            <VignetteLogement v-for="logement in saintJeData" :key="logement.id"
                :objLogement="logement"
            />
        </div>

    </div>

</template>

<style scoped>

</style>
