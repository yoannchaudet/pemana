<script setup>

    const props = defineProps({
        objLogement : null,
    })
    
</script>

<template>
    
    <RouterLink class="vignette-logement" :to="{name:'details', params: {emplacement: props.objLogement.emplacement, id: props.objLogement.id}}">
        
        <div class="wrapImg">
            <img :src="props.objLogement.images[0]" alt="img-principale">
        </div>

        <div class="wrapInfo">
            <h2 v-text="props.objLogement.name"></h2>
            <p v-text="props.objLogement.adresse"></p>
            <h3 v-text="props.objLogement.type"></h3>
            <p v-text="props.objLogement.description"></p>
        </div>

        <div class="wrapPrix">
            <p v-text="props.objLogement.prix"></p>
            <p>par mois</p>
        </div>

    </RouterLink>

</template>

<style scoped>

</style>
