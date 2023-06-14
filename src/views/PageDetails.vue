<script setup>

    import { useRoute } from 'vue-router'
    import { reactive, computed, onBeforeMount } from 'vue'

    import AffichageDetailsImages from '@/components/AffichageData/AffichageDetailsImages.vue'
    import FooterApp from '@/components/commun/FooterApp/FooterApp.vue'

    import location from '@/assets/json/location.json'    

    import { Swiper, SwiperSlide } from 'swiper/vue'
    import 'swiper/css'

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
    })


</script>

<template>
    
    <div class="details">

        <div class="affichage-details">

            <div class="fiche-image">

                <Swiper :slidesPerView="1" :spaceBetween="50">
                    <SwiperSlide v-for="image in location[data.emplacement][data.id].images" :key="image.id">
                        <AffichageDetailsImages 
                            :objImage="image"
                        />
                    </SwiperSlide>
                </Swiper>

                <!-- <div class="wrapImg">
                    <img :src="location[data.emplacement][data.id].images[0]" alt="">
                </div>
                <div class="carousel-image">
                    <AffichageDetailsImages v-for="image in location[data.emplacement][data.id].images"
                        :key="image.id"
                        :objImage="image"
                    />
                </div> -->
            </div>

            <div class="wrapInfo">
                <h1 v-text="location[data.emplacement][data.id].name"></h1>
                <h3 v-text="location[data.emplacement][data.id].adresse"></h3>
                <h2 v-text="location[data.emplacement][data.id].type"></h2>
                <p v-text="location[data.emplacement][data.id].description"></p>
                
                <div class="wrapPrix">
                    <h1 v-text="location[data.emplacement][data.id].prix"></h1>
                    <h2>par mois</h2>
                </div>
            </div>


        </div>

        <FooterApp />
        
    </div>


</template>

<style scoped>

</style>