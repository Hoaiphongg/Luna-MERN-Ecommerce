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
} = require('../controller/userController')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewares')
const router = express.Router()

router.post('/register', createUser)
router.put('/password', authMiddleware, updatePassword)
router.post('/forgot-password-token', forgotPasswordToken)
router.post('/login', loginUserController)
router.get('/refresh', handleRefreshToken)
router.get('/logout', logout)
router.get('/all-user', getAllUser)

router.get('/:id', authMiddleware, isAdmin, getUser)
router.delete('/:id', deleteUser)
router.put('/edit-user', authMiddleware, updateUser)
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser)
router.put('/unBlock-user/:id', authMiddleware, isAdmin, unblockUser)

module.exports = router
