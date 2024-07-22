const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const schema = mongoose.Schema;
const BlogTagSchema = new schema({
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
  },
  minutesToRead: {
    type: Number,
  },
  seo: [{
    content: {
      type: Object,
    },
    tag: {
      type: String,
    }
  }]
}, { timestamps: true });

BlogSchema.plugin(AutoIncrement, { inc_field: 'id', id: 'blog_counter' });
BlogTagSchema.plugin(AutoIncrement, { inc_field: 'id', id: 'blog_tag_counter' });
const Blog = mongoose.model('Blog', BlogSchema);
const BlogTag = mongoose.model('BlogTag', BlogTagSchema);
module.exports = { Blog, BlogTag };