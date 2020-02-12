<template>

  <div class="card-equal-height-content">
    <div class="card-image">
      <figure class="image">
        <img :src="book.img.data" :alt="book.img.name">
      </figure>
    </div>

    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{book.title}}</p>
          <p class="is-6">
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span>{{book.author}}</span>
          </p>
          <p class="is-6">
            <span class="icon is-small is-left">
              <i class="fas fa-print"></i>
            </span>
            <span>{{book.publisher}}</span>
          </p>
          <p class="is-6">
            <span class="icon is-small is-left">
              <i class="fas fa-calendar"></i>
            </span>
            <span>
              <time datetime="2016-1-1">{{book.published_year}}</time>
            </span>
          </p>
        </div>
      </div>
    </div>

    <footer class="card-footer">
      <a @click="openPannel('detailsPannel', 'details-' + book._id, book)" class="card-footer-item has-text-primary">
        <span class="icon">
          <i class="fas fa-eye"></i>
        </span>
      </a>
      <a @click="openPannel('updatePannel', 'update-' + book._id, book)" class="card-footer-item has-text-dark">
        <span class="icon">
          <i class="fas fa-pen"></i>
        </span>
      </a>
      <a @click="deleteBook(book._id)" class="card-footer-item has-text-danger">
        <span class="icon">
          <i class="fas fa-trash"></i>
        </span>
      </a>
    </footer>
  </div>

</template>

<script>
export default {
  name: 'HomeContent',
  props: ['book'],
  data() {
    return {
      test: ''
    }
  },
  methods: {
    deleteBook(bookId) {
      this.$emit('deleteBook', bookId);
    },
    openPannel(pannel, hash, book) {
      var openPannel = {
        pannel: pannel,
        hash: hash,
        book: book
      }
      this.$emit('openPannel', openPannel);
    }
  }
}
</script>
