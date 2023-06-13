<script setup>

    import { useRoute } from 'vue-router'
    import { reactive, computed, onBeforeMount } from 'vue'

    import FooterApp from '@/components/commun/FooterApp/FooterApp.vue'

    import location from '@/assets/json/location.json'

    const route = useRoute();
    const routeEmplacement = computed(()=> route.params.emplacement)
    const routeId = computed(()=> route.params.id)

    const data = reactive ({    //structure de récupération
      id: null,
      emplacement: null,
    });


    onBeforeMount(() => {
        data.id = routeId.value;
        data.emplacement = routeEmplacement.value;

        console.log(location[data.emplacement][data.id])
        
    })


</script>

<template>
    
    <div class="details">

        <div class="fiche-details">
            <!-- <p v-text="location.data.emplacement[data.id].adresse"></p> -->
        </div>


        <FooterApp />
        
    </div>


</template>

<style scoped>

</style>