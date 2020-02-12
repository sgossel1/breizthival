<template>

  <div class="columns is-mobile is-vcentered">
    <div class="column" v-if="newBook.img.data">
      <div class="card-image">
        <figure class="image">
          <img :src="newBook.img.data" :alt="newBook.img.name">
        </figure>
      </div>
    </div>

    <div class="column" :class="['is-two-thirds', (newBook.img.data) ? newBook.img.data : 'is-8 is-offset-2']">
      <section class="section">

        <div class="content">
          <div class="has-text-right">
            <a class="has-text-dark" @click="closePannel(pannel, false)">
              <span class="icon is-large is-right">
                <i class="far fa-2x fa-times-circle"></i>
              </span>
            </a>
          </div>
        </div>

        <div v-if="errors.notification == true" class="notification is-danger">
          <button @click="deleteButton()" class="delete"></button>
          {{errors.msg}}
        </div>

        <form @submit="onSubmit">
          <div class="field">
            <div class="field" v-for="bookInput in booksInput" :key="bookInput.label">
              <div class="control is-expanded has-icons-left">
                <input class="input" type="text" :id="bookInput.label" :placeholder="bookInput.placeholder" v-model.trim="newBook[bookInput.label]">
                <span class="icon is-small is-left">
                  <i class="fas" :class="bookInput.fa_icon"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control is-expanded has-icons-right">
                <textarea class="textarea" id="description" placeholder="Description" v-model.trim="newBook.description"></textarea>
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
                  {{this.newBook.img.name}}
                </span>
              </label>
            </div>
          </div>

          <div class="container">
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

      </section>
    </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'HomeAdd',
  props: ['book', 'pannel'],
  data() {
    return {
      newBook: {
        isbn: '',
        title: '',
        author: '',
        description: '',
        published_year: '',
        publisher: '',
        img: {
          name: '',
          data: '',
        }
      },
      bookUpdateId: '',
      booksInput: [
        { 'label': 'isbn', 'placeholder': 'ISBN', 'fa_icon': 'fa-barcode' },
        { 'label': 'title', 'placeholder': 'Titre', 'fa_icon': 'fa-heading' },
        { 'label': 'author', 'placeholder': 'Autheur', 'fa_icon': 'fa-user' },
        { 'label': 'published_year', 'placeholder': 'Date de publication', 'fa_icon': 'fa-calendar' },
        { 'label': 'publisher', 'placeholder': 'Publieur', 'fa_icon': 'fa-print' },
      ],
      lodding: false,
      errors: []
    }
  },
  created: function() {
    if (this.pannel === 'update') {
      this.bookUpdateId = this.book._id
      this.newBook = {
        isbn: this.book.isbn,
        title: this.book.title,
        author: this.book.author,
        description: this.book.description,
        published_year: this.book.published_year,
        publisher: this.book.publisher,
        img: {
          name: this.book.img.name,
          data: this.book.img.data,
        }
      }
    }
  },
  methods: {
    onUpload() {
      var input = event.target;
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = (event) => {
              this.newBook.img.data = event.target.result;
              this.newBook.img.name = input.files[0].name
          }
          reader.readAsDataURL(input.files[0]);
      }
    },
    onSubmit: async function() {
      this.lodding = true
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
      var apiPath = ''
      if (this.pannel === 'add') {
        apiPath = '/book'
      } else if (this.pannel === 'update') {
        apiPath = '/book/' + this.bookUpdateId
      }
      await axios.post(process.env.ROOT_API + apiPath, this.newBook)
      .then(response => {
        this.closePannel(this.pannel, true);
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
    },
    closePannel(pannel, refreshList) {
      var closePannel = {
        pannel: pannel,
        refreshList: refreshList
      }
      this.$emit('closePannel', closePannel)
    }
  }
}
</script>
