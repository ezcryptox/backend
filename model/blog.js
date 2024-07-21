const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const schema = mongoose.Schema;
const BlogTagSchema = new schema({
  id: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  }
});

const BlogSchema = new schema({
  id: {
    type: Number,
    unique: true,
  },
  inCarousel: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  coverImage: {
    type: String,
  },
  excerpt: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  tags: [{
    type: schema.Types.ObjectId,
    ref: 'BlogTag'
  }],
  slug: {
    type: String,
    required: true
  },
  minutesToRead: {
    type: Number,
  },
  seo: [{
    attributes: {
      type: Object,
    },
    content: {
      type: String,
    },
    tag: {
      type: String,
    }
  }]
}, { timestamps: true });

BlogSchema.plugin(AutoIncrement, { inc_field: 'id' });
BlogTagSchema.plugin(AutoIncrement, { inc_field: 'id' });
const Blog = mongoose.model('Blog', BlogSchema);
const BlogTag = mongoose.model('BlogTag', BlogTagSchema);
module.exports = { Blog, BlogTag };