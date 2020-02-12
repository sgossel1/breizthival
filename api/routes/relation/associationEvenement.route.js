var express = require('express');
var router = express.Router();
var passport = require('passport');
require('../../config/passport')(passport);
var roles = require('../../config/roles');
var controllers = require('../../controllers/relation/associationEvenement.controllers');

/* GET ALL ASSOCIATIONS */
router.get('/',
  passport.authenticate('jwt', {
    session: false
  }),
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.list
);

/* GET SINGLE ASSOCIATION BY ID */
router.get('/:id',
  passport.authenticate('jwt', {
    session: false
  }),
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.get
);

/* SAVE ASSOCIATION */
router.post('/',
  passport.authenticate('jwt', {
    session: false
  }),
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.add
);

/* UPDATE ASSOCIATION */
router.post('/:id',
  passport.authenticate('jwt', {
    session: false
  }),
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.update
);

/* DELETE ASSOCIATION */
router.delete('/:id',
  passport.authenticate('jwt', {
    session: false
  }),
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.delete
);

module.exports = router;
