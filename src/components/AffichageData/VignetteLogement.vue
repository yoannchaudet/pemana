<script setup>

    const props = defineProps({
        objLogement : null
    })

</script>

<template>
    
    <div class="vignette-logement">

        <div class="wrapImg">
            <img :src="props.objLogement.images[0]" alt="img-placeholder">
        </div>

        <div class="wrapInfo">
            <h2 v-text="props.objLogement.name"></h2>
            <h3 v-text="props.objLogement.type"></h3>
            <p v-text="props.objLogement.adresse"></p>
            <p v-text="props.objLogement.description"></p>
        </div>

        <div class="wrapPrix">
            <p v-text="props.objLogement.prix"></p>
            <p>par mois</p>
        </div>

    </div>

</template>

<style scoped>

</style>
