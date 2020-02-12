<template>
  <div>
    <NavBar></NavBar>

    <section class="hero is-fullheight-with-navbar is-light is-bold">

      <div class="hero-body">
        <div class="container">

          <div class="columns is-mobile">
            <div class="column is-4 is-offset-4">

              <h2 class="title is-2 has-text-centered">Change Password</h2>

              <div v-if="errors.notification == true" class="notification is-danger">
                <button @click="deleteButton()" class="delete"></button>
                {{errors.msg}}
              </div>

              <form @submit="onSubmit">
                <div class="field">
                  <p class="control is-expanded has-icons-left">
                    <input class="input" type="password" placeholder="Enter new password" id="password" v-model.trim="changePassword.password">
                    <span class="icon is-small is-left">
                      <i class="fas fa-key"></i>
                    </span>
                  </p>
                </div>

                <div class="field is-grouped">
                  <div class="control">
                    <button type="submit" class="button is-primary" :class="{'is-loading': lodding == true}">
                      Change
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
  name: 'ChangePassword',
  data() {
    return {
      changePassword: {},
      lodding: false,
      errors: ''
    }
  },
  components: {
    NavBar
  },
  methods: {
    onSubmit(evt) {
      this.lodding = true
      evt.preventDefault()
      axios.post(process.env.ROOT_API + '/user/change_password/', this.changePassword)
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
  },
  mounted: function() {
    this.changePassword.token = this.$route.query.token;
  }
}
</script>
