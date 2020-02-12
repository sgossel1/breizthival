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
              <input class="input" :class="{'is-danger': errors.email == false}" type="mail" placeholder="Adresse mail" id="mail" v-model.trim="newinfos.email">
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
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button type="submit" class="button is-small is-primary" :class="{'is-loading': lodding == true}">
              Enregistrer
            </button>
            <button type="button" class="button is-small is-dark is-outlined" @click="cancel()">
              Annuler
            </button>
          </div>
        </div>
      </form>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  props: ['user'],
  data() {
    return {
      newinfos: {
        email: ''
      },
      userUpdateId: '',
      lodding: false,
      notification: {
        name: '',
        msg: ''
      },
      errors: ''
    }
  },
  created: function() {
    this.userUpdateId = this.user._id
    this.newinfos = {
      email: this.user.email
    }
  },
  methods: {
    onSubmit: async function(evt) {
      this.lodding = true
      evt.preventDefault()
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
      await axios.post(process.env.ROOT_API + '/user/update/infos/' + this.userUpdateId, this.newinfos)
      .then(response => {
        this.cancel()
      })
      .catch(error => {
        console.log(error)
        this.notification.name = 'error'
        this.notification.msg = error.response.data.msg
      })
      this.lodding = false
    },
    deleteButton() {
      this.notification.name = ''
    },
    cancel() {
      var cancel = {
        block: 'updateUser',
        pannel: 'infos',
        notification: 'success',
        msg: 'Mise à jour effectué'
      }
      this.$emit('cancel', cancel)
    }
  }
}
</script>
