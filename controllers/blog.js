const { Blog, BlogTag } = require('../model/blog');

async function getBlogs(req, res) {
  try {
    const { lastId, limit = 10 } = req.query; //
    const query = lastId ? { id: { $lt: lastId } } : {}; // Query for pagination
    const allBlogPosts = await Blog.find(query).populate({
      path: 'tags',
    }).sort({ id: -1 }).limit(limit).lean(); // Fetch limited blog posts for loadMore
    res.json({
      ...(!!lastId ? {} : {
        blogCarousel: {
          blogPost: await Blog.findOne({ inCarousel: true }).populate('tags').sort({ id: -1 }).lean()
        }
      }),
      allBlogPosts: allBlogPosts // Return all blog posts
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error: error.message });
  }
}

async function blogDetail(req, res) {
  try {
    const blog = await Blog.findOne({ id: req.params.id }).populate('tags').lean();
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({
      details: blog
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog details', error: error.message });
  }
}
//blog/search/:query   #example blog/search/What%20is%20daw
async function searchBlogs(req, res) {
  try {
    const query = decodeURIComponent(req.params.query);
    const tags = await BlogTag.find({ name: new RegExp(query, 'i') });
    const tagIds = tags.map(tag => tag._id);
    const searchResults = await Blog.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { excerpt: { $regex: query, $options: 'i' } },
        { tags: { $in:  tagIds } }
      ]
    }).populate('tags').lean();

    res.json({
      blogPosts: searchResults
    });
  } catch (error) {
    res.status(500).json({ message: 'Error searching blogs', error: error.message });
  }
}

async function insertTags() {
  const tags = [
    "DAW", "MMT", "Coreum", "Proof-of-Stake", "EGB", "Bad Idea AI", "Dominance",
    "Poloniex Newsletter", "The Morning Cup", "Web3", "Staking", "Ethereum",
    "Shanghai", "Ramses", "DEX", "AMM", "Capella", "Balancer", "Curve",
    "Sushiswap", "Lord of Dragons", "AMA", "LOGT", "KONPAY", "Uniswap",
    "Polygon", "Layer 2", "Core", "DAO", "Defi", "Blockchain", "Anniversary",
    "NFT", "Trading", "Year in review", "CEX", "cross margin", "Crypto 101",
    "Poloniex", "Futures Championships", "Market News", "Polopedia", "Hot topics",
    "The Open Network", "Fan Tokens", "World Cup 2022", "Futures", "News",
    "Aptos", "Layer 1", "GMX", "Tether", "USDT", "Crypto", "Learning",
    "Bear Market", "Metaverse", "Layer 0"
  ];

  const tagDocuments = tags.map(tag => ({ name: tag, slug: tag.toLocaleLowerCase().replace(/\s/g, "-") }));
  const newTags = await BlogTag.create(tagDocuments);
  const tagIds = newTags.map(tag => tag._id);
  return tagIds;
}

