const express = require('express')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewares')
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlog,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  uploadImage,
} = require('../controller/blogController')
const { uploadPhoto, blogImgResize } = require('../middlewares/uploadImage')

const router = express.Router()

router.post('/', authMiddleware, isAdmin, createBlog)
router.put(
  '/upload/:id',
  authMiddleware,
  isAdmin,
  uploadPhoto.array('images', 10),
  blogImgResize,
  uploadImage
)

router.put('/likes', authMiddleware, likeBlog)
router.put('/dislikes', authMiddleware, dislikeBlog)

router.put('/:id', authMiddleware, isAdmin, updateBlog)
router.delete('/:id', authMiddleware, isAdmin, deleteBlog)
router.get('/:id', getBlog)
router.get('/', getAllBlog)

module.exports = router
