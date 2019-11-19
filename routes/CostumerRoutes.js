const express = require('express');
const CostumetController = require('../controllers/costumerControllers');
const router = express.Router();


router.route('/').get(CostumetController.getAll).post(CostumetController.createCostumer).delete(CostumetController.deleteAll);
router.route('/:id').get(CostumetController.getById).patch(CostumetController.updateById).delete(CostumetController.deleteById);
module.exports = router;