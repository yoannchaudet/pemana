<script setup>
    import categorieData from '@/assets/json/categories.json'
    import FooterNavItem from '@/components/commun/FooterApp/FooterNavItem.vue';
</script>

<template>
    <!-- CHANGER LA CLASS DU DIV ↴ -->
    <div class="footer">

        <div class="wrapInfo">

            <div class="entreprise">

                <RouterLink class="wrapLogo" to="/">
                    <img src="@/assets/img/svg/logo_pemana.svg" alt="logo-pemana">
                </RouterLink>
                
                <div class="reseauxSociaux">
                    <div class="wrapLogo">
                        <img src="@/assets/img/svg/icons8-facebook.svg" alt="icons-facebook">
                    </div>
                    <div class="wrapLogo">
                        <img src="@/assets/img/svg/icons8-twitter.svg" alt="icons-twitter">
                    </div>
                    <div class="wrapLogo">
                        <img src="@/assets/img/svg/icons8-tumblr.svg" alt="icons-tumblr">
                    </div>
                    <div class="wrapLogo">
                        <img src="@/assets/img/svg/icons8-instagram.svg" alt="icons-instagram">
                    </div>
                    <div class="wrapLogo">
                        <img src="@/assets/img/svg/icons8-pinterest.svg" alt="icons-pinterest">
                    </div>
                </div>
            </div>

            <div class="contact">
                <h3>Contact</h3>
                <ul>
                    <li>info@jeanfrancoisdube.ca</li>
                    <li>(514) 880-3770</li>
                    <li>168, rue de la Charente, Saint-Jérôme, Québec, Canada</li>
                </ul>
            </div>

            <div class="navFooter">
                <h3>Location</h3>
                <div class="links" v-if="categorieData">  
                    <FooterNavItem v-for="categorie in categorieData" :key="categorie.id"
                        :objCat="categorie" 
                    />
                </div>
            </div>
            

        </div>

    </div>

</template>

<style scoped>

</style>
