<template>
    <div>
        <NavBar></NavBar>
        <section class="hero is-white">
            <div class="container">
                <div class="columns left-navbar--home">
                    <div class="column">
                        <div class="section">
                            <h1 class="title is-uppercase">Liste des festivals</h1>
                            <hr>
                            <h2 class="subtitle">Filtrer par</h2>
                            <div class="columns">
                                <div class="column">
                                    <div class="field">
                                        <label class="label">Date</label>
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

                        <div class="content">
                            <div class="columns is-multiline">
                                <div class="column is-one-quarter">
                                    <a class="box" @click="goto('Event')">
                                        <figure class="image">
                                            <img class="is-rounded" src="https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/2e/ca/21/2eca2143-f43e-eafe-b45e-c2df9a563420/source/256x256bb.jpg" width="80" height="80" />
                                        </figure>
                                        <div class="level-item">
                                            <div class="has-text-centered">
                                                <h3 class="title is-6">Vieilles Charrues</h3>
                                                <legend class="heading">Du 13/07/2018 au 16/07/2018</legend>
                                                <p><i class="fas fa-map-pin"></i> &nbsp;&nbsp;Carhaix, Bretagne</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <nav class="pagination is-rounded" role="navigation" aria-label="pagination">
                            <a class="pagination-previous">Previous</a>

                            <ul class="pagination-list">
                                <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
                                <li><span class="pagination-ellipsis">&hellip;</span></li>
                                <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
                                <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
                                <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
                                <li><span class="pagination-ellipsis">&hellip;</span></li>
                                <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
                            </ul>

                            <a class="pagination-next">Next page</a>
                        </nav>
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
  methods: {
    goto(str) {
      this.$router.push({
        name: str
      });
    },
  }
}
</script>
