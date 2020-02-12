<template>
  <div>
    <NavBar></NavBar>

    <section class="hero is-white">
        <div class="hero-body">
            <div class="container">
                <div class="title-form-signup has-text-centered">
                    <h1 class="title">Connexion</h1>
                    <h2 class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nobis!</h2>
                </div>
                <form class="container-form-signup" @submit="onSubmit">
                  <div v-if="errors.notification == true" class="notification is-danger">
                    <button @click="deleteButton()" class="delete"></button>
                    {{errors.msg}}
                  </div>
                    <div class="fields-form-signup">
                        <div class="field">
                            <label class="label">Adresse email</label>
                            <div class="control has-icons-left">
                            <input class="input is-large" type="text" placeholder="johndoe@mail.fr" v-model.trim="login.email">
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Mot de passe</label>
                            <div class="control has-icons-left">
                            <input class="input is-large" type="password" placeholder="" v-model.trim="login.password">
                            </div>
                        </div>

                        <div class="field">
                            <div class="control is-expanded">
                            <button class="button is-medium is-link is-fullwidth" :class="{'is-loading': loadding == true}">
                                <span class="icon is-small">
                                    <i class="fas fa-lock"></i>
                                </span>
                                <span>Connexion</span>
                            </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import NavBar from '../NavBar'
import Footer from '../Footer'

export default {
  name: 'Login',
  data() {
    return {
      login: {},
      loadding: false,
      errors: ''
    }
  },
  components: {
    NavBar,
    Footer
  },
  methods: {
    onSubmit(evt, lodding) {
      this.loadding = true
      evt.preventDefault()
      axios.post(process.env.ROOT_API + '/user/login/', this.login)
      .then(response => {
        localStorage.setItem('jwtToken', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        this.$router.push({
          name: 'Home'
        })
      })
      .catch(error => {
        console.log(error)
        this.errors = error.response.data
      })
      this.loadding = false
    },
    register() {
      this.$router.push({
        name: 'Register'
      })
    },
    forgot_password() {
      this.$router.push({
        name: 'ForgotPassword'
      })
    },
    deleteButton(errors) {
      this.errors.notification = false
    }
  }
}
</script>
