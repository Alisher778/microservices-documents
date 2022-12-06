const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fieldOptions = {
  type: String,
  required: true,
  uniq: true,
};

const documentsSchema = new Schema({
  title: {
    type: String,
    required: true,
    uniq: true,
    text: true,
  },
  userId: {
    type: String,
    required: true,
    uniq: true,
    index: true,
  },
}, {
  timestamps: true
});

const Documents = mongoose.model("Documents", documentsSchema);

module.exports = Documents;
