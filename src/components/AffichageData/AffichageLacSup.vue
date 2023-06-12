<script setup>
    import VignetteLogement from '@/components/AffichageData/VignetteLogement.vue'
    
    import lacSupData from '@/assets/json/lacSup.json'
</script>

<template>
    
    <div class="affichage-lacSup">

        <h1>Logements au Lac-Supérieur</h1>

        <div class="liste-vignette-logement" v-if="lacSupData">
            <VignetteLogement v-for="logement in lacSupData" :key="logement.id"
                :objLogement="logement"
            />
        </div>

    </div>

</template>

<style scoped>

</style>
