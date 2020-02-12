<template>
  <div>
    <!-- <section class="hero is-fullheight-with-navbar is-light is-bold">

      <div class="hero-head has-background-white">
        <NavBar></NavBar>
      </div>

      <div class="hero-body">
        <div class="container">

          <ul v-if="errors && errors.length">
            <li v-for="error of errors" :key="error.id">
              {{error.message}}
            </li>
          </ul>

          <div class="columns is-mobile">
            <div class="container">
              <div class="field is-three-fifths is-pulled-right">
                <div class="notification has-background-white-bis">
                <div class="field is-grouped">
                  <div class="control is-expanded has-icons-left">
                    <input class="input is-info" type="text" v-model="searchText" placeholder="Rechercher">
                    <span class="icon is-small is-left">
                      <i class="fas fa-search"></i>
                    </span>
                  </div>
                  <div class="control">
                    <div class="select">
                      <select v-model="gridSort">
                        <option disabled value="">Trier par</option>
                        <option v-for="key in keys" :key="key.label" :value="key.label">{{key.abbr}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="control">
                    <button type="button" class="button" :class="{'is-active': listShow == true}" @click="gridListShow('list')">
                      <span class="icon">
                        <i class="fas fa-table"></i>
                      </span>
                    </button>
                  </div>
                  <div class="control">
                    <button type="button" class="button" :class="{'is-active': gridShow == true}" @click="gridListShow('grid')">
                      <span class="icon">
                        <i class="fas fa-th"></i>
                      </span>
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="gridShow == true" class="columns is-multiline">
            <div v-for="book in Books" :key="book._id" class="column" :class="columnSizesClass('detailsUpdate', book._id)">

              <div v-if="detailsPannel == book._id" :id="'details-' + book._id" class="card card-show">
                <HomeDetails v-bind:book="book" v-bind:pannel="'details'" v-bind:gridListShow="'grid'"
                  @closePannel="closePannel" @updatePannel="openPannel" @deleteBook="deleteBook"
                ></HomeDetails>
              </div>

              <div v-else-if="updatePannel == book._id" :id="'update-' + book._id" class="card card-show">
                <HomeAddUpdate v-bind:book="book" v-bind:pannel="'update'" @closePannel="closePannel"></HomeAddUpdate>
              </div>

              <div v-else class="card card-equal-height">
                <HomeGrid v-bind:book="book" @openPannel="openPannel" @deleteBook="deleteBook"></HomeGrid>
              </div>
            </div>

            <div class="column" :class="columnSizesClass('add')">
              <div v-if="addPannel == true" id="add" class="card card-show">
                <HomeAddUpdate v-bind:pannel="'add'" @closePannel="closePannel"></HomeAddUpdate>
              </div>

              <a v-else @click="openPannel({pannel: 'addPannel', hash: 'add'})">
                <div class="card card-equal-height">
                  <div class="card-content">
                    <div class="content has-text-centered">
                      <span class="icon is-large has-text-primary">
                        <i class="fas fa-plus fa-4x"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div v-if="listShow == true">
            <HomeList v-bind:books="Books" @openPannel="openPannel" @deleteBook="deleteBook"></HomeList>

            <div v-if="detailsPannel !== false" :id="'details-' + book._id" class="card card-show">
              <HomeDetails v-bind:book="book" v-bind:pannel="'details'" v-bind:gridListShow="'list'" :key="book._id"
                @closePannel="closePannel" @updatePannel="openPannel" @deleteBook="deleteBook"
              ></HomeDetails>
            </div>

            <div v-if="updatePannel !== false" :id="'update-' + book._id" class="card card-show">
              <HomeAddUpdate v-bind:book="book" v-bind:pannel="'update'" v-bind:gridListShow="'list'" :key="book._id"
                @closePannel="closePannel"
              ></HomeAddUpdate>
            </div>

            <div v-if="addPannel == true" id="add" class="card card-show">
              <HomeAddUpdate v-bind:pannel="'add'" @closePannel="closePannel"></HomeAddUpdate>
            </div>
          </div>

        </div>
      </div>

    </section> -->

    <div class="pageloader" :class="{'is-active': lodding.page == true}"><span class="title">Chargement</span></div>

  </div>
</template>

<script>
import axios from 'axios';
import NavBar from '../NavBar';
import HomeGrid from './HomeGrid';
import HomeList from './HomeList';
import HomeDetails from './HomeDetails';
import HomeAddUpdate from './HomeAddUpdate';

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeGrid,
    HomeList,
    HomeDetails,
    HomeAddUpdate
  },
  data() {
    return {
      books: [],
      book: '',
      keys: [
        { 'label': 'title', 'abbr': 'Titre' },
        { 'label': 'author', 'abbr': 'Auteur' },
        { 'label': 'published_year', 'abbr': 'Date de publication' },
        { 'label': 'publisher', 'abbr': 'Publieur' },
      ],
      searchText: '',
      searchKeys: ['title', 'author', 'published_year', 'publisher', 'description'],
      gridSort: '',
      gridShow: true,
      listShow: false,
      detailsPannel: false,
      addPannel: false,
      updatePannel: false,
      lodding: {
        delete: { id: '' },
        page: false
      },
      errors: []
    }
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
      if (this.$router.currentRoute.hash) this.$router.replace({hash: ''})
      this.lodding.page = false
    },
    refreshList() {
      this.closePannel()
      this.getBooksList();
    },
    columnSizesClass(pannel, bookId) {
      let columnSizes = 'is-one-quarter'
      if (this.detailsPannel === bookId && pannel === 'detailsUpdate') columnSizes = 'is-half'
      if (this.updatePannel === bookId && pannel === 'detailsUpdate') columnSizes = 'is-three-quarters'
      if (this.addPannel === true && pannel === 'add') columnSizes = 'is-three-quarters'
      return columnSizes
    },
    gridListShow(show) {
      if (show === 'grid') {
        this.gridShow = true
        this.listShow = false
      }
      if (show === 'list') {
        this.gridShow = false
        this.listShow = true
      }
    },
    openPannel(openPannel) {
      this.closePannel()
      if (openPannel.pannel === 'detailsPannel' || openPannel.pannel === 'updatePannel') {
        this[openPannel.pannel] = openPannel.book._id
        this.book = openPannel.book
        this.$router.replace({hash: openPannel.hash})
      }
      if (openPannel.pannel === 'addPannel') {
        this[openPannel.pannel] = true
        this.$router.replace({hash: openPannel.hash})
      }
    },
    closePannel(closePannel) {
      this.detailsPannel = false
      this.updatePannel = false
      this.addPannel = false
      if (closePannel) {
        if (closePannel.pannel === 'add' || closePannel.pannel === 'update') {
          if (closePannel.refreshList === true) this.refreshList();
        }
      }
      if (this.$router.currentRoute.hash) this.$router.replace({hash: ''})
    },
    deleteBook: async function(id) {
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
    }
  },
  computed: {
    Books: function(data) {
      if (this.gridSort) {
        data.books.sort((a, b) => {
          if (a[this.gridSort] < b[this.gridSort]) return -1;
          if (a[this.gridSort] > b[this.gridSort]) return 1;
          return 0;
        });
      }
      if (this.searchText) {
        var filterBooks = []
        let lookup = {};
        let result = [];
        data.books.forEach(book => {
          this.searchKeys.forEach(key => {
            var response = book[key].toLowerCase().includes(this.searchText.toLowerCase())
            if (response === true) filterBooks.push(book)
          });
        });
        filterBooks.forEach(book => {
          if (!lookup[book._id]) {
            lookup[book._id] = true;
            result.push(book);
          }
        });
        return result
      } else {
        return data.books
      }
    }
  }
}
</script>
