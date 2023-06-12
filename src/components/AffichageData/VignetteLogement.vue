<script setup>

    const props = defineProps({
        objLogement : null
    })

</script>

<template>
    
    <div class="vignette-logement">

        <div class="wrapImg">
            <img src="./../../assets/img/png/no-img.png" alt="img-placeholder">    
        </div>

        <div class="wrapInfo">
            <h2 v-text="props.objLogement.adresse"></h2>
            <p v-text="props.objLogement.taille"></p>
            <p v-text="props.objLogement.description"></p>
        </div>

        <div class="wrapPrix">
            <p v-text="props.objLogement.prix"></p>
        </div>

    </div>

</template>

<style scoped>

</style>