async function insertDummyBlogPosts() {
  let tagIds = await BlogTag.find().then(tags => tags.length ? tags.map(tag => tag._id) : insertTags());// get all tags from BlogTag, if non found insertTags
  const dummyPosts = [
    {
      title: "Understanding Proof-of-Stake",
      inCarousel: true,
      content: "## What is Proof-of-Stake?\nProof-of-Stake (PoS) is a consensus mechanism...\n",
      excerpt: "An overview of Proof-of-Stake and its benefits.",
      coverImage: "https://www.datocms-assets.com/51952/1676969136-the-morning-cup-banner.png?dpr=0.75&fit=crop&fm=webp&h=1000&w=2000",
      minutesToRead: 2,
      seo: [
        { tag: "facebook", content: { title: "Understanding Proof-of-Stake", description: "Learn about PoS." } },
        { tag: "twitter", content: { title: "Understanding Proof-of-Stake", description: "Learn about PoS." } }
      ],
      tags: [tagIds[3], tagIds[11]] 
    },
    {
      title: "The Rise of Web3",
      content: "## What is Web3?\nWeb3 represents the next generation of the internet...\n",
      excerpt: "Exploring the concept of Web3 and its implications.",
      coverImage: "https://www.datocms-assets.com/51952/1676969136-the-morning-cup-banner.png?dpr=0.75&fit=crop&fm=webp&h=1000&w=2000",
      minutesToRead: 2,
      seo: [
        { tag: "facebook", content: { title: "The Rise of Web3", description: "Discover Web3." } },
        { tag: "twitter", content: { title: "The Rise of Web3", description: "Discover Web3." } }
      ],
      tags: [tagIds[9], tagIds[12]] 
    },
    {
      title: "Exploring the Metaverse",
      content: "## What is the Metaverse?\nThe Metaverse is a collective virtual shared space...\n",
      excerpt: "A deep dive into the concept of the Metaverse.",
      coverImage: "https://example.com/metaverse-image.png",
      minutesToRead: 3,
      seo: [
        { tag: "facebook", content: { title: "Exploring the Metaverse", description: "Learn about the Metaverse." } },
        { tag: "twitter", content: { title: "Exploring the Metaverse", description: "Learn about the Metaverse." } }
      ],
      tags: [tagIds[5], tagIds[10]] 
    },
    {
      title: "The Future of Blockchain Technology",
      content: "## What is Blockchain?\nBlockchain technology is revolutionizing industries...\n",
      excerpt: "Understanding the future implications of blockchain.",
      coverImage: "https://example.com/blockchain-image.png",
      minutesToRead: 4,
      seo: [
        { tag: "facebook", content: { title: "The Future of Blockchain Technology", description: "Discover blockchain's future." } },
        { tag: "twitter", content: { title: "The Future of Blockchain Technology", description: "Discover blockchain's future." } }
      ],
      tags: [tagIds[1], tagIds[8]] 
    },
    {
      title: "Decentralized Finance: A New Era",
      content: "## What is DeFi?\nDecentralized Finance (DeFi) is transforming finance...\n",
      excerpt: "An overview of DeFi and its impact on traditional finance.",
      coverImage: "https://example.com/defi-image.png",
      minutesToRead: 3,
      seo: [
        { tag: "facebook", content: { title: "Decentralized Finance: A New Era", description: "Learn about DeFi." } },
        { tag: "twitter", content: { title: "Decentralized Finance: A New Era", description: "Learn about DeFi." } }
      ],
      tags: [tagIds[2], tagIds[7]] 
    },
    {
      title: "Understanding NFTs",
      content: "## What are NFTs?\nNon-Fungible Tokens (NFTs) are unique digital assets...\n",
      excerpt: "Exploring the world of NFTs and their significance.",
      coverImage: "https://example.com/nft-image.png",
      minutesToRead: 2,
      seo: [
        { tag: "facebook", content: { title: "Understanding NFTs", description: "Discover NFTs." } },
        { tag: "twitter", content: { title: "Understanding NFTs", description: "Discover NFTs." } }
      ],
      tags: [tagIds[4], tagIds[6]] 
    },
    {
      title: "The Impact of AI on Finance",
      content: "## How AI is Changing Finance?\nArtificial Intelligence is reshaping the finance sector...\n",
      excerpt: "A look at AI's influence on financial services.",
      coverImage: "https://example.com/ai-finance-image.png",
      minutesToRead: 3,
      seo: [
        { tag: "facebook", content: { title: "The Impact of AI on Finance", description: "Learn about AI in finance." } },
        { tag: "twitter", content: { title: "The Impact of AI on Finance", description: "Learn about AI in finance." } }
      ],
      tags: [tagIds[0], tagIds[3]] 
    },
    {
      title: "Cryptocurrency Trading Strategies",
      content: "## How to Trade Cryptocurrencies?\nEffective strategies for trading in the crypto market...\n",
      excerpt: "Tips and strategies for successful cryptocurrency trading.",
      coverImage: "https://example.com/trading-image.png",
      minutesToRead: 4,
      seo: [
        { tag: "facebook", content: { title: "Cryptocurrency Trading Strategies", description: "Discover trading strategies." } },
        { tag: "twitter", content: { title: "Cryptocurrency Trading Strategies", description: "Discover trading strategies." } }
      ],
      tags: [tagIds[1], tagIds[5]] 
    },
    {
      title: "The Evolution of Digital Assets",
      content: "## What are Digital Assets?\nDigital assets are transforming ownership and value...\n",
      excerpt: "Understanding the evolution and future of digital assets.",
      coverImage: "https://example.com/digital-assets-image.png",
      minutesToRead: 3,
      seo: [
        { tag: "facebook", content: { title: "The Evolution of Digital Assets", description: "Learn about digital assets." } },
        { tag: "twitter", content: { title: "The Evolution of Digital Assets", description: "Learn about digital assets." } }
      ],
      tags: [tagIds[2], tagIds[6]] 
    },
    {
      title: "The Role of Smart Contracts",
      content: "## What are Smart Contracts?\nSmart contracts are self-executing contracts with the terms...\n",
      excerpt: "Exploring the significance of smart contracts in blockchain.",
      coverImage: "https://example.com/smart-contracts-image.png",
      minutesToRead: 3,
      seo: [
        { tag: "facebook", content: { title: "The Role of Smart Contracts", description: "Discover smart contracts." } },
        { tag: "twitter", content: { title: "The Role of Smart Contracts", description: "Discover smart contracts." } }
      ],
      tags: [tagIds[3], tagIds[8]] 
    },
    {
      title: "The Future of Decentralized Applications",
      content: "## What are DApps?\nDecentralized applications are changing the way we interact...\n",
      excerpt: "A look into the future of DApps and their potential.",
      coverImage: "https://example.com/dapps-image.png",
      minutesToRead: 3,
      seo: [
        { tag: "facebook", content: { title: "The Future of Decentralized Applications", description: "Learn about DApps." } },
        { tag: "twitter", content: { title: "The Future of Decentralized Applications", description: "Learn about DApps." } }
      ],
      tags: [tagIds[4], tagIds[9]] 
    },
  ];

  await Blog.create(dummyPosts)
}
// ... existing code ...
module.exports = {
  getBlogs,
  blogDetail,
  searchBlogs,
  insertDummyBlogPosts
};