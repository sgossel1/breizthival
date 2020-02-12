<template>
    <div>
    <NavBar></NavBar>

    <section class="hero is-white">
        <div class="hero-body">
            <div class="container">
                <div class="level">
                    <h1 class="title level-item">Créer un compte gratuit</h1>
                    <!-- <i class="fas fa-angle-right"></i>
                    <div class="level-item has-text-grey">Parlez-nous de vous</div>
                    <i class="fas fa-angle-right has-text-grey"></i>
                    <div class="level-item has-text-grey">Vérifiez votre identité</div> -->
                </div>
                <hr>
                <div class="title-form-signup has-text-centered">
                    <div class="party"></div>
                    <h1 class="subtitle">S'inscrire ne prends que quelques secondes...</h1>
                    <!-- <h2 class="subtitle">Pour assurer experience sécurisée et conviviale, nous vérifions l'identité de chaque personne.<br>Pensez donc à préparer un scan de votre d'identité !</h2> -->
                </div>
                <form class="container-form-signup" @submit="onSubmit">
                    <div v-if="errors.notification == true" class="notification is-danger">
                      <button @click="deleteButton()" class="delete"></button>
                      {{errors.msg}}
                    </div>
                    <div class="fields-form-signup">
                        <div class="field">
                            <label class="label">Votre adresse email</label>
                            <div class="control has-icons-left">
                            <input class="input is-large" type="email" placeholder="johndoe@mail.fr" v-model.trim="register.email">
                            <span class="icon is-small is-left">
                              <i class="fas fa-envelope"></i>
                            </span>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Choisissez un mot de passe</label>
                            <div class="control has-icons-left">
                            <input class="input is-large" type="password" placeholder="" v-model.trim="register.password">
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            </div>
                        </div>

                        <div class="field has-text-centered">
                            <label class="label">Vous êtes :</label>
                            <label class="radio">
                              <input type="radio" name="foobar" value="benevole" v-model.trim="register.role" checked>
                              Un bénévole
                            </label>
                            <label class="radio">
                              <input type="radio" name="foobar" value="association" v-model.trim="register.role">
                              Une association
                            </label>
                            <label class="radio">
                              <input type="radio" name="foobar" value="evenement" v-model.trim="register.role">
                              Un évènement
                            </label>
                        </div>

                        <div class="field has-padding-top-2">
                            <div class="control is-expanded">
                            <button type="submit" class="button is-medium is-link is-fullwidth">
                                <span class="icon is-small">
                                    <i class="fas fa-lock"></i>
                                </span>
                                <span>Créer un compte</span>
                            </button>
                            </div>
                        </div>
                        <div class="control">
                            <p class="has-text-centered">En créant un compte, vous acceptez nos Conditions d'Utilisation.</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <Footer></Footer>

    <!-- <section class="hero is-fullheight-with-navbar is-light is-bold">

      <div class="hero-body">
        <div class="container">

          <div class="columns is-mobile">
            <div class="column is-4 is-offset-4">

              <h2 class="title is-2 has-text-centered">Please Register</h2>

              <div v-if="errors.notification == true" class="notification is-danger">
                <button @click="deleteButton()" class="delete"></button>
                {{errors.msg}}
              </div>

              <form @submit="onSubmit">
                <div class="field">
                  <div class="field">
                    <div class="control is-expanded has-icons-left has-icons-right">
                      <input class="input" :class="{'is-danger': errors.email == false}" type="mail" placeholder="Enter Email" id="mail" v-model.trim="register.email">
                      <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                      </span>
                       <div v-if="errors.email == false">
                        <span class="icon is-small is-right">
                          <i class="fas fa-exclamation-triangle"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="field">
                    <div class="control is-expanded has-icons-left has-icons-right">
                      <input class="input" :class="{'is-danger': errors.password == false}" type="password" placeholder="Enter Password" id="password" v-model.trim="register.password">
                      <span class="icon is-small is-left">
                        <i class="fas fa-key"></i>
                      </span>
                      <div v-if="errors.password == false">
                        <span class="icon is-small is-right">
                          <i class="fas fa-exclamation-triangle"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="field">
                    <div class="control is-expanded has-icons-left has-icons-right">
                      <input class="input" :class="{'is-danger': errors.role == false}" type="text" placeholder="Enter role" id="role" v-model.trim="register.role">
                      <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                      </span>
                      <div v-if="errors.role == false">
                        <span class="icon is-small is-right">
                          <i class="fas fa-exclamation-triangle"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="field is-grouped">
                  <div class="control">
                    <button type="submit" class="button is-primary" :class="{'is-loading': lodding == true}">
                      Register
                    </button>
                    <button type="button" class="button is-dark is-outlined" @click="$router.go(-1)">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section> -->

  </div>
</template>

<script>
import axios from 'axios'
import NavBar from '../NavBar'
import Footer from '../Footer'

export default {
  name: 'Register',
  data() {
    return {
      register: {},
      lodding: false,
      errors: ''
    }
  },
  components: {
    NavBar,
    Footer,
  },
  methods: {
    onSubmit(evt) {
      this.lodding = true
      evt.preventDefault()
      axios.post(process.env.ROOT_API + '/user/register/', this.register)
      .then(response => {
        this.$router.push({
          name: 'Login'
        })
      })
      .catch(error => {
        console.log(error)
        this.errors = error.response.data
      })
      this.lodding = false
    },
    deleteButton(errors) {
      this.errors.notification = false
    }
  }
}
</script>
