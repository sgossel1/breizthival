var express = require('express');
var router = express.Router();
var passport = require('passport');
require('../config/passport')(passport);
var roles = require('../config/roles');
var controllers = require('../controllers/site.controllers');

/* GET ALL SITES */
router.get('/',
  passport.authenticate('jwt', {
    session: false
  }),
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.list
);

/* GET SINGLE SITE BY ID */
router.get('/:id',
  passport.authenticate('jwt', {
    session: false
  }),
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.get
);

/* SAVE SITE */
router.post('/',
  passport.authenticate('jwt', {
    session: false
  }),
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.add
);

/* UPDATE SITE */
router.post('/:id',
  passport.authenticate('jwt', {
    session: false
  }),
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.update
);

/* DELETE SITE */
router.delete('/:id',
  passport.authenticate('jwt', {
    session: false
  }),
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.delete
);

module.exports = router;
