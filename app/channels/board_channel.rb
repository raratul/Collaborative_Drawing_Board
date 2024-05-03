class BoardChannel < ApplicationCable::Channel
  def subscribed
    stream_from "board_channel_#{params[:board_id]}"
  end

  def draw(data)
    board = Board.find(data['board_id'])
    user = User.find(data['user_id'])
    drawing = Drawing.create(content: data['content'], board: board, user: user)
    BoardChannel.broadcast_to(board, drawing: drawing)
  end
end
