<template>
    <div>
        <NavBar></NavBar>
        <section class="hero is-white">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">Nos partenaires</h1>
                    <h2 class="subtitle">Ils nous font confiance, nous les en remerciont</h2>
                    <hr>
                    <div class="content">
                        <p>Nous sommes fiers de créer nos cours et nos parcours en collaboration avec des partenaires prestigieux. Qu'il s'agisse de grandes universités reconnues pour la qualité de leur enseignement et de leur recherche ou d'entreprises expertes et référentes dans leur secteur, tous nos partenaires ont choisi de s'engager à nos côtés pour une éducation accessible à tous.</p>
                        <hr>
                        <h3 class="title">Festivals partenaires</h3>
                        <p><img src="http://www.centremalraux.com/storage/app/media/uploaded-files/ccam_partenaires_1819.jpg"></p>
                        <hr>
                        <h3 class="title">Entreprises et association partenaires</h3>
                        <p><img src="https://www.ferrieres-paris.com/wp-content/uploads/2018/01/0-tous-Logos-Partenaires-Acad%C3%A9miques.jpg"></p>
                        <hr>
                        <h3 class="title">Partenaires instutionnels</h3>
                        <p><img src="http://www.centremalraux.com/storage/app/media/uploaded-files/ccam_partenaires_1819.jpg"></p>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script>
import NavBar from '../NavBar'
import Footer from '../Footer'

export default {
    components: {
        NavBar,
        Footer
    },
}
</script>
