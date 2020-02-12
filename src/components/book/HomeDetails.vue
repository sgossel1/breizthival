<template>

  <div class="columns is-vcentered">

    <div class="column">
      <div class="card-image">
        <figure class="image">
          <img :src="book.img.data" :alt="book.img.name">
        </figure>
      </div>
    </div>

    <div class="column" :class="gridListSizesClass(gridListShow)">
      <div class="card-content">

        <div class="content">
          <div class="has-text-right">
            <a class="has-text-dark" @click="closePannel(pannel)">
              <span class="icon is-large is-right">
                <i class="far fa-2x fa-times-circle"></i>
              </span>
            </a>
          </div>
        </div>

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

        <div class="field is-grouped is-grouped-right">
          <div class="control">
            <button type="button" @click="updatePannel(book)" class="button is-primary is-outlined">
              <span class="icon">
                <i class="fas fa-pen"></i>
              </span>
              <span>Modifier</span>
            </button>
          </div>
          <div class="control">
            <button type="button" @click="deleteBook(book._id)" class="button is-danger is-outlined" :class="{'is-loading': lodding == true}">
              <span class="icon">
                <i class="fas fa-trash"></i>
              </span>
              <span>Supprimer</span>
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'HomeDetails',
  props: ['book', 'pannel', 'gridListShow'],
  data() {
    return {
      booksInfos: [
        { 'key': 'author', 'label': 'Autheur', 'fa_icon': 'fa-user' },
        { 'key': 'published_year', 'label': 'Date de publication', 'fa_icon': 'fa-calendar' },
        { 'key': 'publisher', 'label': 'Publieur', 'fa_icon': 'fa-print' },
        { 'key': 'isbn', 'label': 'isbn', 'fa_icon': 'fa-barcode' },
      ],
      lodding: false,
    }
  },
  methods: {
    gridListSizesClass(gridListShow) {
      let columnSizes = ''
      if (gridListShow === 'grid') columnSizes = 'is-half'
      if (gridListShow === 'list') columnSizes = 'is-two-thirds'
      return columnSizes
    },
    updatePannel(book) {
      var updatePannel = {
        pannel: 'updatePannel',
        hash: 'update-' + book._id,
        book: book
      }
      this.$emit('updatePannel', updatePannel)
    },
    deleteBook(bookId) {
      this.lodding = true;
      this.$emit('deleteBook', bookId);
    },
    closePannel(pannel) {
      var closePannel = {
        pannel: pannel
      }
      this.$emit('closePannel', closePannel)
    }
  }
}
</script>
