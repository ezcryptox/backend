const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const schema = mongoose.Schema;

const ArticleSchema = new schema({
  type: {
    type: String, // news, article
    required: true
  },
  category: {
    type: Number, // 1, 2, 3, 4
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
  },
  source: {
    type: String,
  },
  sourceLink: {
    type: String,
  },
  author: {
    type: String,
  },
  praiseNumber: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

ArticleSchema.plugin(AutoIncrement, { inc_field: 'id', id: 'article_counter' });

module.exports = mongoose.model('Article', ArticleSchema);