const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const schema = mongoose.Schema;

const ArticlePraiseSchema = new schema({
  user_id: {
    type: String,
    required: true
  },
  article_id: {
    type: Number,
    required: true
  },
}, { timestamps: true });

ArticlePraiseSchema.plugin(AutoIncrement, { inc_field: 'id', id: 'article_praise_counter' });

module.exports = mongoose.model('ArticlePraise', ArticlePraiseSchema);