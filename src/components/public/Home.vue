<template>
  <div>
    <!-- Header -->
    <div class="header-background-filter"></div>

    <!-- Vidéo de fond -->
    <section id="background">
        <div class="foreground">
            <div class="player">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/OitN5-JGbE0?start=40&amp;end=1890&amp;modestbranding=0&amp;rel=0&amp;autoplay=1&amp;mute=1&amp;controls=0&amp;showinfo=0&amp;iv_load_policy=3&amp;loop=1&amp;playlist=OitN5-JGbE0"></iframe>
            </div>
        </div>
    </section>

    <section class="hero is-fullheight">
        <NavBar></NavBar>

        <div class="hero-body hero-centered-box">
            <div class="box container">
                <div class="title-box-header columns is-vcentered header-centered-box">
                    <div class="column is-narrow">
                        <i class="fas fa-users fa-4x"></i>
                    </div>
                    <span class="column title-box-header">
                        <h1 class="title">
                            DEVENEZ BENEVOLE
                        </h1>
                        <h2 class="subtitle">
                            dans le festival de votre choix !
                        </h2>
                    </span>
                </div>
                <form method="post" action="missions.html">
                    <div class="title has-padding-top-2">Chercher une mission</div>
                    <hr>
                    <div class="columns">
                        <div class="column">
                            <div class="field">
                                <label class="label">😍 &nbsp;&nbsp;Le poste qui m'interesse</label>
                                <div class="control">
                                    <div class="select is-info">
                                        <select>
                                            <option>Montage - Démontage</option>
                                            <option>Tractage</option>
                                            <option>Accueil festivalier</option>
                                            <option>Billterie</option>
                                            <option>Propreté</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="field">
                                <label class="label level">📅 &nbsp;&nbsp;Je suis disponible sur la periode</label>
                                <div class="control">
                                    <div class="select is-info">
                                        <select>
                                            <option>Janvier - Mars</option>
                                            <option>Avril - Juin</option>
                                            <option>Juillet - Septembre</option>
                                            <option>Octobre - Décembre</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="field">
                                <label class="label level">🗺️ &nbsp;&nbsp;Je recherche dans la région</label>
                                <div class="control">
                                    <div class="select is-info">
                                        <select>
                                            <option>Bretagne</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="control has-text-centered">
                        <button class="button is-success is-link is-large is-rounded"><i class='fas fa-arrow-alt-circle-right'></i>&nbsp;&nbsp;Rechercher une mission</button>
                    </div>
                </form>
            </div>
        </div>
        <a href="#" class="scroll-down" address="true"></a>
        <p class="help has-text-centered is-white is-italic scroll-down-legend">Continuer la visite</p>
    </section>

    <!-- Explorer les festival -->
    <section class="hero is-white explore-container">
        <section class="section">
            <div class="container is-medium">
                <h1 class="title"><i class="fas fa-globe has-text-link"></i>&nbsp;&nbsp;Explorer les festivals</h1>
                <div class="columns">
                    <div class="column is-one-quarter">
                        <div class="box">
                            <div class="subtitle has-text-weight-bold has-text-centered"><i class="fas fa-drum has-text-warning"></i> <span>&nbsp;Musique</span></div>
                        </div>
                    </div>
                    <div class="column is-one-quarter">
                        <div class="box">
                            <div class="subtitle has-text-weight-bold has-text-centered"><i class="fas fa-map-marker-alt has-text-danger"></i> <span>&nbsp;Regional</span></div>
                        </div>
                    </div>
                    <div class="column is-one-quarter">
                        <div class="box">
                            <div class="subtitle has-text-weight-bold has-text-centered"><i class="fas fa-theater-masks has-text-primary"></i> <span>&nbsp;Thêatre</span></div>
                        </div>
                    </div>
                    <div class="column is-one-quarter">
                        <div class="box">
                            <div class="subtitle has-text-weight-bold has-text-centered"><i class="fas fa-film has-text-success"></i> <span>&nbsp;Cinéma</span></div>
                        </div>
                    </div>
                </div>
           </div>
        </section>
        <hr>
        <section class="section">
            <div class="container is-medium">
                <div class="columns is-vcentered">
                    <div class="column">
                        <h2 class="title">Faites connaissance avec les festivals locaux</h2>
                        <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae luctus leo, ac ultrices nibh. Aliquam varius tortor ac enim accumsan, eu placerat elit iaculis. Sed eget porta mauris. </p>
                        <a href="" class="has-text-info">En savoir plus &nbsp;<i class="fas fa-angle-right"></i></a>
                    </div>
                    <div class="column is-narrow">
                        <img src="https://www.maxi-mag.fr/sites/default/files/media/article/2015-02/logo-nos-regions-ont-du-talent-lelcerc.jpg" width="500">
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <h2 class="title has-text-centered"><i class="fas fa-hand-holding-heart has-text-danger"></i><br>Soutenir le secteur culturel</h2>
                <div class="columns is-centered">
                    <div class="column is-three-quarters">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at eros suscipit, tincidunt magna nec, mollis dolor. Sed est justo, elementum vitae mauris vel, faucibus imperdiet mauris. Nullam auctor molestie dignissim. Nam vehicula ultrices diam vitae varius. Curabitur in nisi eu velit egestas dapibus.</h3>
                    </div>
                </div>

                <div class="columns is-centered culture-tiles-module is-multiline is-variable is-8">
                    <div class="column is-half h-c-tile">
                        <div class="h-c-tile__img image-bg-0683c1f"></div>
                        <div class="content is-small">
                            <h2>Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur condimentum facilisis. In laoreet, est nec rutrum tincidunt, nunc lacus tristique nibh, vel viverra ex augue tristique libero. Etiam tempor ante eget neque convallis pretium. Cras consectetur vulputate finibus. Phasellus in nisl sodales, suscipit diam at, suscipit ex.</p>
                        </div>
                    </div>
                    <div class="column is-4 h-c-tile">
                        <div class="h-c-tile__img image-bg-0683c2f"></div>
                        <div class="content is-small has-text-right">
                            <a href="partenaires/"><button class="button">Voir nos partenaires &nbsp;<i class="fas fa-angle-right"></i></button></a>
                        </div>
                    </div>
                </div>
           </div>
        </section>

        <section class="section">
            <div class="container">
                <h2 class="title has-text-centered"><i class="fas fa-grin-hearts has-text-danger"></i> Associations coups de coeur <i class="fas fa-grin-hearts has-text-danger"></i></h2>
                <div class="columns is-centered">
                    <div class="column is-8">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at eros suscipit, tincidunt magna nec, mollis dolor. Sed est justo, elementum vitae mauris vel, faucibus imperdiet mauris. Nullam auctor molestie dignissim. Nam vehicula ultrices diam vitae varius. Curabitur in nisi eu velit egestas dapibus.</h3>
                    </div>
                </div>

                <div class="columns is-centered culture-tiles-module is-multiline is-variable is-8">
                    <div class="column is-4 h-c-tile">
                        <div class="h-c-tile__img image-bg-960c1f"></div>
                        <div class="content is-small">
                            <h2>ADEEC</h2>
                            <p>L’ADEEC est un réseau humain de compétences regroupé autour d’actions concrètes fortement ancrées dans des valeurs de citoyenneté et de développement durable.</p>
                            <a href="" class="has-text-info">En savoir plus &nbsp;<i class="fas fa-angle-right"></i></a>
                       </div>
                    </div>
                    <div class="column is-4 h-c-tile">
                        <div class="h-c-tile__img image-bg-5467c1f"></div>
                        <div class="content is-small">
                            <h2>Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur condimentum facilisis. In laoreet, est nec rutrum tincidunt, nunc lacus tristique nibh, vel viverra ex augue tristique libero. Etiam tempor ante eget neque convallis pretium. Cras consectetur vulputate finibus. Phasellus in nisl sodales, suscipit diam at, suscipit ex.</p>
                            <a href="" class="has-text-info">En savoir plus &nbsp;<i class="fas fa-angle-right"></i></a>
                       </div>
                    </div>
                    <div class="column is-4 h-c-tile">
                        <div class="h-c-tile__img image-bg-8648c1f"></div>
                        <div class="content is-small">
                            <h2>Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur condimentum facilisis. In laoreet, est nec rutrum tincidunt, nunc lacus tristique nibh, vel viverra ex augue tristique libero. Etiam tempor ante eget neque convallis pretium. Cras consectetur vulputate finibus. Phasellus in nisl sodales, suscipit diam at, suscipit ex.</p>
                            <a href="" class="has-text-info">En savoir plus &nbsp;<i class="fas fa-angle-right"></i></a>
                       </div>
                    </div>
                    <div class="column has-text-centered">
                        <button class="button is-large is-success is-rounded">Découvrir les associations &nbsp;<i class="fas fa-angle-double-right"></i></button>
                    </div>
                </div>
           </div>
        </section>

        <section class="section">
            <div class="container">
                <h2 class="title has-text-centered"><i class="fas fa-grin-stars has-text-warning"></i> Festivals à l'honneur <i class="fas fa-grin-stars has-text-warning"></i></h2>
                <div class="columns is-centered">
                    <div class="column is-8">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at eros suscipit, tincidunt magna nec, mollis dolor. Sed est justo, elementum vitae mauris vel, faucibus imperdiet mauris. Nullam auctor molestie dignissim. Nam vehicula ultrices diam vitae varius. Curabitur in nisi eu velit egestas dapibus.</h3>
                    </div>
                </div>

                <div class="columns is-centered culture-tiles-module is-multiline is-variable is-8">
                    <div class="column is-4 h-c-tile">
                        <div class="h-c-tile__img image-bg-960c1f"></div>
                        <div class="content is-small">
                            <h2>Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur condimentum facilisis. In laoreet, est nec rutrum tincidunt, nunc lacus tristique nibh, vel viverra ex augue tristique libero. Etiam tempor ante eget neque convallis pretium. Cras consectetur vulputate finibus. Phasellus in nisl sodales, suscipit diam at, suscipit ex.</p>
                            <a href="" class="has-text-info">En savoir plus &nbsp;<i class="fas fa-angle-right"></i></a>
                       </div>
                    </div>
                    <div class="column is-4 h-c-tile">
                        <div class="h-c-tile__img image-bg-5467c1f"></div>
                        <div class="content is-small">
                            <h2>Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur condimentum facilisis. In laoreet, est nec rutrum tincidunt, nunc lacus tristique nibh, vel viverra ex augue tristique libero. Etiam tempor ante eget neque convallis pretium. Cras consectetur vulputate finibus. Phasellus in nisl sodales, suscipit diam at, suscipit ex.</p>
                            <a href="" class="has-text-info">En savoir plus &nbsp;<i class="fas fa-angle-right"></i></a>
                       </div>
                    </div>
                    <div class="column is-4 h-c-tile">
                        <div class="h-c-tile__img image-bg-8648c1f"></div>
                        <div class="content is-small">
                            <h2>Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur condimentum facilisis. In laoreet, est nec rutrum tincidunt, nunc lacus tristique nibh, vel viverra ex augue tristique libero. Etiam tempor ante eget neque convallis pretium. Cras consectetur vulputate finibus. Phasellus in nisl sodales, suscipit diam at, suscipit ex.</p>
                            <a href="" class="has-text-info">En savoir plus &nbsp;<i class="fas fa-angle-right"></i></a>
                       </div>
                    </div>
                    <div class="column has-text-centered">
                        <button class="button is-large is-success is-rounded">Découvrir les festivals &nbsp;<i class="fas fa-angle-double-right"></i></button>
                    </div>
                </div>
           </div>
        </section>

        <section class="hero is-light">
            <div class="hero-body">
                <div class="container">
                    <div class="level">
                        <div class="level-left"><h2 class="subtitle"><strong>Festivals, associations, entreprises :</strong><br>devenez partenaires de Lorem Ipsum et soutenez le secteur culturel.</h2></div>
                        <p class="has-text-centered"><a class="button is-outlined is-info is-rounded is-large"><i class="fas fa-user-astronaut"></i> &nbsp; Devenir partenaire</a></p>
                    </div>
                </div>
            </div>
            </section>
    </section>

    <Footer></Footer>

    <!-- <script type="module" src="smoothscroll-polyfill.js"></script>
    <script type="text/javascript">
      document.querySelector('.scroll-down').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.explore-container').scrollIntoView({ behavior: 'smooth' });
      });
    </script> -->
  </div>
</template>

<script>
import Footer from '../Footer'
import NavBar from '../NavBar'

export default {
  components: {
    Footer,
    NavBar,
  },
}
</script>
