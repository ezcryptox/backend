const Article = require('../model/article');
const ArticleVotes = require('../model/articlePraise');

async function getArticles(req, res) {
  const { page = 1, limit = 10, category, type = "news" } = req.query;
  let query = category ? { category } : {};
  query.type = type;

  try {
    const articles = await Article.find(query)
      .select(type === 'article' ? '-content' : '')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    const count = await Article.countDocuments(query);
    res.json({
      articles,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function articleDetail (req, res) {
  try {
    const article = await Article.findOne({ id: req.params.id });
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


async function toggleArticlePraise (req, res){
  const user_id = req.id;

  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ message: 'Article not found' });

    // Check if the user has already voted
    const existingVote = await ArticleVotes.findOne({ user_id, article: article.id });

    if (!existingVote) {
      await ArticleVotes.create({ user_id, article: article.id });
      article.praiseNumber += 1;
    } else if (action === 'decrement') {
      await ArticleVotes.deleteOne({ user_id, article: article.id });
      article.praiseNumber -= 1;
    }

    await article.save();
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
// ... existing code ...

const generateDummyArticles = () => {
  const articles = [];
  const categories = [1, 2, 3, 4];
  const newsContent = [
    "Bitcoin hits new all-time high amid market excitement.",
    "Ethereum 2.0 upgrade brings significant improvements.",
    "Crypto regulations are tightening globally.",
    "DeFi projects continue to gain traction.",
    "NFTs are revolutionizing digital art.",
    "Major banks are adopting blockchain technology.",
    "Crypto mining faces environmental scrutiny.",
    "Stablecoins are becoming increasingly popular."
  ];

  const articleContent = [
    "<h1>The Future of Cryptocurrency</h1><p>Cryptocurrency is changing the financial landscape.</p>",
    "<h1>Understanding Blockchain Technology</h1><p>Blockchain is the backbone of cryptocurrencies.</p>",
    "<h1>Investing in Crypto: What You Need to Know</h1><p>Investing in crypto requires careful consideration.</p>",
    "<h1>Risks of Cryptocurrency Trading</h1><p>Trading cryptocurrencies can be highly volatile.</p>",
    "<h1>How to Secure Your Crypto Assets</h1><p>Security is paramount in the crypto world.</p>"
  ];

  // Generate news articles
  categories.forEach(category => {
    for (let i = 0; i < 2; i++) {
      articles.push({
        type: 'news',
        category: category,
        title: `Crypto News ${category}-${i + 1}`,
        content: newsContent[Math.floor(Math.random() * newsContent.length)],
        imageUrl: '',
        source: 'Crypto News Source',
        sourceLink: 'http://cryptonews.com',
        author: 'Author Name',
        praiseNumber: 0
      });
    }
  });

  // Generate article articles
  for (let i = 0; i < 5; i++) {
    articles.push({
      type: 'article',
      title: `Crypto Article ${i + 1}`,
      content: articleContent[i],
      imageUrl: '',
      source: 'Crypto Article Source',
      sourceLink: 'http://cryptoarticles.com',
      author: 'Author Name',
      praiseNumber: 0
    });
  }

  return articles;
};

const insertDummyArticles = async () => {
  try {
    await mongoose.model('Article').insertMany(generateDummyArticles);
    console.log("Dummy articles inserted successfully.");
  } catch (error) {
    console.error("Error inserting dummy articles:", error);
  }
};

// ... existing code ...
module.exports = {
  toggleArticlePraise,
  articleDetail,
  getArticles,
  insertDummyArticles
};