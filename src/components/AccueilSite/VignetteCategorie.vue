<script setup>

    const props = defineProps({
        objCat : null
    })

</script>

<template>

    <div class="vignetteCategorie">

        <div class="wrapImg">
            <img src="./../../assets/img/png/no-img.png" alt="">
        </div>

        <p v-text="props.objCat.name"></p>

    </div>

</template>

<style scoped>

</style>
