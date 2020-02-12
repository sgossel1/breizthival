<template>
  <div>

    <NavBar></NavBar>

    <section class="hero is-fullheight-with-navbar is-light is-bold">

      <div class="hero-body">
        <div class="container">

          <ul v-if="errors && errors.length">
            <li v-for="error of errors" :key="error.id">
              {{error.message}}
            </li>
          </ul>

          <section class="section">

            <div class="column is-two-fifths is-pulled-right">
              <div class="field is-grouped">
                <div class="control is-expanded has-icons-left">
                  <input class="input is-info" type="text" v-model="searchText" placeholder="Rechercher">
                  <span class="icon is-small is-left">
                    <i class="fas fa-search"></i>
                  </span>
                </div>
                <div class="control">
                  <div class="select">
                    <select v-model="searchColumn">
                      <option disabled value="">Sélectionner une colonne</option>
                      <option v-for="column in columns" :key="column.label" :value="column.label">{{column.abbr}}</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <button type="button" class="button" v-bind:disabled="$route.path == '/list' || '/book'">
                    <span class="icon">
                      <i class="fas fa-table"></i>
                    </span>
                  </button>
                </div>
                <div class="control">
                  <button type="button" class="button" @click="grid()">
                    <span class="icon">
                      <i class="fas fa-th"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <table class="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th v-for="column in columns" :key="column.label" @click="sort(column.label)">
                    <abbr @click="currentSortDir = currentSortDir * (-1)">{{column.abbr}}</abbr>
                    <span v-if="currentSort == column.label" class="icon">
                      <span v-show="currentSortDir">
                        <i class="fas fa-sort-up"></i>
                      </span>
                      <span v-show="!currentSortDir">
                        <i class="fas fa-sort-down"></i>
                      </span>
                    </span>
                    <span v-show="currentSort != column.label">
                      <i class="fas fa-sort"></i>
                    </span>
                  </th>
                  <th><abbr>Action</abbr></th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th v-for="column in columns" :key="column.label">
                    <abbr>{{column.abbr}}</abbr>
                  </th>
                  <th><abbr>Action</abbr></th>
                </tr>
              </tfoot>
              <tbody>
                <tr v-for="book in Books" :key="book._id">
                  <td v-for="column in columns" :key="column.label">{{book[column.label]}}</td>
                  <td>
                    <router-link :to="{name: 'BookDetails', params: { bookDetails: book, id: book._id }}">
                      <button class="button is-small is-outlined">
                        <span class="icon">
                          <i class="fas fa-eye"></i>
                        </span>
                        <span>Afficher</span>
                      </button>
                    </router-link>
                    <button @click="deleteBook(book._id)" class="button is-danger is-small is-outlined" :class="{'is-loading': lodding.delete.id == book._id}">
                      <span class="icon">
                        <i class="fas fa-trash"></i>
                      </span>
                      <span>Supprimer</span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td colspan="5">
                    <a @click="addBook()">
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

          </section>

          <router-view></router-view>

        </div>
      </div>

      <div class="hero-foot">
      </div>

    </section>

    <div class="pageloader" :class="{'is-active': lodding.page == true}"><span class="title">Chargement</span></div>

  </div>
</template>

<script>
import axios from 'axios';
import NavBar from '../NavBar';

export default {
  name: 'BookList',
  data() {
    return {
      books: [],
      columns: [
        { 'label': 'title', 'abbr': 'Titre' },
        { 'label': 'author', 'abbr': 'Auteur' },
        { 'label': 'published_year', 'abbr': 'Date de publication' },
        { 'label': 'publisher', 'abbr': 'Publieur' },
      ],
      currentSort: '',
      currentSortDir: 0,
      searchText: '',
      searchColumn: '',
      lodding: {
        delete: { id: '' },
        page: false
      },
      errors: []
    }
  },
  components: {
    NavBar
  },
  created: function() {
    this.getBooksList();
  },
  methods: {
    getBooksList: async function() {
      this.lodding.page = true
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
      await axios.get(process.env.ROOT_API + '/book')
      .then(response => {
        this.books = response.data;
      })
      .catch(e => {
        this.errors.push(e)
        if (e.response.status === 401) {
          this.$router.push({
            name: 'Login'
          })
        }
      })
      this.lodding.page = false
    },
    refreshList() {
      this.getBooksList();
    },
    sort: function(s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 0 ? 1: 0;
      }
      this.currentSort = s;
    },
    grid() {
      this.$router.push({
        name: 'Home'
      })
    },
    addBook() {
      this.$router.push({
        name: 'BookAdd'
      })
    },
    deleteBook: async function(id) {
      this.lodding.delete.id = id
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
      await axios.delete(process.env.ROOT_API + '/book/' + id)
      .then(response => {
        this.refreshList();
      })
      .catch(error => {
        console.log(error)
        this.errors = error.response.data
        }
      )
      this.lodding.delete.id = false
    }
  },
  computed: {
    Books: function(data) {
      data.books.sort((a, b) => {
        let modifier = 1;
        if (this.currentSortDir === 1) modifier = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
      return data.books.filter(book => {
        var nameColumn
        if (!this.searchColumn) nameColumn = 'title';
        else nameColumn = this.searchColumn;
        return book[nameColumn].toLowerCase().includes(this.searchText.toLowerCase())
      });
    }
  }
}
</script>
