const router = require('express').Router();

// Routes in here are the ones in the api folder
const userRoutes = require('./user-Routes');
const axiosRoutes = require('./axios-Route.js');

router.use('/users', userRoutes);
router.use('/axiosR', axiosRoutes);

module.exports = router;