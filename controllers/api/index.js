const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const exerciseRoutes = require('./exerciseRoutes.js');

router.use('/users', userRoutes);
router.use('/exercise', exerciseRoutes);

module.exports = router;