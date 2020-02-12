<template>
  <div>

    <NavBar></NavBar>

    <section class="hero is-fullheight-with-navbar is-light">
      <div class="hero-head">
        <div class="container">

          <ul v-if="errors && errors.length">
            <li v-for="error of errors" :key="error.id">
              {{error.message}}
            </li>
          </ul>

        </div>
      </div>

      <div class="hero-body columns is-mobile">
        <div class="column is-10 is-offset-1">
          <section class="section has-background-white">
            <div class="container">

              <div class="columns is-mobile">
                <div class="column is-one-quarter">
                  <h1 class="title">Information</h1>
                </div>

                <div class="is-divider-vertical"></div>

                <div v-if="updateUser.infos == false" class="column">
                  <div v-if="notification.infos == 'success'" class="notification is-success">
                    <button @click="deleteButton('infos')" class="delete"></button>
                    {{notification.msg}}
                  </div>
                  <p class="is-4">Adresse mail : {{user.email}}</p>
                  <p class="is-4">Role utilisateur : {{user.role}}</p>
                  <div class="field is-grouped is-grouped-right">
                    <div class="control">
                      <button type="button" @click="update('infos')" class="button is-small is-primary is-outlined">
                        <span class="icon">
                          <i class="fas fa-pen"></i>
                        </span>
                        <span>Mettre à jour</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div v-else-if="updateUser.infos == true" class="column">
                  <UserAccountUpdateInfos v-bind:user="user" :key="user._id" @cancel="cancel"></UserAccountUpdateInfos>
                </div>
              </div>

              <div class="columns is-mobile">
                <div class="column is-one-quarter">
                  <h1 class="title">Changer de mot de passe</h1>
                </div>

                <div class="is-divider-vertical"></div>

                <div class="column">
                  <UserAccountChangePassword v-bind:user="user" :key="user._id" @cancel="cancel"></UserAccountChangePassword>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>

    </section>

    <div class="pageloader" :class="{'is-active': lodding.page == true}"><span class="title">Chargement</span></div>

  </div>
</template>

<script>
import axios from 'axios';
import NavBar from '../NavBar';
import UserAccountUpdateInfos from './UserAccountUpdateInfos'
import UserAccountChangePassword from './UserAccountChangePassword'

export default {
  name: 'UserAccount',
  components: {
    NavBar,
    UserAccountUpdateInfos,
    UserAccountChangePassword
  },
  data() {
    return {
      user: '',
      updateUser: {
        infos: false
      },
      lodding: {
        page: false
      },
      notification: {
        infos: '',
        msg: ''
      },
      errors: []
    }
  },
  created: function() {
    this.getInfos()
  },
  methods: {
    getInfos: async function() {
      this.lodding.page = true
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
      await axios.get(process.env.ROOT_API + '/user/infos/')
      .then(response => {
        this.user = response.data
      })
      .catch(error => {
        console.log(error)
        this.errors = error.response.data
        if (error.response.status === 401) {
          this.$router.push({
            name: 'Login'
          })
        }
      })
      this.lodding.page = false
    },
    update(value) {
      this.updateUser[value] = true
    },
    cancel(value) {
      this.getInfos()
      this[value.block][value.pannel] = false
      this.notification[value.pannel] = value.notification
      this.notification.msg = value.msg
    },
    deleteButton(name) {
      this.notification[name] = ''
    },
  }
}
</script>
