<template>

  <table class="table is-striped is-fullwidth">
    <thead>
      <tr>
        <th v-for="column in keys" :key="column.label" @click="sort(column.label)">
          <abbr @click="listSortDir = listSortDir * (-1)">{{column.abbr}}</abbr>
          <span v-if="listSort == column.label" class="icon">
            <span v-show="listSortDir">
              <i class="fas fa-sort-up"></i>
            </span>
            <span v-show="!listSortDir">
              <i class="fas fa-sort-down"></i>
            </span>
          </span>
          <span v-show="listSort != column.label">
            <i class="fas fa-sort"></i>
          </span>
        </th>
        <th><abbr>Action</abbr></th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th v-for="column in keys" :key="column.label">
          <abbr>{{column.abbr}}</abbr>
        </th>
        <th><abbr>Action</abbr></th>
      </tr>
    </tfoot>
    <tbody>
      <tr v-for="book in Books" :key="book._id">
        <td v-for="column in keys" :key="column.label">{{book[column.label]}}</td>
        <td>
          <button @click="openPannel('detailsPannel', 'details-' + book._id, book)" type="button" class="button is-small is-outlined">
            <span class="icon">
              <i class="fas fa-eye"></i>
            </span>
            <span>Afficher</span>
          </button>
          <button @click="openPannel('updatePannel', 'update-' + book._id, book)" type="button" class="button is-primary is-small is-outlined">
            <span class="icon">
              <i class="fas fa-pen"></i>
            </span>
            <span>Modifier</span>
          </button>
          <button @click="deleteBook(book._id)" class="button is-danger is-small is-outlined"
            :class="{'is-loading': lodding.delete.id == book._id}"
          >
            <span class="icon">
              <i class="fas fa-trash"></i>
            </span>
            <span>Supprimer</span>
          </button>
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <a @click="openPannel('addPannel', 'add')">
            <p class="is-vertical-center has-text-primary">
              <span class="icon is-small">
                <i class="fas fa-plus"></i>
              </span>
              <span>Ajouter un livre</span>
            </p>
          </a>
        </td>
      </tr>
    </tbody>
  </table>

</template>

<script>
export default {
  name: 'HomeContent',
  props: ['books'],
  data() {
    return {
      keys: [
        { 'label': 'title', 'abbr': 'Titre' },
        { 'label': 'author', 'abbr': 'Auteur' },
        { 'label': 'published_year', 'abbr': 'Date de publication' },
        { 'label': 'publisher', 'abbr': 'Publieur' },
      ],
      listSort: '',
      listSortDir: '',
      lodding: {
        delete: { id: '' },
      },
      errors: []
    }
  },
  methods: {
    sort: function(s) {
      if (s === this.listSort) {
        this.listSortDir = this.listSortDir === 0 ? 1: 0;
      }
      this.listSort = s;
    },
    deleteBook(bookId) {
      this.lodding.delete.id = bookId
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
  },
  computed: {
    Books: function() {
      let books = this.books
      books.sort((a, b) => {
        let modifier = 1;
        if (this.listSortDir === 1) modifier = -1;
        if (a[this.listSort] < b[this.listSort]) return -1 * modifier;
        if (a[this.listSort] > b[this.listSort]) return 1 * modifier;
        return 0;
      });
      return books
    }
  }
}
</script>
