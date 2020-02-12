<template>
  <section class="hero" :class="{'has-background-danger': active.home==true ? '' : 'is-fullheight'}">
      <div class="hero-head">
          <header class="navbar">
              <div class="container">
                  <div class="navbar-brand">
                      <a href="./" class="navbar-item">
                          <span class="is-size-1 has-text-white">
                            <i class="fas fa-stroopwafel"></i>
                          </span>
                          &nbsp;&nbsp;
                          <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
                      </a>
                      <span class="navbar-burger burger" data-target="navbarMenuHeroC">
                          <span></span>
                          <span></span>
                          <span></span>
                      </span>
                  </div>
                  <div id="navbarMenuHeroC" class="navbar-menu">
                      <div class="navbar-end">
                          <a @click="goto('Home')" class="navbar-item has-text-white" :class="{'is-active': active.home==true}">Accueil</a>
                          <a @click="goto('Missions')" class="navbar-item has-text-white" :class="{'is-active': active.mission==true}">Les missions</a>
                          <a @click="goto('Festivals')" class="navbar-item has-text-white" :class="{'is-active': active.festival==true}">Les festivals</a>
                          <a @click="goto('Partnaires')" class="navbar-item has-text-white" :class="{'is-active': active.partenaire==true}">Partenaires</a>
                          <span v-if="User" class="navbar-item has-text-white">
                            {{User.role == 'benevole' ? User.user_info.fristname : User.user_infos.name}}
                          </span>
                          <span class="navbar-item">
                              <a class="button is-white is-outlined" @click="goto('Login')">
                                  <span class="icon"><i class="fas fa-sign-in-alt"></i></span>
                                  <span>Connexion</span>
                              </a>
                          </span>
                          <span class="navbar-item">
                            <!-- SI Page d'accueil -->
                            <!-- <a href="register.html" class="button is-danger"> -->
                              <a :class="[active.home ? 'button is-danger' : '', 'button is-link']" @click="goto('Register')">
                                  <span class="icon"><i class="far fa-address-card"></i></span>
                                  <span>Inscription</span>
                              </a>
                          </span>
                          <!-- SI Connecté -->
                          <!-- <span class="navbar-item">
                              <a class="button is-white is-outlined" @click="logout()">
                                  <span class="icon"><i class="fas fa-sign-out-in-alt"></i></span>
                                  <span>Déconnexion</span>
                              </a>
                          </span> -->
                      </div>
                  </div>
              </div>
          </header>
      </div>
  </section>

</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      token: {},
      User,
    }
  },
  created: function() {
    console.log(this.$router.currentRoute.path);
    this.token = localStorage.getItem('jwtToken');
    this.User = localStorage.getItem('user');
  },
  methods: {
    logout() {
      localStorage.removeItem('jwtToken');
      this.$router.push({
        name: 'Login'
      });
    },
    goto(str) {
      this.$router.push({
        name: str
      });
    },
    home() {
      this.$router.push({
        name: 'Home'
      });
    },
    userAccount() {
      this.$router.push({
        name: 'UserAccount'
      });
    }
  },
  computed: {
    active: function() {
      var active = {
        home: false,
        mission: false,
        festival: false,
        partenaire: false

      };
      if (this.$router.currentRoute.path === '/') active.home = true
      if (this.$router.currentRoute.path === '/missions') active.mission = true
      if (this.$router.currentRoute.path === '/festivals') active.festival = true
      if (this.$router.currentRoute.path === '/partenaires') active.partenaire = true
      return active
    }
  }
}
</script>
