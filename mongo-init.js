db.createUser({
    user: "app",
    pwd: "appmongo",
    roles: [{
        role: "readWrite",
        db: "app"
      }]
});