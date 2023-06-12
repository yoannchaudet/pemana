<script setup>
    import VignetteLogement from '@/components/AffichageData/VignetteLogement.vue'
    
    import lacSupData from '@/assets/json/lacSup.json'
</script>

<template>
    
    <div class="affichage-lacSup">

        <div class="titre">
            <h2>Logements au</h2>
            <h1>Lac-Supérieur</h1>
        </div>

        <div class="liste-vignette-logement" v-if="lacSupData">
            <VignetteLogement v-for="logement in lacSupData" :key="logement.id"
                :objLogement="logement"
            />
        </div>

    </div>

</template>

<style scoped>

</style>
