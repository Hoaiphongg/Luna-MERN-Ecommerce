const express = require('express')
const {
  createProduct,
  getAllProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require('../controller/productController')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewares')

const router = express.Router()

router.post('/', authMiddleware, isAdmin, createProduct)
router.get('/:id', getProduct)
router.put('/:id', authMiddleware, isAdmin, updateProduct)
router.delete('/:id', authMiddleware, isAdmin, deleteProduct)

router.get('/', getAllProduct)

module.exports = router
