// db.js

const messages = [
  { id: 0, text: "Hi there!", user: "Amanda", added: new Date() },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
async function getUserById(userId) {
  return messages.find((message) => message.id === userId);
}

module.exports = { getUserById };
