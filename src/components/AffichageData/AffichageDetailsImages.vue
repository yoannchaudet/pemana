<script setup>

    const props = defineProps({
        objImage : null,
    })

</script>

<template>
    
    <div class="wrapImg">

        <img :src="props.objImage" alt="img-carousel" unselectable="on">

    </div>

</template>

<style scoped>

</style>
