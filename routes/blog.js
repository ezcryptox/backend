const express = require('express');
const router = express.Router();
const { searchBlogs, getBlogs, blogDetail, insertDummyBlogPosts } = require('../controllers/blog');


router.get('/list', getBlogs);
router.get('/detail/:id', blogDetail);
router.get('/search/:query', searchBlogs);

//TODO: Remove dummy function
router.post('/dummy-blog', async (req, res) => {
  try {
    await insertDummyBlogPosts();
    res.json("success")
  } catch (error) {
    console.log(error)
    res.status(500).send('Error => ' + error.message)
  }
})

module.exports = router;