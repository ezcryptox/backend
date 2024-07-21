const express = require('express');
const router = express.Router();
const { getArticles, insertDummyArticles, articleDetail, toggleArticlePraise } = require('../controllers/article');
const requireAuth = require('../middleware/requireAuth')

router.post('/:id/praise', requireAuth, toggleArticlePraise);
router.get('/:id', articleDetail);
router.get('list', getArticles);

//TODO: Remove dummy function
router.post('dummy-articles', async (req, res) => {
  try {
    await insertDummyArticles();
    res.json("success")
  } catch (error) {
    res.status(500).send('Error => ' + error.message)
  }
})

module.exports = router;