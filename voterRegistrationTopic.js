const {
  Client,
  PrivateKey,
  TopicId,
  TopicMessageSubmitTransaction
} = require("@hashgraph/sdk");
const crypto = require("crypto");
require('dotenv').config();

const client = Client.forTestnet()
  .setOperator(
    process.env.MY_ACCOUNT_ID,
    PrivateKey.fromStringECDSA(process.env.MY_PRIVATE_KEY)
  );

// 👇 Convert string topic ID to TopicId object
const topicId = TopicId.fromString(process.env.VOTER_REGISTRATION_TOPIC_ID);

// ✅ Call this after voter is added to DB or files are stored
const publishToHCS = async (registrationData) => {
  try {
    const message = JSON.stringify(registrationData);
    console.log(topicId ? "✅ Topic ID exists" : "❌ Topic ID missing");

    const tx = await new TopicMessageSubmitTransaction()
      .setTopicId(topicId)
      .setMessage(message)
      .execute(client);

    const receipt = await tx.getReceipt(client);
    console.log("📩 Message Published to Hedera. Status:", receipt.status.toString());
  } catch (err) {
    console.error("❌ Failed to publish message:", err);
  }
};

module.exports = { publishToHCS };
