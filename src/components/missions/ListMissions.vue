<template>
    <div>
        <NavBar></NavBar>

        <section class="hero is-white">
            <div class="columns left-navbar--home">
                <div class="column is-2 content-left-navbar--home">
                    <aside class="menu section">
                    <p class="menu-label">Poste</p>
                    <ul class="menu-list">
                        <li><a href="#">Montage - Démontage</a></li>
                        <li><a href="#">Tractage</a></li>
                        <li><a href="#">Accueil festivalier</a></li>
                        <li><a href="#">Billterie</a></li>
                        <li class="is-size-7"><a href=""><i class="fas fa-angle-right"></i> Voir tous les postes</a></li>
                    </ul>
                    <p class="menu-label">Régions</p>
                    <ul class="menu-list">
                        <li><a href="">Alsace</a></li>
                        <li><a href="">Aquitaine</a></li>
                        <li><a href="">Auvergne</a></li>
                        <li><a href="">Basse Normandie</a></li>
                        <li><a href="">Bourgogne</a></li>
                        <li><a href="">Bretagne</a></li>
                        <li><a href="">Champagne-Ardenne</a></li>
                        <li><a href="">Corse</a></li>
                        <li class="is-size-7"><a href=""><i class="fas fa-angle-right"></i> Voir toutes les Régions</a></li>
                    </ul>
                    </aside>
                </div>

                <div class="column">
                    <div class="section">
                        <h1 class="title is-uppercase">Liste des missions</h1>
                        <hr>
                        <h2 class="subtitle">Filtrer par</h2>
                        <div class="columns">
                            <div class="column">
                                <div class="field">
                                    <label class="label">Type de poste</label>
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
                                    <label class="label">Date</label>
                                    <div class="control">
                                        <div class="select is-info">
                                            <select>
                                                <option>Undefinded</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="column">
                                <div class="field">
                                    <label class="label">Undefinded</label>
                                    <div class="control">
                                        <div class="select is-info">
                                            <select>
                                                <option>Undefinded</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="column">
                                <div class="field">
                                    <label class="label">Undefinded</label>
                                    <div class="control">
                                        <div class="select is-info">
                                            <select>
                                                <option>Undefinded</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>

                    <div class="section">
                        <div class="columns is-multiline">
                            <div class="column is-one-quarter">
                                <figure class="image is-5by3">
                                    <img src="../../images/recyclage.png">
                                </figure>
                                <legend class="is-small is-uppercase menu-label">Recyclage</legend>
                                <p class="is-small">Du 13/07/2018 au 16/07/2018</p>
                                <p class="is-small is-size-7">265 places disponibles</p>
                                <button class="button button--cardFestival"><i class='fas fa-arrow-alt-circle-right'></i>&nbsp;&nbsp;Plus d'informations</button>
                            </div>
                            <div class="column is-one-quarter">
                                <figure class="image is-5by3">
                                    <img src="../../images/welcome-people.png">
                                </figure>
                                <legend class="is-small is-uppercase menu-label">Accueil festivalier</legend>
                                <p class="is-small">Du 13/07/2018 au 16/07/2018</p>
                                <p class="is-small is-size-7">265 places disponibles</p>
                                <button class="button button--cardFestival"><i class='fas fa-arrow-alt-circle-right'></i>&nbsp;&nbsp;Plus d'informations</button>
                            </div>
                            <div class="column is-one-quarter">
                                <figure class="image is-5by3">
                                    <img src="../../images/billeterie.png">
                                </figure>
                                <legend class="is-small is-uppercase menu-label">Billeterie</legend>
                                <p class="is-small">Du 13/07/2018 au 16/07/2018</p>
                                <p class="is-small is-size-7">265 places disponibles</p>
                                <button class="button button--cardFestival"><i class='fas fa-arrow-alt-circle-right'></i>&nbsp;&nbsp;Plus d'informations</button>
                            </div>
                            <div class="column is-one-quarter">
                                <figure class="image is-5by3">
                                    <img src="../../images/montage-demontage.png">
                                </figure>
                                <legend class="is-small is-uppercase menu-label">Montage / démontage</legend>
                                <p class="is-small">Du 13/07/2018 au 16/07/2018</p>
                                <p class="is-small is-size-7">265 places disponibles</p>
                                <button class="button button--cardFestival"><i class='fas fa-arrow-alt-circle-right'></i>&nbsp;&nbsp;Plus d'informations</button>
                            </div>

                            <div class="column is-one-quarter">
                                <figure class="image is-5by3">
                                    <img src="../../images/billeterie.png">
                                </figure>
                                <legend class="is-small is-uppercase menu-label">Billeterie</legend>
                                <p class="is-small">Du 13/07/2018 au 16/07/2018</p>
                                <p class="is-small is-size-7">265 places disponibles</p>
                                <button class="button button--cardFestival"><i class='fas fa-arrow-alt-circle-right'></i>&nbsp;&nbsp;Plus d'informations</button>
                            </div>
                            <div class="column is-one-quarter">
                                <figure class="image is-5by3">
                                    <img src="../../images/recyclage.png">
                                </figure>
                                <legend class="is-small is-uppercase menu-label">Recyclage</legend>
                                <p class="is-small">Du 13/07/2018 au 16/07/2018</p>
                                <p class="is-small is-size-7">265 places disponibles</p>
                                <button class="button button--cardFestival"><i class='fas fa-arrow-alt-circle-right'></i>&nbsp;&nbsp;Plus d'informations</button>
                            </div>
                            <div class="column is-one-quarter">
                                <figure class="image is-5by3">
                                    <img src="../../images/welcome-people.png">
                                </figure>
                                <legend class="is-small is-uppercase menu-label">Accueil festivalier</legend>
                                <p class="is-small">Du 13/07/2018 au 16/07/2018</p>
                                <p class="is-small is-size-7">265 places disponibles</p>
                                <button class="button button--cardFestival"><i class='fas fa-arrow-alt-circle-right'></i>&nbsp;&nbsp;Plus d'informations</button>
                            </div>
                            <div class="column is-one-quarter">
                                <figure class="image is-5by3">
                                    <img src="../../images/montage-demontage.png">
                                </figure>
                                <legend class="is-small is-uppercase menu-label">Montage / démontage</legend>
                                <p class="is-small">Du 13/07/2018 au 16/07/2018</p>
                                <p class="is-small is-size-7">265 places disponibles</p>
                                <button class="button button--cardFestival"><i class='fas fa-arrow-alt-circle-right'></i>&nbsp;&nbsp;Plus d'informations</button>
                            </div>
                        </div>
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
