const express = require('express')
const {
  createProduct,
  getAllProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  addToWishList,
  rating,
  uploadImage,
  getWishList,
} = require('../controller/productController')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewares')
const { uploadPhoto, productImgResize } = require('../middlewares/uploadImage')

const router = express.Router()

router.post('/', authMiddleware, isAdmin, createProduct)
router.put(
  '/upload/:id',
  authMiddleware,
  isAdmin,
  uploadPhoto.array('images', 10),
  productImgResize,
  uploadImage
)
router.get('/:id', getProduct)
router.put('/wishlist', authMiddleware, addToWishList)
router.put('/rating', authMiddleware, rating)

router.put('/:id', authMiddleware, isAdmin, updateProduct)
router.delete('/:id', authMiddleware, isAdmin, deleteProduct)

router.get('/', getAllProduct)

module.exports = router
