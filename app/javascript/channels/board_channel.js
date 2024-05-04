import consumer from "./consumer";

consumer.subscriptions.create({ channel: "BoardChannel", board_id: window.boardId }, {
  connected() {

  },

  disconnected() {
  },

  received(data) {
  }
});
