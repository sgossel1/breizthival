# tuto
https://www.djamware.com/post/5ac8338780aca714d19d5b9e/securing-mevn-stack-vuejs-2-web-application-using-passport
https://blog.bitsrc.io/uploading-files-and-images-with-vue-and-express-2018ca0eecd0

**add**
```bash
curl -i -X POST -H "Content-Type: application/json" -d '{ "isbn":"211333122, 98872233321123","title":"How to Build MEVN Stack","author": "Didin J.","description":"The comprehensive step by step tutorial on how to build MEVN (MongoDB, Express.js, Vue.js and Node.js) stack web application from scratch","published_year":"2017","publisher":"Djamware.com" }' http://127.0.0.1:3000/api/book
```

> A Breizhtival web app

## Build Setup

``` bash
# install dependencies
npm install --save-dev

# serve dev with hot reload at localhost:8080 for frontend and localhost:3000 for backend
npm run docker-mongo-dev
npm run dev
npm run vue

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

> Docker vscode intégration helper
```bash
# Controle
$> ls -l /var/run/ | grep docker
lrw-rw----  1 root   docker   66 16 déc 13:14 docker.sock

# Change permission
$> chmod 666 /var/run/docker.sock

# Controle
$> ls -l /var/run/ | grep docker
lrw-rw-rw-  1 root   docker   66 16 déc 13:14 docker.sock
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
