const express = require('express')
const {
  createUser,
  getAllUser,
  loginUserController,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  loginAdminController,
  getWishList,
  saveUserAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
} = require('../controller/userController')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewares')
const router = express.Router()

router.post('/register', createUser)
router.post('/forgot-password-token', forgotPasswordToken)

router.put('/password', authMiddleware, updatePassword)
router.post('/login', loginUserController)
router.post('/cart', authMiddleware, userCart)
router.post('/cart/applycoupon', authMiddleware, applyCoupon)
router.post('/cart/cash-order', authMiddleware, createOrder)
router.post('/adminlogin', loginAdminController)

router.get('/refresh', handleRefreshToken)
router.get('/logout', logout)
router.get('/all-user', getAllUser)
router.get('/get-orders', authMiddleware, getOrders)
router.get('/wishlist', authMiddleware, getWishList)
router.get('/cart', authMiddleware, getUserCart)
router.put('/save-address', authMiddleware, saveUserAddress)
router.put(
  '/order/update-order/:id',
  authMiddleware,
  isAdmin,
  updateOrderStatus
)

router.get('/:id', authMiddleware, isAdmin, getUser)
router.delete('/empty-cart', authMiddleware, emptyCart)
router.delete('/:id', deleteUser)
router.put('/edit-user', authMiddleware, updateUser)
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser)
router.put('/unBlock-user/:id', authMiddleware, isAdmin, unblockUser)

module.exports = router
