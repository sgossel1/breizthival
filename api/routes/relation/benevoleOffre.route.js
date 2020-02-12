var express = require('express');
var router = express.Router();
var passport = require('passport');
require('../../config/passport')(passport);
var roles = require('../../config/roles');
var controllers = require('../../controllers/relation/benevoleOffre.controllers');

/* GET ALL BENEVOLE OFFRES */
router.get('/',
  passport.authenticate('jwt', {
    session: false
  }),
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.list
);

/* GET SINGLE BENEVOLE OFFRE BY ID */
router.get('/:id',
  passport.authenticate('jwt', {
    session: false
  }),
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.get
);

/* SAVE BENEVOLE OFFRE */
router.post('/',
  passport.authenticate('jwt', {
    session: false
  }),
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.add
);

/* UPDATE BENEVOLE OFFRE */
router.post('/:id',
  passport.authenticate('jwt', {
    session: false
  }),
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.update
);

/* DELETE BENEVOLE OFFRE */
router.delete('/:id',
  passport.authenticate('jwt', {
    session: false
  }),
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.delete
);

module.exports = router;
