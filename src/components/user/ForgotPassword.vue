<template>
  <div>
    <NavBar></NavBar>

    <section class="hero is-fullheight-with-navbar is-light is-bold">

      <div class="hero-body">
        <div class="container">

          <div class="columns is-mobile">
            <div class="column is-4 is-offset-4">

              <h2 class="title is-2 has-text-centered">Forgot Password</h2>

              <div v-if="errors && errors.length">
                <div v-for="error of errors" :key="error.id">
                  <b-alert show>{{error.message}}</b-alert>
                </div>
              </div>

              <form @submit="onSubmit">
                <div class="field">
                  <p class="control is-expanded has-icons-left">
                    <input class="input" type="text" placeholder="Enter Email" id="email" v-model.trim="forgotPassword.email">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </p>
                </div>

                <div class="field is-grouped">
                  <div class="control">
                    <button type="submit" class="button is-primary">
                      Envoyer par email
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
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import NavBar from '../NavBar'

export default {
  name: 'ForgotPassword',
  data() {
    return {
      forgotPassword: {},
      errors: []
    }
  },
  components: {
    NavBar
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      axios.post(process.env.ROOT_API + '/user/forgot_password/', this.forgotPassword)
      .then(response => {
        this.$router.push({
          name: 'Login'
        })
      })
      .catch(e => {
        console.log(e)
        this.errors.push(e)
      })
    },
  }
}
</script>
