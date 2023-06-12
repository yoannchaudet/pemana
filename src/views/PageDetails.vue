<script setup>

    import { useRoute } from 'vue-router'
    import { reactive, computed, onBeforeMount } from 'vue'

    import AffichageDetails from '@/components/AffichageData/AffichageDetails.vue'
    import FooterApp from '@/components/commun/FooterApp/FooterApp.vue'

    import location from '@/assets/json/location.json'

    const route = useRoute();
    const routeId = computed(()=> route.params.id)

    const data = reactive ({    //structure de récupération
      id: null,
      logement: null,
    });


    onBeforeMount(() => {
        data.id = routeId;

        // console.log(data.id)
    })


</script>

<template>
    
    <div class="details">

        <!-- pas sur que ca soit nécessaire -->
        <AffichageDetails />

        <FooterApp />
        
    </div>


</template>

<style scoped>

</style>