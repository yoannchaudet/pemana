<script setup>

    const props = defineProps({
        objCat : null
    })

</script>

<template>

    <RouterLink class="vignetteCategorie" :to="props.objCat.link">
        <div class="wrapImg">
            <img src="./../../assets/img/png/no-img.png" alt="">
        </div>
    
        <p v-text="props.objCat.name"></p>
    </RouterLink>
    
</template>

<style scoped>

</style>
