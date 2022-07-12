const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {

    member:{
        
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Conversation", ConversationSchema);