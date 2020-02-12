<template>
  <div>
    <NavBar></NavBar>

    <section class="hero is-fullheight-with-navbar is-light is-bold">

      <div class="hero-body">
        <div class="container">

          <div class="columns is-mobile">
            <div class="column is-6 is-offset-3">

              <h2 class="title is-2 has-text-centered">Add Book</h2>

              <div v-if="errors.notification == true" class="notification is-danger">
                <button @click="deleteButton()" class="delete"></button>
                {{errors.msg}}
              </div>

              <form @submit="onSubmit">
                <div class="field">
                  <div class="field" v-for="bookInput in booksInput" :key="bookInput.label">
                    <div class="control is-expanded has-icons-left">
                      <input class="input" type="text" :placeholder="bookInput.placeholder" :id="bookInput.label" v-model.trim="book[bookInput.label]">
                      <span class="icon is-small is-left">
                        <i class="fas" :class="bookInput.fa_icon"></i>
                      </span>
                    </div>
                  </div>
                  <div class="file has-name is-fullwidth">
                    <label class="file-label">
                      <input class="file-input" type="file" name="file" ref="file" @change="onUpload">
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label">
                          Choisir une image
                        </span>
                      </span>
                      <span class="file-name">
                        {{this.book.img.name}}
                      </span>
                    </label>
                  </div>
                </div>

                <div class="container">
                  <div class="field">
                    <button type="button" class="button is-dark is-outlined is-pulled-left" @click="$router.go(-1)">
                      <span class="icon">
                        <i class="fas fa-undo-alt"></i>
                      </span>
                      <span>Retour</span>
                    </button>
                  </div>
                  <div class="field">
                    <button type="submit" class="button is-primary is-pulled-right" :class="{'is-loading': lodding == true}">
                      <span class="icon">
                        <i class="fas fa-save"></i>
                      </span>
                      <span>Enregister</span>
                    </button>
                  </div>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>

      <div class="hero-foot">
      </div>

    </section>

  </div>
</template>

<script>
import axios from 'axios'
import NavBar from '../NavBar'

export default {
  name: 'BookAdd',
  data() {
    return {
      book: {
        isbn: '',
        title: '',
        author: '',
        description: '',
        published_year: '',
        publisher: '',
        img: {
          name: '',
          data: '',
          contentType: ''
        }
      },
      file: '',
      booksInput: [
        { 'label': 'isbn', 'placeholder': 'ISBN', 'fa_icon': 'fa-barcode' },
        { 'label': 'title', 'placeholder': 'Titre', 'fa_icon': 'fa-heading' },
        { 'label': 'author', 'placeholder': 'Autheur', 'fa_icon': 'fa-user' },
        { 'label': 'description', 'placeholder': 'Description', 'fa_icon': 'fa-align-justify' },
        { 'label': 'published_year', 'placeholder': 'Date de publication', 'fa_icon': 'fa-calendar' },
        { 'label': 'publisher', 'placeholder': 'Publieur', 'fa_icon': 'fa-print' },
      ],
      lodding: false,
      errors: []
    }
  },
  components: {
    NavBar
  },
  methods: {
    onUpload() {
      this.book.img.name = this.$refs.file.files[0].name
      this.file = this.$refs.file.files[0]
    },
    onSubmit: async function() {
      this.lodding = true
      var bookData = [];
      bookData.push(this.book)
      var formData = new FormData();
      formData.append('img', this.file)
      formData.append('book', JSON.stringify(this.book))
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
      await axios.post(process.env.ROOT_API + '/book', formData)
      .then(response => {
        this.$router.go(-1)
      })
      .catch(error => {
        console.log(error)
        this.errors = error.response.data
        }
      )
      this.lodding = false
    },
    deleteButton(errors) {
      this.errors.notification = false
    }
  },
}
</script>
