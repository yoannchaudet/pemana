<script setup>
    const props = defineProps({
        objCat : null
    })

</script>

<template>
    
    <div class="footer-nav-item">
        <RouterLink class="vignetteCategorie" :to="props.objCat.link">
            <p v-text="props.objCat.name"></p>
        </RouterLink>
    </div>

</template>

<style scoped>

</style>
