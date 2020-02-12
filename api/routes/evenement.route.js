var express = require('express');
var router = express.Router();
var passport = require('passport');
require('../config/passport')(passport);
var roles = require('../config/roles');
var controllers = require('../controllers/evenement.controllers');

/* GET ALL EVENEMENTS */
router.get('/',
  passport.authenticate('jwt', {
    session: false
  }),
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.list
);

/* GET SINGLE EVENEMENT BY ID */
router.get('/:id',
  passport.authenticate('jwt', {
    session: false
  }),
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.get
);

/* SAVE EVENEMENT */
router.post('/',
  passport.authenticate('jwt', {
    session: false
  }),
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.add
);

/* UPDATE EVENEMENT */
router.post('/:id',
  passport.authenticate('jwt', {
    session: false
  }),
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.update
);

/* DELETE EVENEMENT */
router.delete('/:id',
  passport.authenticate('jwt', {
    session: false
  }),
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.delete
);

module.exports = router;
