<template>

  <section class="hero">

    <div class="card">
      <div class="columns">

        <div class="column">
          <div class="card-image">
            <figure class="image">
              <img :src="book.img.data" :alt="book.img.name">
            </figure>
          </div>
        </div>

        <div class="column is-two-thirds">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <h1 class="title">
                  {{book.title}}
                </h1>
                <h2 class="subtitle">
                  {{book.description}}
                </h2>
              </div>
            </div>

            <div class="content">
              <p v-for="bookInfos in booksInfos" :key="bookInfos.key">
                <span class="icon is-small is-left">
                  <i class="fas" :class="bookInfos.fa_icon"></i>
                </span>
                <span>{{bookInfos.label}}: {{book[bookInfos.key]}}</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

  </section>

</template>

<script>
import axios from 'axios';

export default {
  name: 'BookDetails',
  props: ['bookDetails'],
  data() {
    return {
      getBook: '',
      booksInfos: [
        { 'key': 'author', 'label': 'Autheur', 'fa_icon': 'fa-user' },
        { 'key': 'published_year', 'label': 'Date de publication', 'fa_icon': 'fa-calendar' },
        { 'key': 'publisher', 'label': 'Publieur', 'fa_icon': 'fa-print' },
        { 'key': 'isbn', 'label': 'isbn', 'fa_icon': 'fa-barcode' },
      ]
    }
  },
  mounted: async function() {
    if (!this.bookDetails) {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
      await axios.get(process.env.ROOT_API + '/book/' + this.$route.params.id)
      .then(response => {
        this.getBook = response.data
      })
      .catch(error => {
        console.log(error)
        this.errors = error.response.data
        }
      )
    }
  },
  computed: {
    book: function() {
      if (this.bookDetails) {
        return this.bookDetails;
      } else {
        return this.getBook
      }
    }
  }
}
</script>
