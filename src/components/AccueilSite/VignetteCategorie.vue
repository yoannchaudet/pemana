<script setup>

    const props = defineProps({
        objCat : null
    })

</script>

<template>

    <RouterLink class="vignetteCategorie" :to="props.objCat.link">
        <div class="wrapImg">
            <img v-if="props.objCat.img" :src="props.objCat.img" :alt="props.objCat.name">
            <img v-else src="./../../assets/img/png/no-img.png" :alt="props.objCat.name">
        </div>
    
        <p v-text="props.objCat.name"></p>
    </RouterLink>
    
</template>

<style scoped>

</style>
