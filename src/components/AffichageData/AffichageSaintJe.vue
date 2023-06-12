<script setup>
    import VignetteLogement from '@/components/AffichageData/VignetteLogement.vue'
    
    import saintJeData from '@/assets/json/saintJe.json'
</script>

<template>
    
    <div class="affichage-saintJe">

        <h1>Logements à Saint-Jérôme</h1>

        <div class="listeVignetteLogement" v-if="saintJeData">
            <VignetteLogement v-for="logement in saintJeData" :key="logement.id"
                :objLogement="logement"
            />
        </div>

    </div>

</template>

<style scoped>

</style>
