<template>
  <div>

    <div v-if="notification.name" class="notification"
      :class="{'is-danger': notification.name == 'error', 'is-success': notification.name == 'success'}"
    >
      <button @click="deleteButton()" class="delete"></button>
      {{notification.msg}}
    </div>

    <form @submit="onSubmit">
      <div class="field">
        <div class="field">
          <div class="control is-expanded has-icons-left has-icons-right">
            <input class="input" :class="{'is-danger': errors.password.msg}" type="password" placeholder="Entrer un nouveau mot de passe"
              id="password1" v-model.trim="newPassword.password"
            >
            <span class="icon is-small is-left">
              <i class="fas fa-key"></i>
            </span>
            <div v-if="errors.password.msg">
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle has-text-danger"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control is-expanded has-icons-left has-icons-right">
            <input class="input" :class="{'is-danger': errors.password.msg}" type="password" placeholder="Une deuxième fois"
              id="password2" v-model.trim="newPassword.password2"
            >
            <span class="icon is-small is-left">
              <i class="fas fa-key"></i>
            </span>
            <div v-if="errors.password.msg">
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle has-text-danger"></i>
              </span>
              <p class="help is-danger">{{errors.password.msg}}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-small is-primary" :class="{'is-loading': loading == true}">
            <span>Enregistrer</span>
          </button>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ChangePassword',
  props: ['user'],
  data() {
    return {
      newPassword: {
        password: '',
        password2: ''
      },
      userUpdateId: '',
      loading: false,
      notification: {
        name: '',
        msg: ''
      },
      errors: {
        password: {
          msg: ''
        }
      }
    }
  },
  created: function() {
    this.userUpdateId = this.user._id
  },
  methods: {
    onSubmit: async function(evt) {
      this.lodding = true
      evt.preventDefault()
      this.errors.password.msg = ''
      if (this.newPassword.password !== this.newPassword.password2) {
        this.errors.password.msg = 'Les mots de passe de corresponde pas'
      } else {
        var newPassword = {
          password: this.newPassword.password
        }
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
        await axios.post(process.env.ROOT_API + '/user/update/password/' + this.userUpdateId, newPassword)
        .then(response => {
          this.notification.name = 'success'
          this.notification.msg = 'Mise à jour effectué'
          this.newPassword.password = ''
          this.newPassword.password2 = ''
        })
        .catch(error => {
          console.log(error)
          this.notification.name = 'error'
          this.notification.msg = error.response.data.msg
        })
      }
      this.lodding = false
    },
    deleteButton() {
      this.notification.name = ''
    }
  }
}
</script>
